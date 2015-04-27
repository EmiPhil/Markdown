function credits() {
    clear();
    var md =
        '# Credits' +
        '\nThis is a project created by [Phil](https://github.com/EmiPhil/Markdown)' +
        '\nof EmiPhil for [Jeff Atwood\'s]' +
        '(http://blog.codinghorror.com/toward-a-better-markdown-tutorial/) competition.' +
        '\n\n[Official Markdown Spec](http://chrisalley.github.io/commonmark-website/)' +
        '\n## Application Dependencies:' +
        '\n[classie](https://github.com/yawetse/classie)  ' +
        '\n[codemirror](http://codemirror.net/)  ' +
        '\n[underscore](https://github.com/jashkenas/underscore)  ' +
        '\n[commonmark](https://github.com/jgm/commonmark.js)  ' +
        '\n[tween](http://greensock.com/gsap)  ' +
        '\n[normalize.css](https://github.com/necolas/normalize.css)' +
        '\n## Development Dependencies:' +
        '\n[sass/scss](http://sass-lang.com/)  ' +
        '\n[gulp](https://github.com/gulpjs/gulp)  ' +
        '\n[gulp-sass](https://github.com/dlmanning/gulp-sass)  ' +
        '\n[gulp-concat](https://github.com/wearefractal/gulp-concat)  ' +
        '\n[gulp-uglify](https://github.com/terinjokes/gulp-uglify)  ' +
        '\n[gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css)  ' +
        '\n[gulp-jshint](https://github.com/spalger/gulp-jshint)  ' +
        '\n[gulp-run](https://github.com/cbarrick/gulp-run)  ' +
        '\n[browser-sync](https://github.com/BrowserSync/browser-sync)  ' +
        '\n[del](https://github.com/sindresorhus/del)  ' +
        '\n[jshint-stylish](https://github.com/sindresorhus/jshint-stylish)  ' +
        '\n[bower](https://github.com/bower/bower)' +
        '\n# License:' +
        '\nThe MIT License (MIT)' +

        '\n\nCopyright (c) 2015 EmiPhil' +

        '\n\nPermission is hereby granted, free of charge, to any person obtaining a copy' +
        '\nof this software and associated documentation files (the "Software"), to deal' +
        '\nin the Software without restriction, including without limitation the rights' +
        '\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell' +
        '\ncopies of the Software, and to permit persons to whom the Software is' +
        '\nfurnished to do so, subject to the following conditions:' +

        '\n\nThe above copyright notice and this permission notice shall be included in all' +
        '\ncopies or substantial portions of the Software.' +

        '\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR' +
        '\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,' +
        '\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE' +
        '\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER' +
        '\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,' +
        '\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE' +
        '\nSOFTWARE.';

    renderTopBar('Credits');
    codeMirror.setValue(md);
    render();
}