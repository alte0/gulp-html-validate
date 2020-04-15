"use strict";

var through = require('through2');
var HtmlValidate = require('html-validate').HtmlValidate;
var textFormat = require('../html-validate/build/formatters/text').default;
var c = require("ansi-colors");
var log = require("fancy-log");
var PluginError = require("plugin-error");

var PLUGIN_NAME = 'gulp-html-validate';

function validate(file, encoding, callback) {
  try {
    var htmlvalidate = new HtmlValidate();
    var report = htmlvalidate.validateFile(file.path);

    if (!report.valid) {
      log(c.red(`File is not valid => ${report.results[0].filePath}`));
      log(c.green(`File - ${textFormat(report.results)}`));
    }
    callback(null, file);
  } catch (error) {
    var err = new PluginError({
      plugin: PLUGIN_NAME,
      message: error
    });

    log.error(err);
  }
}

module.exports = function () { return through.obj(validate) };
