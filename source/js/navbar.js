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