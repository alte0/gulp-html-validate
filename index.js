import through from 'through2';
import { HtmlValidate } from 'html-validate';
import { text as textFormat } from 'html-validate/build/formatters/text';
import c from "ansi-colors";
import log from "fancy-log";
import PluginError from "plugin-error";

const PLUGIN_NAME = 'gulp-html-validate';

function validate(file, encoding, callback) {
  try {
    const htmlvalidate = new HtmlValidate();
    const report = htmlvalidate.validateFile(file.path);

    if (!report.valid) {
      log(c.red(`File is not valid => ${report.results[0].filePath}`));
      log(c.green(`File - ${textFormat(report.results)}`));
    }
    callback(null, file);
  } catch (error) {
    const err = new PluginError({
      plugin: PLUGIN_NAME,
      message: error
    });

    log.error(err);
  }
}

module.exports = () => through.obj(validate);
