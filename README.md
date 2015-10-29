# S-Innovations.Cesium

## Cesium Typescript Documentation Generation
in src/S-Innovations.Cesium.TypescriptGenerator you will find a command line tool, or atleast the very first version of it, that will generate valid typescript definitions for all of Cesium Classes that are exported on their Documentation site:

https://cesiumjs.org/Cesium/Build/Documentation/index.html

The result can be found in the dist/typings folder.

## Bower 
I am using this repository for my cesium development using typescript. Meaning I can bring in latest cesium release + the generated d.ts file using bower install s-innovations/s-innovations.cesium and then doing tsd link will bring in the definition file to the tsd.json and tsd.d.ts files automaticly.

I have not added this to any bower registry - and do not intent to. One can install directly from a github repository easy and therefore I find it to be the cesium development team to decide if they want to have an official bower registration. This is only for my self and anyone that find it usefull.



