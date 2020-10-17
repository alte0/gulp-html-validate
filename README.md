# Warning. This is my first plugin for Gulp. May be bugs 🐜.
Validate html files with [html-validate](https://html-validate.org/)

`
npm i -D https://github.com/alte0/gulp-html-validate
`

Use plugin:

```sh
var validate = require('gulp-html-validate');

gulp.src(path)
.pipe(validate())
.pipe(gulp.dest(path))
```
## Configuration

Create `.htmlvalidate.json`:

```js
{
  "extends": [
    "html-validate:recommended"
  ]
}
```
####Look more - [gitlab html-validate](https://gitlab.com/html-validate/html-validate/)