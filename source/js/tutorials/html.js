var htmlStepOneLesson = 
    '# Welcome to the HTML tutorial!' +
    '\n In this section, we will cover inline html in markdown.' +
    '\n\n This top section will be the *lesson.*';

var htmlStepOneMD = 
    '## Interactive result area.' +
    '\n In this area, you will be able to edit markdown in the left to try ' +
    'and complete the lessons.' +
    '\n\n Are you ready? Let\'s get started!' +
    '\n\n Try typing your name in on line **10.**' +
    '\n\n When you are ready to submit, press the Check Answer button below!';

var htmlStepOne = new Step('Intro', 
    htmlStepOneLesson, htmlStepOneMD, function (doc) {
        var input = doc.getLine(9);
        if (input) return true;
        return false;
    }, function (doc) {
        var name = doc.getLine(9);
        var namePlace = document.getElementById('namePlace');
        namePlace.textContent = 'Welcome, ' + name;
        standardNotice('success');
    }, failNotice
    );

var htmlTutorial = new Tutorial(htmlStepOne, 'HTML');

// ============================================================================
// ============================================================================
var htmlHeaderLesson =
    '# Headers' +
    '\nCreating inline html in markdown is easy!' +
    '\n\nTo create a header, use the following syntax:' +
    '\n# \\<h1>A level 1 header!\\</h1>' +
    '\n## \\<h2>A level 2 header!\\</h2>' +
    '\n### \\<h3>A level 3 header!\\</h3>' +
    '\n#### \\<h4>A level 4 header!\\</h4>' +
    '\n##### \\<h5>A level 5 header!\\</h5>' +
    '\n###### \\<h6>A level 6 header!\\</h6>' +
    '\n### Objective:' +
    '\nOn line 1, make a level 2 header using the html tags!';

var htmlHeaderMD = '';

var htmlHeader = new Step('Headers',
    htmlHeaderLesson, htmlHeaderMD, function (doc) {
        var check = /<h2>.*<\/h2>/;
        if (!check.test(doc.getLine(0))) return false;
        return true;
    },
        successNotice, failNotice
    );

htmlTutorial.step(htmlHeader, 'Headers');

// ============================================================================
// ============================================================================
var htmlEmphasisLesson =
    '# Emphasis' +
    '\nIn html, italics are created with' +
    '\n\n\\<em>*Content*\\</em>' +
    '\n\nand you can bold elements with' +
    '\n\n\\<strong>**Content**\\</strong>' +
    '\n\nLike with markdown, these are combinable:' +
    '\n\n\\<strong>\\<em> __*Content*__ \\</em>\\</strong>' +
    '\nor \\<em>\\<strong> _**Content**_ \\</strong>\\</em>' +
    '\n### Objective:' +
    '\nBoldtalicize line 1 with the html method!';

var htmlEmphasisMD =
    'Cupcake ipsum dolor sit amet gummi bears. Sweet cupcake topping.';

var htmlEmphasis = new Step('Emphasis',
    htmlEmphasisLesson, htmlEmphasisMD, function (doc) {
        var check = /(<em><strong>.*<\/strong><\/em>|<strong><em>.*<\/em><\/strong>)/;
        if (!check.test(doc.getLine(0))) return false;
        return true;
    },
        successNotice, failNotice
    );

htmlTutorial.step(htmlEmphasis);

// ============================================================================
// ============================================================================
var htmlSpanLesson =
    '# Span' +
    '\nThe previous two lessons are useful for understanding inline html tags,' +
    '\nbut it is much easier to use the native markdown bindings to generate' +
    '\ncontent, which begs the question *why use html tags?*' +
    '\n\nHaving custom html tags on your content means that you can create specialized' +
    '\nuse cases. For example, let\'s say we have css for making text red:' +
    '\n````\n.red {\n    color: #F44336;\n}\n````' +
    '\nThen we could \\<span class="red"> <span class="red">make red text!</span> \\</span>' +
    '\n### Objective:' +
    '\nMake the words "red cheesecake" red!';

var htmlSpanMD =
    'Cupcake ipsum dolor sit. Amet sweet pastry marzipan halvah I love. Soufflé I love bear claw.  ' +
    '\nCroissant marzipan tart icing lemon drops red cheesecake soufflé sweet muffin.';

var htmlSpan = new Step('Span',
    htmlSpanLesson, htmlSpanMD, function (doc) {
        var check = /.*<span class\=("|')red("|')>red cheesecake<\/span>.*/;
        if (!check.test(doc.getLine(1))) return false;
        return true;
    },
        successNotice, failNotice
    );

htmlTutorial.step(htmlSpan);

// ============================================================================
// ============================================================================
var htmlInfiniteLesson =
    '# Endless possibilities' +
    '\nYou can use HTML tags however you wish. A full overview of html tags' +
    '\nand classes is beyond the scope of these tutorials. I encourage you' +
    '\nto spend some time with markdown to learn its potential!';

var htmlInfiniteMD =
    '# Thank you...' +
    '\n...for doing this tutorial. I hope it has helped you get used to' +
    '\nthe wonderful language of Markdown!' +
    '\n\nCheck out the playground for an interctive cheatsheet and the' +
    '\nreferences section for more information about Markdown.';

var htmlInfinite = new Step('Infinite',
    htmlInfiniteLesson, htmlInfiniteMD, function () { return true; },
    successNotice, failNotice
    );

htmlTutorial.step(htmlInfinite);