# Warning. This is my first plugin for Gulp. May be bugs 🐜.
Validate html files with [html-validate](https://html-validate.org/)

`
npm i https://github.com/alte0/gulp-html-validate
`
Use
```sh
import valid from 'gulp-html-validate';

gulp.src(path)
.pipe(valid())
.pipe(gulp.dest(path))
```
