// Show/Hide nav (only really applies to smaller screens)
var nav = document.getElementsByTagName('nav')[0];
function openNav () {
    classie.toggle(nav, 'open');
    TweenLite.to(nav, 0.5, { left : 0 });
}

function closeNav() {
    if (nav.classList.contains('open')) {
        classie.toggle(nav, 'open');
        TweenLite.to(nav, 0.5, { left : '-240px' });        
    }
}

var navHeaders = document.querySelectorAll('.navHeader');
function accordion (target, self) {
    for (var i = 0; i < navHeaders.length; i += 1) {
        classie.remove(navHeaders[i], 'current');
    }
    classie.add(self, 'current');
    target = document.getElementById(target);
    if (target.classList.contains('open')) {
        classie.toggle(target, 'open');
        TweenLite.to(target, 0.5, { 'max-height' : 0 });
    } else {
        classie.toggle(target, 'open');
        TweenLite.to(target, 0.5, { 'max-height' : '250px' });
    }
}

var navLinks = document.querySelectorAll('.navLinks');
function currentNav (self, serial) {
    for (var i = 0; i < navLinks.length; i += 1) {
        classie.remove(navLinks[i], 'active');
    }
    classie.add(self, 'active');

    closeNav();
}

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

    codeMirror.setValue(homeText);
    render();
}

function sandbox () {
    clear();
    codeMirror.setValue('');
    render();
}

function cheatSheet () {
    clear();
    var md =
    '# Header1' +
    '\n## Header 2' +
    '\n### Header 3' +
    '\n#### Header 4' +
    '\n##### Header 5' +
    '\n###### Header 6' +
    '\n*Italics*    _Italics_' +
    '\n\n**Bold**    __Bold__' +
    '\n\n__*Boldtalics*__    **_Boltalics_**' +
    '\n\n1. List\n2. Example\n    - Sub' +
    '\n\n1) Another list\n2) Example\n    * Sub\n    + Sub 2' +
    '\n\n[Links](https://www.links.com)' +
    '\n\n```\nCode\n```' +
    '\n\n`Inline-Code`' +
    '\n\nDividers:' +
    '\n***\n\n---\n\n___' +
    '\n\n> # Blockquotes:\n> Cupcake ipsum dolor sit amet carrot cake I love. Pudding jelly chocolate ice cream. Jelly beans lemon drops I love chocolate cake jujubes dessert. Soufflé I love jelly halvah powder. Gingerbread candy I love topping jujubes dragée chocolate. Halvah fruitcake carrot cake tiramisu.';
    codeMirror.setValue(md);
    render();
}

function renderTopBar (content) {
    /**
    * Add some content to the second bar
    * @param {content} String
    */
}