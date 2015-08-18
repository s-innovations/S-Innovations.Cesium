using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using HtmlAgilityPack;

namespace SInnovations.Cesium.TypescriptGenerator
{
    class Program
    {
        static Options Options = new Options();

        static Dictionary<string, StreamWriter> files = new Dictionary<string, StreamWriter>();
        static StreamWriter GetWriter(string className)
        {
            if (File.Exists($"{className}.d.ts"))
                return null;
            if(!files.ContainsKey(className))
            {
              
                files[className] = new StreamWriter(new FileStream($"{className}.d.ts",FileMode.Create));
            }

            return files[className];
        }
        static void Main(string[] args)
        {
            foreach (var file in Directory.GetFiles(".","*.d.ts"))
                File.Delete(file);

            Options.BaseUrl = "https://cesiumjs.org/Cesium/Build/Documentation/";
            Options.Class.Add("Viewer");
            Options.Class.Add("DefaultProxy");
            Options.Class.Add("CesiumTerrainProvider");
            Options.Class.Add("CzmlDataSource");
            Options.Class.Add("EntityView");

            // Options.Class.Add("PositionProperty");
            Options.OutputPath = @"C:\dev\AscendXYZ Portal\typings\Cesium.d.ts";

            if (CommandLine.Parser.Default.ParseArguments(args, Options))
            {

                foreach (var name in Options.Class)
                {
                    var url = $"{Options.BaseUrl.TrimEnd('/')}/{name}.html";
                    ExtractCLass(url);
                }

                var promish = GetWriter("Promise");
                promish.WriteLine("export class Promise<T>");
                promish.WriteLine("{");
                promish.WriteLine("constructor(doneHandler?:(obj:T)=>void,errorHandler?:(obj:any)=>void)");
                promish.WriteLine("then(result:T);");
                promish.WriteLine("}");

                var bingMapApi = GetWriter("BingMapApi");
                bingMapApi.WriteLine("  export module BingMapsApi {");
                bingMapApi.WriteLine("  var defaultKey;");
                bingMapApi.WriteLine("}");
            }
            foreach (var writer in files.Values)
            {
                writer.Dispose();
            }
            var local = "Cesium.d.ts";
            File.AppendAllLines(local, new string[] { @"declare module ""Cesium"" {", "module Cesium {" });
            foreach (var file in Directory.GetFiles(".","*.d.ts"))
            {
                if (Path.GetFileName(file) == local)
                    continue;
                File.AppendAllLines(local, File.ReadAllLines(file));
            }
            File.AppendAllLines(local, new string[] { "}", " export = Cesium;"," }"});
            File.Copy(local, Options.OutputPath,true); 
        }
        static Dictionary<string, string> urlsToClass = new Dictionary<string, string>();
        static Dictionary<string, string> classExtents = new Dictionary<string, string>
        {
            { "CzmlDataSource", "extends Cesium.DataSource" }

        };
        static string ExtractCLass(string url)
        {
            if (urlsToClass.ContainsKey(url))
                return urlsToClass[url];

            urlsToClass.Add(url, Path.GetFileNameWithoutExtension(url));

            HtmlDocument doc = GetDocument(url);

            var classdt = doc.DocumentNode.SelectSingleNode(@"//*[@id=""main""]/section/article/div/dt");
            var className = Path.GetFileNameWithoutExtension(url);
            var signature = "()";
            if (classdt != null)
            {
                var ctor = classdt.SelectSingleNode(".//div/h4");
                className = ctor.GetAttributeValue("id", null);
           
                var signatureParams = GetSignatureTypes(classdt.SelectSingleNode(".//following-sibling::dd"));
                var signatureNode = ctor.SelectSingleNode(@".//span[@class=""signature"" ]");
                signature = signatureNode.InnerText;

                

                if (signatureParams.Any())
                {
                    var optionals = (signatureNode.SelectNodes(@".//span[@class=""optional"" ]") ?? new HtmlNodeCollection(signatureNode))
                        .Select(o => o.InnerText).ToArray();

                    foreach (var ctorParam in signatureParams)
                    {
                        var name = ctorParam.Key;
                        var type = ctorParam.Value;

                        signature = signature.Replace(name.TrimEnd('?'), $"{name} : {type}");

                    }
                }
            }
            var writer = GetWriter(className);


            var extends = classExtents.ContainsKey(className) ? classExtents[className] : "";
            writer.WriteLine($"export class {className} {extends}");
            writer.WriteLine("{");
            writer.WriteLine($"\tconstructor{signature};");
            ParseAndWriteMembers(doc, writer);
            writer.WriteLine();
            ParseAndWriteMethods(doc, writer);
            writer.WriteLine("}");


            return className;
        }

        private static HtmlDocument GetDocument(string url)
        {
            var htmlClient = new HttpClient();
            HtmlDocument doc = new HtmlDocument();
            var content = htmlClient.GetAsync(url).GetAwaiter().GetResult();
            doc.Load(new GZipStream(content.Content.ReadAsStreamAsync().GetAwaiter().GetResult(), CompressionMode.Decompress)
                , Encoding.UTF8);
            return doc;
        }

        private static void ParseAndWriteMembers(HtmlDocument doc, StreamWriter writer)
        {
            var selector = "Members";
            writer.WriteLine($"\t//{selector}");
            var a = doc.DocumentNode.SelectSingleNode($@"//*[@id=""main""]/section/article/h3[text() = '{selector}']/following-sibling::dl");
            if (a == null)
                return;
            foreach (var member in a.SelectNodes(".//dt/div/h4"))
            {
                var memberName = member.Id.Trim(' ','.');
                var staticMember = member.SelectSingleNode(".//span[@class='type-signature attribute-static']");
               
                var type = TypeReader(member.SelectSingleNode(".//span[@class='type-signature']"));
                
                writer.WriteLine($"\t{(staticMember == null?"":"static ")}{memberName}: {type}");
               
            }
        }
        private static void ParseAndWriteMethods(HtmlDocument doc, StreamWriter writer)
        {
            var selector = "Methods";
            writer.WriteLine($"\t//{selector}");
            var a = doc.DocumentNode.SelectSingleNode($@"//*[@id=""main""]/section/article/h3[text() = '{selector}']/following-sibling::dl");
            if (a == null)
                return;
            foreach (var dt in a.SelectNodes(".//dt"))
            {
                var method = dt.SelectSingleNode(".//div/h4");
                var memberName = method.Id.Trim(' ', '.');

                var staticMember = method.SelectSingleNode(".//span[@class='type-signature attribute-static']");
                var signature = method.SelectSingleNode(".//span[@class='signature']").InnerText;
                var type = method.SelectSingleNode(".//span[@class='type-signature returnType']");
                var returnType = TypeReader(type);

                var signatureParams = GetSignatureTypes(dt.SelectSingleNode(".//following-sibling::dd"));

                var optionalFound = false;
                signature = $@"({string.Join(", ", signature.Split(',')
                    .Select(s => s.Trim(')', '(', ' '))
                    .Select(s => {

                        
                        if (signatureParams.ContainsKey(s)) {
                            
                            return $"{s+(optionalFound?"?":"")} : {signatureParams[s].Replace("Object", "any")}";
                        }
                        if(signatureParams.ContainsKey(s + "?"))
                        {
                            optionalFound = true;
                            return $"{s}? : {signatureParams[s + "?"].Replace("Object", "any")}";
                        }
                        return s;

                       }))})";

             
                writer.WriteLine($"\t{(staticMember == null ? "" : "static ")}{memberName}{signature.Replace("arguments", "args")} : {returnType}");
              
            }
        }
        
        static Dictionary<string,string> GetSignatureTypes(HtmlNode node)
        {
            var signatureParams = node.SelectSingleNode(@".//table[@class='params']/tbody");
            if (signatureParams == null)
                return new Dictionary<string, string>();

            var rows = signatureParams.Elements("tr");
            return rows.ToDictionary(
                VariableNameResolver,
                VariableTypeResolver);
           
        }
        static string VariableNameResolver(HtmlNode row)
        {
            var isOptional = row.SelectSingleNode(@".//td[contains(@class,'description')]/span[@class='optional']");

            var variable= row.SelectSingleNode(@".//td[@class=""name"" ]").InnerText + (isOptional!=null ? "?" : "");
            return variable;
        }
        static string VariableTypeResolver(HtmlNode row)
        {
            var tdType = row.SelectSingleNode(@".//td[@class=""type"" ]");
            //EntityCollection  contains(entity) as no type information.
            var typeNodes = tdType.SelectNodes(@".//span[@class='param-type']");
            if (typeNodes == null)
                return "any";

            var types = typeNodes.Select(TypeReader).ToArray().Distinct();

            if(!types.Skip(1).Any() && types.First() == "Object")
            {

                
                var props = GetSignatureTypes(row.SelectSingleNode(@".//td[contains(@class,'description')]"));
                if (props.Keys.Any())
                {
                    var type = "opt_" + CalculateMD5Hash(string.Join("", props.Keys.OrderBy(k => k)));


                    var writer = GetWriter(type);
                    if (writer != null)
                    {
                        writer.WriteLine($"export interface {type}");
                        writer.WriteLine("{");
                        foreach (var prop in props)
                            writer.WriteLine($"\t{prop.Key}: {prop.Value};");
                        writer.WriteLine("}");
                    }

                    return "Cesium."+ type;
                }
                
            }

            return string.Join("|", types);

        }
        static string CalculateMD5Hash(string input)
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
        static int i = 0;
        private static string TypeReader(HtmlNode typeNode)
        {
            if (typeNode == null)
                return "void";

            
            var type = typeNode.InnerText
                  .Replace(System.Environment.NewLine, " ").Trim(' ', ':');

            if (type.Contains("~"))
                return "any"; //Do not go to ~links atm

            var link = typeNode.SelectSingleNode(@".//a");
            if (link != null)
            {
               

                var url = $"{Options.BaseUrl.TrimEnd('/')}/{link.GetAttributeValue("href", null)}";
                Console.WriteLine(string.Join("", Enumerable.Range(0, ++i).Select(i=>"\t"))+ link.GetAttributeValue("href", null));

                try {
                   
                    var className =  ExtractCLass(url);
                    
                    Console.WriteLine(string.Join("", Enumerable.Range(0, --i).Select(i => "\t")) + $"{link.GetAttributeValue("href", null)} OK");
                    return "Cesium."+className;
                }catch(Exception ex) {
                    Console.WriteLine(string.Join("", Enumerable.Range(0, --i).Select(i => "\t")) + $"{link.GetAttributeValue("href", null)} Failed");
                    return "any";
                }
               

                //return "any";
                
            }
          
            return string.Join("|", CollapsGeneric(type.Replace(".&lt;", "<").Split('|')).Select(t => ArrayTypeFixer(TypeNormalizer(t.Trim('(',')')))));
          

        }
        private static IEnumerable<string> CollapsGeneric(IEnumerable<string> a)
        {
            var value = "";
            var combine = false;
            foreach(var b in a)
            {
               
                combine |= b.IndexOf('<') != -1;
                if (combine)
                {
                    value +=  (value.Length > 0 ? " | ":"") + b;

                    if (value.IndexOf('>') != -1)
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
            if(type.StartsWith("Promise<"))
                return $"Promise<{string.Join("|", type.Substring(8).TrimEnd('>').Split('|').Select(t => ArrayTypeFixer(TypeNormalizer(t.Trim('(', ')',' '))))) }>";
           
            return type;
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
                case "Frustum" : return "Cesium."+ ExtractCLass($"{Options.BaseUrl.TrimEnd('/')}/PerspectiveFrustum.html");
                case "Proxy": return "Cesium."+ExtractCLass($"{Options.BaseUrl.TrimEnd('/')}/DefaultProxy.html");
                case "*": return "any";
                case "undefined": return "void";
                case "Array":return "Array<any>";
            }

            if (string.IsNullOrWhiteSpace(type))
                return "any";
           

            return type.Replace(".&lt;","<");
        }
    }
}
