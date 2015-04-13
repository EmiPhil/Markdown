var codeEditor = document.getElementById('codeEditor');
var codeMirror = CodeMirror(codeEditor, {
    value: '# Hello there. \n How do you do? \n\n ' + 
    'This is a tutorial for the popular ' + 
    '[Markdown](http://chrisalley.github.io/commonmark-website/) library. ' +
    '\n It is a submission by **Phil** of **EmiPhil** for [Jeff Atwood.]' +
    '(http://blog.codinghorror.com/toward-a-better-markdown-tutorial/)' +

    '\n Check it out at [github!](https://github.com/EmiPhil/Markdown)' +

    '\n\n Markdown is a *great* language for quickly creating HTML content.' +

    '\n\n Go ahead and access one of the tutorial\'s from the left, or ' +
    'try typing directly in this _**live editor!!**_',
    theme: 'mdn-like',
    lineNumbers: true
});

var timeoutId;
codeMirror.on('change', function () {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(render, 1000);
});

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
var renderee = document.getElementById('target');

function render (target, source) {
    if (!target) target = renderee;
    if(!source) source = codeMirror.getValue();
    var parsed = reader.parse(source);
    var result = writer.render(parsed);

    while(target.firstChild)
        target.removeChild(target.firstChild);

    target.innerHTML = result;
}

render();