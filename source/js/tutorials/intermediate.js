var intStepOneLesson = 
    '# Welcome to the intermediate user\'s tutorial!' +
    '\n In this section, we will cover some more complex markdown concepts.' +
    '\n\n This top section will be the *lesson.*';

var intStepOneMD = 
    '## Interactive result area.' +
    '\n In this area, you will be able to edit markdown in the left to try ' +
    'and complete the lessons.' +
    '\n\n Are you ready? Let\'s get started!' +
    '\n\n Try typing your name in on line **10.**' +
    '\n\n When you are ready to submit, press the Check Answer button below!';

var intStepOne = new Step('Intro', 
    intStepOneLesson, intStepOneMD, function (doc) {
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

var intermediateTutorial = new Tutorial(intStepOne, 'Intermediate');

// ============================================================================
// ============================================================================
var intBoldtalicsLesson = 
    '# __*Boldtalics*__' +
    '\nWhat if you wanted to have be **yelling** your *attitude*?' +
    '\n\n__*No problem!*__ ' +
    '\n\nIn markdown, you can combine **bold** and *italics* into one:' +
    '\n\n\\_\\*\\*This Works**_ , and \\_\\_\\*This Works*__' +
    '\n\nIn fact, you can create bold elements with \\_\\_Bold__ and italics with \\_italics_.' +
    '\n### Objective:' +
    '\nTry to boldtalicize each line using any of the expected methods!';

var intBoldtalicsMD = 
    'Boldtalicize me!' +
    '\n\nAnd me!' +
    '\n\nAnd me!' +
    '\n\nMe too!';

var intBoldtalics = new Step('Boldtalics',
    intBoldtalicsLesson, intBoldtalicsMD, function (doc) {
        var good = true;
        var lines = [];
        lines.push(doc.getLine(0), doc.getLine(2), doc.getLine(4),
            doc.getLine(6));

        var check = /(_\*\*.+\*\*_)|(__\*.+\*__)/;
        lines.forEach(function (e) {
            e = e.replace(/\n/g, '');
            if(!check.test(e)) good = false; 
        });
        return good;
    },
        successNotice, failNotice
    );

intermediateTutorial.step(intBoldtalics);

// ============================================================================
// ============================================================================
var intHeadersLesson =
    '# More Headers' +
    '\nWhat if you wanted to add a bit of style to your header?' +
    '\n\nYou can easily italicize, bold, or boldtalicize any of your headers.' +
    '\n\nIt works *exactly* how you would expect it to!' +
    '\n\n\\### \\*Header*\n\\### \\_Header__' +
    '\n\n\\### \\*\\*Header**\n\\### \\_\\_Header__' +
    '\n\n\\### \\_\\*\\*Header**_\n\\### \\_\\_\\*Header*__' +
    '\n### Objective:' +
    '\nTry giving the headers their respective style!';

var intHeaderMD =
    '# Bold Header' +
    '\n#### Italicized Header' +
    '\n> Cupcake ipsum dolor sit amet candy canes. Marshmallow carrot cake macaroon bear claw.' +
    '\n>\n> Macaroon oat cake sweet roll fruitcake oat cake cotton candy danish jelly beans.' +
    '\n>\n> Icing biscuit sesame snaps donut candy canes pastry.' +
    '\n## Boldtalicized Header' +
    '\nCupcake ipsum dolor sit amet sweet roll I love. Chocolate bar halvah jelly-o cake.' +
    '\n\nCaramels I love liquorice jelly chocolate bar dragée.' +
    '\n\nCandy halvah muffin jelly-o candy canes carrot cake I love sesame snaps jelly.';

var intHeaders = new Step('Headers',
    intHeadersLesson, intHeaderMD, function (doc) {
        var boldHead = /(# \*\*.+\*\*)|(# __.+__)/;
        if (!boldHead.test(doc.getLine(0).replace(/\n/,''))) return false;

        var italicHead = /(#### \*.+\*)|(#### _.+_)/;
        if (!italicHead.test(doc.getLine(1).replace(/\n/,''))) return false;

        var boldtalicHead = /(## _\*\*.+\*\*_)|(## __\*.+\*__)/;
        if (!boldtalicHead.test(doc.getLine(7).replace(/\n/,''))) return false;

        return true;
    },
        successNotice, failNotice
    );

intermediateTutorial.step(intHeaders);

// ============================================================================
// ============================================================================
var intBlockquotesLesson = 
    '# More Blockquotes' +
    '\nYou can add everything we\'ve learned so far to blockquotes.' +
    '\n\nNotice how lines in the same paragraph don\'t need to have a > symbol!' +
    '\n\nIf you want to add a new paragraph, however, you must place a > on the blank line.' +
    '\n### Objective:' +
    '\n\nTry to boldtalicize the header of the blockquote!';

var intBlockquotesMD = 
    '> # Cupcake Cheesecake' +
    '\n>Cupcake ipsum dolor sit amet cheesecake. Chupa chups I love powder chocolate cake danish sesame snaps.  ' +
    '\nDragée I love carrot cake. Gingerbread chocolate bar chupa chups icing sugar plum.' +
    '\n>\n>Chocolate bar dessert sweet roll icing. Dragée chocolate bar sweet lollipop cotton candy cake.  ' +
    '\nCroissant jelly beans muffin gummi bears muffin sesame snaps I love gummi bears. I love pudding tootsie roll jelly beans cake.';

var intBlockquotes = new Step('Blockquotes',
    intBlockquotesLesson, intBlockquotesMD, function (doc) {
        var check = /> # (__\*.+\*__)|(_\*\*.+\*\*_)/;
        if (!check.test(doc.getLine(0))) return false;
        return true;
    },
        successNotice, failNotice
    );

intermediateTutorial.step(intBlockquotes);

// ============================================================================
// ============================================================================
var intImagesLesson =
    '# Images' +
    '\nAdding images is very similar to adding links to your content!' +
    '\n\nThe format looks like this:' +
    '\n\n\\!\\[optional alt-text]\\(image source \\"Optional Image Title")' +
    '\n\n\n\nThe image source can be relative:' +
    '\n\nassets/images/myimage.jpg' +
    '\n\nor a direct link to a web image:' +
    '\n\nhttp://www.somesite.com/assets/images/anImage.png' +
    '\n### Objective:' +
    '\nOn line 3, add an image of Prince Magnum to the images!' +
    '\n\n**Note:** Image source is assets/images/princeMagnum.jpg';

var intImagesMD = 
    '![mystery-machine](assets/images/mysteryMachine.jpg "Mystery Machine")' +
    '\n![big-bad-wolf](assets/images/wolf.jpg)' +
    '\n';

var intImages = new Step('Images',
    intImagesLesson, intImagesMD, function (doc) {
        var check = /\!\[.*\]\(assets\/images\/princeMagnum\.jpg( ".*")*\)/;
        if (!check.test(doc.getLine(2))) return false;
        return true;
    },
        successNotice , failNotice
    );

intermediateTutorial.step(intImages);

// ============================================================================
// ============================================================================
var intTestLesson = 
    '# _**Objective**_' +
    '\nRemake *everything* you see here (including the above header and this text), as you see it!' +
    '\n> ## Header 2 blockquote' +
    '\n> ---' +
    '\n> Some important text about *life*.' +
    '\n>' +
    '\n> ![](assets/images/princeMagnum.jpg)' +
    '\n> ### **Header 3 bolded**' +
    '\n> 1. An *important* list of items!' +
    '\n> 2. I love markdown!' +
    '\n>     - It is great!' +
    '\n\n**Note:** your answer should be exactly 13 lines long';

var intTestMD = '';

var intTest = new Step('Test',
    intTestLesson, intTestMD, function (doc) {
        var line1 = /# (_\*\*Objective\*\*_|__\*Objective\*__)/;
        if (!line1.test(doc.getLine(0))) return false;

        var line2 = /Remake (\*everything\*|_everything_) you see here \(including the above header and this text\), as you see it!/;
        if (!line2.test(doc.getLine(1))) return false;

        var line3 = /> ## Header 2 blockquote/;
        if (!line3.test(doc.getLine(2))) return false;

        var line4 = /> (-{3,}|_{3,}|\*{3,})/;
        if (!line4.test(doc.getLine(3))) return false;

        var line5 = /> Some important text about (\*life\*\.|_life_\.|\*life\.\*|_life\._)/;
        if (!line5.test(doc.getLine(4))) return false;

        var line6 = />\s*/;
        if (!line6.test(doc.getLine(5))) return false;

        var line7 = /> !\[.*\]\(assets\/images\/princeMagnum\.jpg( ".*")*\)/;
        if (!line7.test(doc.getLine(6))) return false;

        var line8 = / ### \*\*Header 3 bolded\*\*/;
        if (!line8.test(doc.getLine(7))) return false;

        var line9 = /> 1\. An \*important\* list of items!/;
        if (!line9.test(doc.getLine(8))) return false;

        var line10 = /> 2\. I love markdown!/;
        if (!line10.test(doc.getLine(9))) return false;

        var line11 = />( ){4,}- It is great!/;
        if (!line11.test(doc.getLine(10))) return false;

        var line13 = /\*\*Note:\*\* your answer should be exactly 13 lines long/;
        if (!line13.test(doc.getLine(12))) return false;

        return true;
    },
        successNotice, failNotice
    );

intermediateTutorial.step(intTest);