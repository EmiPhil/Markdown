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

// Handle the navbar accordion
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

// When you click on a link, highlight that link and dehighlight the others
var navLinks = document.querySelectorAll('.navLinks');
function currentNav (self, serial) {
    for (var i = 0; i < navLinks.length; i += 1) {
        classie.remove(navLinks[i], 'active');
    }
    classie.add(self, 'active');

    closeNav();
}

function renderTopBar (content) {
    /**
    * Add some content to the second bar
    * @param {content} String
    */
    var bar = document.getElementById('progBar');

    var li = document.createElement('li'),
        span = document.createElement('span'),
        bolded = document.createElement('b'),
        text = document.createTextNode(content);
    li.className = 'lessonProgress';

    bolded.appendChild(text);
    span.appendChild(bolded);
    li.appendChild(span);
    bar.appendChild(li);
}