/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks('dts-generator');
    grunt.initConfig({
        dtsGenerator: {
            options: {
                name: 'cesium',
                baseDir: '../../artifacts/src',
                out: '../../dist/typings/cesium.d.ts',
              //  externs: ["./koExtensions/knockoutExtensions.d.ts", "./utils/utils.d.ts"]

            },
            default: {
                src: ['../../artifacts/src/**/*.d.ts']
            }
        }
    });
};