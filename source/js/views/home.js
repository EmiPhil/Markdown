// Bring the user home. Ignores DRY principles in favor of delicious spaghetti.
function home () {
    clear();
    for (var i = 0; i < navLinks.length; i += 1) {
        classie.remove(navLinks[i], 'active');
    }
    var homeText = '# Hello there. \n How do you do? \n\n ' + 
    'This is a tutorial for the popular ' + 
    '[Markdown](http://chrisalley.github.io/commonmark-website/) library. ' +
    '\n It is a submission by **Phil** of **EmiPhil** for [Jeff Atwood.]' +
    '(http://blog.codinghorror.com/toward-a-better-markdown-tutorial/)' +

    '\n Check it out at [github!](https://github.com/EmiPhil/Markdown)' +

    '\n\n Markdown is a *great* language for quickly creating HTML content.' +

    '\n\n Go ahead and access one of the tutorial\'s from the left, or ' +
    'try typing directly in this _**live editor!!**_';

    renderTopBar('Home Page');

    codeMirror.setValue(homeText);
    render();
}