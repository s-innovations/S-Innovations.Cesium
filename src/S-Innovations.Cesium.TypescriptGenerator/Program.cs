using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using HtmlAgilityPack;

namespace SInnovations.Cesium.TypescriptGenerator
{
    public class OptionsWriter
    {
        private string _name;
        private string _source;
        public OptionsWriter(string name,string source)
        {
            _name = name;
            _source = source;
        }
        public Dictionary<string, string> GetSignatureTypes(HtmlNode node)
        {
            var signatureParams = node.SelectSingleNode(@".//table[@class='params']/tbody");
            if (signatureParams == null)
                return new Dictionary<string, string>();

            var rows = signatureParams.Elements("tr");
            return rows.ToDictionary(
                VariableNameResolver,
                VariableTypeResolver);

        }
        private string VariableNameResolver(HtmlNode row)
        {
            var isOptional = row.SelectSingleNode(@".//td[contains(@class,'description')]/span[@class='optional']");

            var variable = row.SelectSingleNode(@".//td[@class=""name"" ]").InnerText + (isOptional != null ? "?" : "");
            return variable;
        }
        private string VariableTypeResolver(HtmlNode row)
        {
            var tdType = row.SelectSingleNode(@".//td[@class=""type"" ]");
            //EntityCollection  contains(entity) as no type information.
            var typeNodes = tdType.SelectNodes(@".//span[@class='param-type']");
            if (typeNodes == null)
                return "any";

            var types = typeNodes.Select(Program.TypeReader).ToArray().Distinct();

            if (!types.Skip(1).Any() && types.First() == "Object")
            {


                var props = GetSignatureTypes(row.SelectSingleNode(@".//td[contains(@class,'description')]"));

                
                

                if (props.Keys.Any())
                {
                    
                    //   var type = "opt_" + Program.CalculateMD5Hash(string.Join("", props.Keys.OrderBy(k => k)));
                    var type = this._name + "Options";
                    var dependencies = new List<string>();

                    var writer = Program.GetWriter(type,_source);
                    if (writer != null)
                    {
                       

                        props = props.ToDictionary(k => k.Key, v => Program.extractDependencies(dependencies, v.Value));


                        Program.WriteDependencies(type, dependencies, writer, null, null, _source);


                        writer.WriteLine($"interface {type}");
                        writer.WriteLine("{");
                        foreach (var prop in props)
                        {
                           
                            writer.WriteLine($"\t{prop.Key}: {prop.Value};");

                        }
                        writer.WriteLine("}");
                        writer.WriteLine($"export = {type}");

                    }

                    return "Cesium." + type;
                }

            }

            return string.Join("|", types);

        }
    }
    public class Program
    {
        static Options Options = new Options();

        static Dictionary<string, StreamWriter> files = new Dictionary<string, StreamWriter>();
        static Dictionary<string, string> classExtents = new Dictionary<string, string>
        {
            { "CzmlDataSource", "extends Cesium.DataSource" },
            {"TimeIntervalCollectionProperty", "extends Property" },
            {"VelocityOrientationProperty" , "extends Property" }

        };
        static Dictionary<string, string> signatureOverrides = new Dictionary<string, string>
        {
            {"defaultValue","<T>(a,b:T) : T" }
        };
        static Dictionary<string, string> nameMaps = new Dictionary<string, string>
        {
            {"CesiumMath","Math" }
        };
        static Dictionary<string, string> typeMaps = new Dictionary<string, string>
        {
            {"Cesium.Property", "Cesium.Property|string" }
        };

        static Dictionary<string, string> classToPath = new Dictionary<string, string>();
        public static StreamWriter GetWriter(string className, string source = ".")
        {
            var filePath = Path.Combine("tempOut", Path.GetDirectoryName(source) , className);

            if (!string.IsNullOrEmpty(Path.GetDirectoryName(filePath)))
                Directory.CreateDirectory(Path.GetDirectoryName(filePath));
            
            if (File.Exists($"{filePath}.d.ts"))
                return null;

            if (!files.ContainsKey(filePath))
            {
                files[filePath] = new StreamWriter(new FileStream($"{filePath}.d.ts", FileMode.Create));
            }
            classToPath[className] = Path.Combine(Path.GetDirectoryName(source) , className);
            return files[filePath];
        }
        static void Main(string[] args)
        {



            if(Directory.Exists("tempOut"))
                Directory.Delete("tempOut",true);

            Options.BaseUrl = "https://cesiumjs.org/Cesium/Build/Documentation/";
			HtmlDocument index = GetDocument($"{Options.BaseUrl.TrimEnd('/')}/index.html");
			var classLinks = index.DocumentNode.SelectNodes(@"//*[@id=""ClassList""]/li");
			foreach (var link in classLinks) {
				Options.Class.Add(link.InnerText);
			}


            // Options.OutputPath = @"C:\dev\AscendXYZ Portal\typings\Cesium.d.ts";

            if (CommandLine.Parser.Default.ParseArguments(args, Options))
            {

                foreach (var name in Options.Class)
                {
                    var url = $"{Options.BaseUrl.TrimEnd('/')}/{name}.html";
                    ExtractCLass(url);
                }

                var promish = GetWriter("Promise");
                promish.WriteLine("class Promise<T>");
                promish.WriteLine("{");
                promish.WriteLine("constructor(doneHandler?:(obj:T)=>void,errorHandler?:(obj:any)=>void)");
                promish.WriteLine("then(result:T);");
                promish.WriteLine("}");
                promish.WriteLine("export = Promise");

                var when = GetWriter("when");
                when.WriteLine("import Promise = require(\"./Promise\");");
                when.WriteLine("function when<T>(promise:Promise<T>, succes:(result)=>void, fail:(result)=>void) : void");         
                when.WriteLine("export = when;");

                //var bingMapApi = GetWriter("BingMapApi");
                //bingMapApi.WriteLine("  export module BingMapsApi {");
                //bingMapApi.WriteLine("  var defaultKey;");
                //bingMapApi.WriteLine("}");

                var cesium = GetWriter("Cesium");
                foreach (var cls in Directory.GetFiles("tempOut","*.*",SearchOption.AllDirectories)
                    .Select(f=>Path.GetFileName(f).Substring(0, Path.GetFileName(f).Length-5))
                    .Where(f=>!f.EndsWith("Options"))
                    .Where(f=>f!="Cesium")) {

                    WriteDependency(cesium, "Cesium.d.ts", cls,true, cls == "CesiumMath" ? "Math":null);
                }

             


            }
            foreach (var writer in files.Values)
            {
                writer.Dispose();
            }
            var local = "Cesium.d.ts";
            File.AppendAllLines(local, new string[] { @"declare module ""cesium"" {", "module Cesium {" });
            foreach (var file in Directory.GetFiles(".", "*.d.ts"))
            {
                if (Path.GetFileName(file) == local)
                    continue;
                File.AppendAllLines(local, File.ReadAllLines(file));
            }
            File.AppendAllLines(local, new string[] { "}", " export = Cesium;", " }" });
            if(!string.IsNullOrEmpty(Options.OutputPath))
                File.Copy(local, Options.OutputPath, true);
            if (Directory.Exists("../../../../artifacts/src"))
                Directory.Delete("../../../../artifacts/src", true);
            Thread.Sleep(1000);
            Directory.Move("tempOut", "../../../../artifacts/src");
        }
        static Dictionary<string, string> urlsToClass = new Dictionary<string, string>();

        static string ExtractCLass(string url)
        {
            if (urlsToClass.ContainsKey(url))
                return urlsToClass[url];

            urlsToClass.Add(url, Path.GetFileNameWithoutExtension(url));
            Console.WriteLine($"Dowloadinging {url}");
            HtmlDocument doc = GetDocument(url);

            var sourceLinkNode = doc.DocumentNode.SelectSingleNode(@"//*[@id=""main""]/section/article/div/dd/dl/div") ?? doc.DocumentNode.SelectSingleNode(@"//*[@id=""main""]/section/article/div/dl/div");
            var source = sourceLinkNode.SelectSingleNode(".//a").InnerText.Substring(0, sourceLinkNode.SelectSingleNode(".//a").InnerText.LastIndexOf(","));
            Console.WriteLine($"Source : {source}");

            var classdt = doc.DocumentNode.SelectSingleNode(@"//*[@id=""main""]/section/article/div/dt");
            var signatureName = Path.GetFileNameWithoutExtension(url);
            var signature = "()";
            var signatureReturnType = " : void";
            var dependencies = new List<string>();
            StreamWriter writer = null;
            if (classdt != null)
            {
                var ctor = classdt.SelectSingleNode(".//div/h4");
                signatureName = ctor.GetAttributeValue("id", null);

                if (nameMaps.ContainsKey(signatureName))
                    signatureName = nameMaps[signatureName];

                writer = GetWriter(signatureName, source);

                var optionsParser = new OptionsWriter(signatureName,source);

                var signatureParams = optionsParser.GetSignatureTypes(classdt.SelectSingleNode(".//following-sibling::dd"));
                var signatureNode = ctor.SelectSingleNode(@".//span[@class=""signature"" ]");
                signature = signatureOverrides.ContainsKey(signatureName) ? signatureOverrides[signatureName] : signatureNode.InnerText;
              

                var signatureReturnNode = ctor.SelectSingleNode(@".//span[@class=""type-signature returnType"" ]");
                if (signatureReturnNode != null)
                    signatureReturnType = " : " + ArrayTypeFixer(TypeNormalizer(signatureReturnNode.InnerText));
                if (signatureOverrides.ContainsKey(signatureName))
                    signatureReturnType = "";

                if (!signatureOverrides.ContainsKey(signatureName) && signatureParams.Any())
                {
                    var optionals = (signatureNode.SelectNodes(@".//span[@class=""optional"" ]") ?? new HtmlNodeCollection(signatureNode))
                        .Select(o => o.InnerText).ToArray();

                    foreach (var ctorParam in signatureParams)
                    {
                        var name = ctorParam.Key;
                        var types = ctorParam.Value.Replace("Object", "any");
                        
                        types = extractDependencies(dependencies, types);


                        signature = signature.Replace(name.TrimEnd('?'), $"{name} : {types}");

                    }
                }
            }

            if(writer == null)
                writer = GetWriter(signatureName, source); 


            var methods = ParseAndWriteMethods(doc, source);
            
           

            if (Char.IsLower(signatureName.First()))
            {
                var members = ParseAndWriteMembers(doc, true);
                WriteDependencies(signatureName, dependencies, writer, methods, members,source);

                //var interfaceName = $"{signatureName.Substring(0, 1).ToUpper()}{signatureName.Substring(1)}Static";

                //writer.WriteLine($"interface {interfaceName}");
                //writer.WriteLine("{");
                //writer.WriteLine($"\t{signature}{signatureReturnType};");
                //writer.WriteLine(members.part);
                //writer.WriteLine();
                //writer.WriteLine(methods.part);
                //writer.WriteLine("}");
                //  writer.WriteLine($"export var {signatureName} : {interfaceName}");
                

                writer.WriteLine($"function {signatureName}{signature}{signatureReturnType};");
                writer.WriteLine($"export = {signatureName}");
            }
            else
            {

                var members = ParseAndWriteMembers(doc, false);
                var extends = classExtents.ContainsKey(signatureName) ? classExtents[signatureName] : "";
                extends = extractDependencies(dependencies, extends);
                WriteDependencies(signatureName, dependencies, writer, methods, members,source);

              
                
                writer.WriteLine($"class {signatureName} {extends}");
                writer.WriteLine("{");
                writer.WriteLine($"\tconstructor{signature};");
                writer.WriteLine(members.part);
                writer.WriteLine();
                writer.WriteLine(methods.part);
                writer.WriteLine("}");
                writer.WriteLine($"export = {signatureName}");
            }


            return signatureName;
        }

        public static void WriteDependencies(string signatureName, List<string> dependencies, StreamWriter writer, MethodResult methods, MethodResult members, string currentPath)
        {
            var dependenciesList = dependencies.ToArray().ToList();
            if (members != null)
                dependenciesList.AddRange(members.dependencies);
            if (methods != null)
                dependenciesList.AddRange(methods.dependencies);

            foreach (var dep in dependenciesList.Distinct().Where(d => d != signatureName))
            {
                WriteDependency(writer, currentPath, dep);
            }
        }

        private static void WriteDependency(StreamWriter writer, string currentPath, string dep, bool export = false, string localName = null)
        {
            var path = classToPath.ContainsKey(dep) ? classToPath[dep] : dep;

            var test = new Uri(Path.Combine(Directory.GetCurrentDirectory(), "tempOut", currentPath)).MakeRelativeUri(new Uri(Path.Combine(Directory.GetCurrentDirectory(), "tempOut", path)));

            writer.WriteLine($"{(export?"export ":"")}import {(localName==null? dep : localName)} = require(\"./{test}\")");
        }

        private static HtmlDocument GetDocument(string url)
        {
            Directory.CreateDirectory(".cache");
            var name = ".cache/" + Path.GetFileName(url);
            HtmlDocument doc = new HtmlDocument();
            if (File.Exists(name))
                doc.Load(name);
            else
            {
                var htmlClient = new HttpClient();


                var content = htmlClient.GetAsync(url).GetAwaiter().GetResult();

                doc.Load(new GZipStream(content.Content.ReadAsStreamAsync().GetAwaiter().GetResult(), CompressionMode.Decompress)
                    , Encoding.UTF8);
                doc.Save(name);
            }
            return doc;
        }
        public class MethodResult
        {
            public string part;
            public List<string> dependencies;
        }
        private static MethodResult ParseAndWriteMembers(HtmlDocument doc, bool isInterface = false)
        {
            var dependencies = new List<string>();
            var writer = new StringWriter();

            var selector = "Members";
            writer.WriteLine($"\t//{selector}");
            var a = doc.DocumentNode.SelectSingleNode($@"//*[@id=""main""]/section/article/h3[text() = '{selector}']/following-sibling::dl");
            if (a == null)
                return new MethodResult { part = writer.ToString(), dependencies = new List<string>() };
            foreach (var member in a.SelectNodes(".//dt/div/h4"))
            {
                var memberName = member.Id.Trim(' ', '.');
                var staticMember = member.SelectSingleNode(".//span[@class='type-signature attribute-static']");

                var types = TypeReader(member.SelectSingleNode(".//span[@class='type-signature']"));
                types = extractDependencies(dependencies, types);

                writer.WriteLine($"\t{(staticMember != null && !isInterface ? "static " : "")}{memberName}: {types}");

            }

            return new MethodResult { part = writer.ToString(), dependencies = dependencies.Distinct().ToList() };
        }

        public static string extractDependencies(List<string> dependencies, string typeList)
        {

            var type= Regex.Replace(typeList, @"Cesium\.([a-zA-Z]+[a-zA-Z0-9\\_]*)", (m) =>
            {
                if (m.Success)
                {
                    dependencies.Add(m.Groups[1].Value);
                    return m.Groups[1].Value;
                }
                return m.Value;
            });

            if(type.Contains("Promise"))
                dependencies.Add("Promise");


            return type;
         
        }

        private static MethodResult ParseAndWriteMethods(HtmlDocument doc,string source)
        {
            var dependencies = new List<string>();
            var writer = new StringWriter();
            var selector = "Methods";
            writer.WriteLine($"\t//{selector}");
            var a = doc.DocumentNode.SelectSingleNode($@"//*[@id=""main""]/section/article/h3[text() = '{selector}']/following-sibling::dl");
            if (a == null)
                return new MethodResult { part = writer.ToString(), dependencies=new List<string>() };
            foreach (var dt in a.SelectNodes(".//dt"))
            {
                var method = dt.SelectSingleNode(".//div/h4");
                var memberName = method.Id.Trim(' ', '.');

                var staticMember = method.SelectSingleNode(".//span[@class='type-signature attribute-static']");
                var signature = method.SelectSingleNode(".//span[@class='signature']").InnerText;
                var type = method.SelectSingleNode(".//span[@class='type-signature returnType']");
                var typeList =TypeReader(type);
                typeList = extractDependencies(dependencies, typeList);

                var optionsParser = new OptionsWriter(memberName, source);
                var signatureParams = optionsParser.GetSignatureTypes(dt.SelectSingleNode(".//following-sibling::dd"));

                var optionalFound = false;
                signature = $@"({string.Join(", ", signature.Split(',')
                    .Select(s => s.Trim(')', '(', ' '))
                    .Select(s =>
                    {


                        if (signatureParams.ContainsKey(s))
                        {

                            return $"{s + (optionalFound ? "?" : "")} : { extractDependencies(dependencies,signatureParams[s].Replace("Object", "any"))}";
                        }
                        if (signatureParams.ContainsKey(s + "?"))
                        {
                            optionalFound = true;
                            return $"{s}? : {extractDependencies(dependencies, signatureParams[s + "?"].Replace("Object", "any"))}";
                        }
                        return s;

                    }))})";


                writer.WriteLine($"\t{(staticMember == null ? "" : "static ")}{memberName}{signature.Replace("arguments", "args")} : {typeList}");

            }

            return new MethodResult { part = writer.ToString(), dependencies = dependencies.Distinct().ToList() };
        }

       
        public static string CalculateMD5Hash(string input)
        {
            // step 1, calculate MD5 hash from input
            MD5 md5 = MD5.Create();
            byte[] inputBytes = Encoding.ASCII.GetBytes(input);
            byte[] hash = md5.ComputeHash(inputBytes);

            // step 2, convert byte array to hex string
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }
      
        public static string TypeReader(HtmlNode typeNode)
        {
            if (typeNode == null)
                return "void";


            var type = typeNode.InnerText
                  .Replace(System.Environment.NewLine, " ").Trim(' ', ':');

            if (type.Contains("~"))
                return "any"; //Do not go to ~links atm

            var links = typeNode.SelectNodes(@".//a");
            if (links != null)
            {
         
                if(links.Count > 2)
                {

                }
                var idx = -1;
                foreach (var link in links)
                {

                    var url = $"{Options.BaseUrl.TrimEnd('/')}/{link.GetAttributeValue("href", null)}";

                    try
                    {

                        var className = ExtractCLass(url);

                        if (type == className)
                        {
                            return TypeReplacer("Cesium." + className);
                        }
                        var old = idx+1;
                        idx = type.IndexOf(className,idx+1);
                        type = type.Substring(0, idx ) + "Cesium." + className + type.Substring(idx + className.Length);
                        idx += 7;

            //            type = type.Replace(className, "Cesium." + className);

                    }
                    catch (Exception ex)
                    {
                       return "any";
                    }


                }
                //return "any";

            }
            var returnType = string.Join("|", CollapsGeneric(type.Replace(".&lt;", "<").Split('|')).Select(t => ArrayTypeFixer(TypeNormalizer(t.Trim('(', ')')))));
            return TypeReplacer(returnType);


        }
        private static IEnumerable<string> CollapsGeneric(IEnumerable<string> a)
        {
            var value = "";
            var combine = false;
            var c = 0;
            foreach (var b in a)
            {
                c += b.Count(ch => ch == '<') - b.Count(ch => ch == '>');

                combine |= c!=0;
                if (combine)
                {
                    value += (value.Length > 0 ? " | " : "") + b;

                    if (c == 0)//value.IndexOf('>') != -1)
                    {
                        yield return value;
                        value = "";
                        combine = false;
                    }
                }
                else
                    yield return b;

            }

        }
        private static string ArrayTypeFixer(string type)
        {
            if (type.StartsWith("Array<"))
                return $"Array<{string.Join("|", type.Substring(6).TrimEnd('>').Split('|').Select(t => ArrayTypeFixer(TypeNormalizer(t.Trim('(', ')'))))) }>";
            if (type.StartsWith("Promise<"))
                return $"Promise<{string.Join("|", type.Substring(8).TrimEnd('>').Split('|').Select(t => ArrayTypeFixer(TypeNormalizer(t.Trim('(', ')', ' '))))) }>";

            return type;
        }
        private static string TypeReplacer(string type)
        {
            return typeMaps.ContainsKey(type) ? typeMaps[type] : type;
        }
        private static string TypeNormalizer(string type)
        {
            if (type == null)
                return "void";



            switch (type)
            {
                case "Object": return "Object";
                case "Element": return "Element";
                case "Boolean": return "boolean";
                case "String": return "string";
                case "Number": return "number";
                case "function": return "(()=>void)";
                case "Canvas": return "HTMLCanvasElement";
                case "Image": return "HTMLImageElement";
                case "Frustum": return "Cesium." + ExtractCLass($"{Options.BaseUrl.TrimEnd('/')}/PerspectiveFrustum.html");
                case "Proxy": return "Cesium." + ExtractCLass($"{Options.BaseUrl.TrimEnd('/')}/DefaultProxy.html");
                case "*": return "any";
                case "undefined": return "void";
                case "Array": return "Array<any>";
            }

            if (string.IsNullOrWhiteSpace(type))
                return "any";


            return type.Replace(".&lt;", "<");
        }
    }
}
