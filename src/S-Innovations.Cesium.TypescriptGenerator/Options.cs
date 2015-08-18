using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommandLine;
using CommandLine.Text;

namespace SInnovations.Cesium.TypescriptGenerator
{
    public class Options
    {
        public Options()
        {
            Class = new List<string>();
        }
        [Option('o', "my-option", DefaultValue = 10, HelpText = "This is an option!")]
        public int MyOption { get; set; }

        [ParserState]
        public IParserState LastParserState { get; set; }
        public string BaseUrl { get; internal set; }
        public IList<string> Class { get; internal set; }
        public string OutputPath { get; internal set; }

        [HelpOption]
        public string GetUsage()
        {
            return HelpText.AutoBuild(this,
              (HelpText current) => HelpText.DefaultParsingErrorsHandler(this, current));
        }
    }
}
