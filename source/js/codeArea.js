/**
* The important part of this file is making the renderer.
*/

var codeEditor = document.getElementById('codeEditor');
var codeMirror = CodeMirror(codeEditor, {
    /**
    * You can change the value as desired. The string should be md. Don't
    * change the theme unless you have reason to, and never change the
    * lineNumbers bool.
    */
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
    var millisecondsToWait = 1000;
    /**
    * This function auto renders the content x seconds after the user's last
    * keypress and resets if they press another. Like the google search bar:
    * if you type fast enough you can make a lot of content before it renders.
    *
    * You can change the above var but I wouldn't change the code below.
    */
    window.clearTimeout(timeoutId);
    if (currentTutorial) currentTutorial.current.content = codeMirror.getValue();
    timeoutId = window.setTimeout(render, millisecondsToWait);
});


/**
* Below is the render method for generating html from markdown. Don't edit.
*/
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
var renderee = document.getElementById('target');

function render (target, source) {
    if (!target) target = renderee;
    if(!source) source = codeMirror.getValue();
    var parsed = reader.parse(source);
    var result = writer.render(parsed);

    removal(target);

    target.innerHTML = result;
}

renderTopBar('Home Page');
render();