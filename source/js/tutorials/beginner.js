/**
* This is a good place to learn the tutorial making structure, so I'll add docs
* here directly. I won't add redudant comments to the other tutorials.
* =============================================================================
* First, we need to create a step. In general, I like to introduce the
* tutorials with the same type of message. A step has two main text contents:
*
* You need a lesson (itself written in markdown) which will be rendered into
* the topmost box of the right side of the app.
*
* You also need the initial markdown that will be in the editor. As the user
* hits more advanced tutorials, you may wish to omit this section. Do so with
* an empty string ('') instead of null if you don't want to break it.
*
* I like to make both these requirements variables that I will later pass:
*/

var begStepOneLesson = 
    '# Welcome to the beginner\'s tutorial!' +
    '\n In this section, we will cover the basic components that make ' +
    '\n Markdown awesome.' +
    '\n\n This top section will be the *lesson.*';

var begStepOneMD = 
    '## Interactive result area.' +
    '\n In this area, you will be able to edit markdown in the left to try ' +
    'and complete the lessons.' +
    '\n\n Are you ready? Let\'s get started!' +
    '\n\n Try typing your name in on line **10.**' +
    '\n\n When you are ready to submit, press the Check Answer button below!';

/**
* Now that we have the big sections done, lets create the Step. The first arg
* is the name of the step. This will appear in the progress bar, so try to give
* it a descriptive name. Then pass in the lesson, then the initial markdown.
*
* The next function is a required middleware. Basically you write some kind of
* method to check the input. When the user hits the check button, it will test
* the code however you say to here. It needs to return true if the user got it
* right and false otherwise. There are two params here, doc and self. Doc is
* the text editor and is pretty much required to check input. Self is the step,
* and I've never used it but maybe you will have a need for it.
*
* Next are two middleware functions. The first is what you want to do in case
* of success, and the second on failure. For the most part, you will want to
* pass successNotice and failNotice to make it consistent. In certain cases
* you might want to do a little more. For example, in the into steps I like to
* ask the user for their name. If they put something in line 10 then I update
* the welcome message to have their name. Little details are important.
*
* Check out the CodeMirror documentation for what you can do with doc.
* http://codemirror.net/doc/manual.html#api
* One specific note is that the .getLine method is 0 indexed. So to get line 10
* you would call doc.getLine(9)
*/

var begStepOne = new Step('Intro', 
    begStepOneLesson, begStepOneMD, function (doc) {
        /**
        * Check input
        * @param {doc} The context of the code editor
        * @param {self} The step
        */
        var input = doc.getLine(9);
        if (input) return true;
        return false;
    }, function (doc) {
        /**
        * On success...
        */
        var name = doc.getLine(9);
        var namePlace = document.getElementById('namePlace');
        namePlace.textContent = 'Welcome, ' + name;
        standardNotice('success');
    }, function () {
        /**
        * On failure...
        */
        standardNotice('failure');
    });

/**
* Now that we have created our first step, lets make the tutorial. Only the
* first step is passed when you create the tutorial. The other steps will be
* registered via the Tutorial.step helper method. The second param here is the
* tutorial name. Give it the same name as what you called the li element in
* index.html. You have made a link to get to the tutorial, right?
*
* IMPORTANT *
* When you have to add mindless text, make it from http://www.cupcakeipsum.com/
*/

var beginnersTutorial = new Tutorial(begStepOne, 'Beginner');

// ============================================================================
// ============================================================================
var begHeadersLesson = 
    '# This is a header.' +
    '\n In markdown, headers are represented with the *#* symbol.' +
    ' There are six levels of headers:' +
    '\n # \\# Header 1 \n ## \\## Header 2 \n ### \\### Header 3' +
    '\n #### \\#### Header 4 \n ##### \\##### Header 5' + 
    '\n ###### \\###### Header 6' +
    '\n### Objective:' +
    '\n Try converting line 1 to a **level 3** ' +
    'header using the hashbang (#) method! **Hint:**' +
    ' notice the space between the hashbangs and the header text.';

var begHeadersMD = 'Content Heading\n\n' +
    'Bonbon halvah gingerbread tiramisu soufflé halvah candy canes. Brownie tootsie roll danish cake candy canes chocolate cake.' +
    '\n Candy canes gingerbread jujubes chocolate caramels pudding bonbon dragée. Sugar plum sweet fruitcake macaroon marzipan.' +
    '\n Dessert candy canes apple pie pie gummies cupcake bonbon gingerbread dragée. Marzipan candy canes biscuit cake apple pie.' +
    '\n\n' +
    'Brownie carrot cake caramels jelly. Topping topping lemon drops macaroon chocolate cake.' +
    '\n Chocolate tiramisu jelly tootsie roll. Fruitcake pastry cheesecake. Icing cake danish.' + 
    '\n Lollipop chocolate carrot cake jelly-o tart topping bear claw macaroon.';
var begHeaders = new Step('Headers',
    begHeadersLesson, begHeadersMD, function (doc) {
        var check = /^### \w+/;
        if (!check.test(doc.getLine(0))) return false;
        return true;
    },
        successNotice, failNotice
    );

beginnersTutorial.step(begHeaders);

// ============================================================================
// ============================================================================
var begEmphasisLesson = 
    '# *Attitude!*' +
    '\nIn markdown, italics are created with the * (asterix) symbol: ' +
    '\n\n\\**So Deep\\**' +
    '\n# **Yelling!**' +
    '\nBold words are created with two asterix symbols: ' +
    '\n\n\\*\\***So Powerful**\\*\\*' +
    '\n\n**NOTE:** Do not add a space between the asterix and the word!' +
    '\n### Objective:' +
    '\n\nTry adding italics to each occurence of the word attitude in the ' + 
    'text, and bolding every occurence of the word BOLD!' +
    '\n\n**Hint:** don\'t forget to add the asterix symbols to both sides of the word!';

var begEmphasisMD = 'Cupcake cookie BOLD gingerbread. Fruitcake cupcake wafer. Attitude. Icing cake danish.' + 
    '\nHalvah halvah croissant cheesecake. Attitude. Lemon drops cotton candy BOLD jelly beans chupa chups halvah.';

var begEmphasis = new Step('Emphasis',
        begEmphasisLesson, begEmphasisMD, function (doc) {
            var input = doc.getValue();
            input = input.replace(/\./g, '');
            var attitude = /\*Attitude\*/g;
            var bold = /\*\*BOLD\*\*/g;
            var foundA = input.match(attitude);
            var foundB = input.match(bold);
            if (!foundA || !foundB) return false;
            if (foundA.length === 2 && foundB.length === 2) return true;
            return false;
        }, 
            successNotice, failNotice
        );

beginnersTutorial.step(begEmphasis);

// ============================================================================
// ============================================================================
var begLinesLesson = 
    '# Lines' +
    '\nYou can add a line break by adding two spaces at the end of a line.' +
    '\nSimply pressing enter will continue the text on the current line. To create' +
    '\na new paragraph, press enter twice.' +
    '\n### Objective:' +
    '\nThere is no task in this lesson. Play with the markdown on the left to get' +
    '\na feel for how it works!';

var begLinesMD =
    'This is a single line style of text' +
    '\nseperated in markdown by a new line but not in the rendered output.' +
    '\n\nNotice the extra space it takes to make a new paragraph.' +
    '\n\nAdding two spaces at the end of a line...  ' +
    '\n...will create a new line in the same paragraph.';

var begLines = new Step('Lines',
    begLinesLesson, begLinesMD, function () { return true; },
        successNotice, failNotice
    );

beginnersTutorial.step(begLines);

// ============================================================================
// ============================================================================
var begListsLesson = 
    '# Lists' +
    '\n Making lists in markdown is as simple as creating them in a typical word document:' +
    '\n 1. \n 2. \n 3. ' +
    '\n\n You can also make unordered lists using the format - A:' +
    '\n\n - A \n - B \n - C ' +
    '\n### Objective:' +
    '\n\n Try to convert the text to match this: ' +
    '\n ## TODO' +
    '\n 1. Learn Markdown' +
    '\n     - Complete all the tutorials' +
    '\n     - Master all the techniques' +
    '\n     - Have fun' + 
    '\n 2. ???' +
    '\n 3. Profit.' +
    '\n\n **Hint:** To create a sublist, indent four spaces (spaces indicated by dots):' +
    '\n\n1. Learn Markdown' +
    '\n\n....- Complete all the tutorials' +
    '\n\nDon\'t forget to add a space between the bullet point and the content!';

var begListsMD = 
    '## TODO\nLearn Markdown\nComplete all the tutorials' +
    '\nMaster all the techniques\nHave fun' +
    '\n???\nProfit.';

var begLists = new Step('Lists',
    begListsLesson, begListsMD, function (doc) {
        var list = /(## TODO\n)(1. \w+\s\w+\n)(( {4}- (\w+\s)+){3})(2. .+\n)(3. \w+\.)/g;
        if (!list.test(doc.getValue())) return false;
        return true;
    },
        successNotice, failNotice
    );

beginnersTutorial.step(begLists);

// ============================================================================
// ============================================================================
var begLinksLesson = 
    '# Links' +
    '\nAdding html links to your content can help add a strong backbone to ' +
    '\nyour content. Adding links in [Markdown](http://spec.commonmark.org/0.18/#) ' +
    '\nis very intuitive: ' +
    '\n\n \\[Text to display](http://www.content.com)' +
    '\n\n For example, to get a link to [Google](https://www.google.com) like this, type:' +
    '\n\n \\[Google](https://www.google.com)' +
    '\n### Objective:' +
    '\nTry creating a link to \'https://www.facebook.com\' with a placeholder text that says \'Facebook\' on line 1!';

var begLinksMD = '';

var begLinks = new Step('Links',
    begLinksLesson, begLinksMD, function (doc) {
        var check = /\[facebook\]\(https\:\/\/www\.facebook\.com\)/g;
        if (!check.test(doc.getLine(0).toLowerCase())) return false;
        return true;
    }, 
        successNotice, failNotice
    );

beginnersTutorial.step(begLinks);

// ============================================================================
// ============================================================================
var begCodeLesson = 
    '# Code' +
    '\n Adding code blocks to your content is useful if you are a developer of some sort:' +
    '\n\n```javascript' +
    '\nfunction sum () {' +
    '\n    /**' +
    '\n    * Add all values' +
    '\n    * @param {...toAdd} Number - All numbers to add' +
    '\n    * @return {Total} Number - The result' +
    '\n    */' +
    '\n' +
    '\n    var args = Array.prototype.slice.call(arguments),' +
    '\n        sum = 0;' +
    '\n    args.forEach(function (e) { sum += e });' +
    '\n    return sum;' +
    '\n}' +
    '\n```' +
    '\n\nCool, huh?' +
    '\n\nYou can make these code blocks by surrouding your content with ``` :' +
    '\n\n\\```  ' +
    '\nSome code  ' +
    '\n\\```' +
    '\n### Objective:' +
    '\nCreate a code block that contains the word \'code\'' +
    '\n\n**Hint:** it will take **3** lines to properly do this challenge.';

var begCodeMD = '';

var begCode = new Step ('Code',
    begCodeLesson, begCodeMD, function (doc) {
        var input = doc.getValue();
        input = input.toLowerCase();
        input = input.replace(/\n/g, '');
        var check = /```code```/g;
        if (check.test(input)) return true;
        return false;
    }, 
        successNotice, failNotice
    );

beginnersTutorial.step(begCode);

// ============================================================================
// ============================================================================
var begBlockquotesLesson = 
    '# Blockquotes' +
    '\nFound a cool new quote about Einstein being a marine?  \nInclude it in your' +
    '\ncontent using blockquotes! To create a blockquote, simply prepend each line with >:' +
    '\n\n\\> Blockquotes could be used to show customer testimonies,  ' +
    '\n\\> for example. That would definitely increase sales.  ' +
    '\n\nRenders to:' +
    '\n\n> Blockquotes could be used to show customer testimonies for example. That would definitely increase sales.' +
    '\n### Objective:' +
    '\nConvert the text into a blockquote!' +
    '\n\n**Hint:** Don\'t forget to add the \'>\' symbol to blank lines!';

var begBlockquotesMD = 
    'Cupcake ipsum dolor. Sit amet cookie gummi bears I love cupcake bonbon I love.' +
    '\n\nCandy cotton candy cotton candy pastry. I love icing danish sweet roll jujubes.' +
    '\n\nIce cream bonbon bonbon soufflé. Oat cake macaroon dragée cotton candy croissant.' +
    '\n\nTopping cookie. Chocolate sesame snaps cake toffee tootsie roll bonbon gingerbread pudding icing.';

var begBlockquote = new Step('Blockquote',
    begBlockquotesLesson, begBlockquotesMD, function (doc) {
        var good = true;
        var check = />/;
        doc.eachLine(function (handle) {
            var line = handle.text;
            line = line.replace(/\n/g, '');
            if (!check.test(line)) good = false;
        });
        return good;
    },
        successNotice, failNotice
    );

beginnersTutorial.step(begBlockquote);

// ============================================================================
// ============================================================================
var begDividerLesson = 
    '# Divider' +
    '\nYou can easily divide your content by typing in three or more ' +
    '\n\n\\--- hyphens \n\n ---' +
    '\n\n\\*** asterisks \n\n ***' +
    '\n\n\\___ underscores \n\n ___' +
    '\n### Objective:' +
    '\n Put a divider between each paragraph!' +
    '\n\n**Hint:** Edit lines 3, 7, and 11';

var begDividerMD = 
    'Cupcake ipsum dolor. Sit amet marshmallow dessert powder. Tootsie roll gummies sesame snaps. Soufflé gummi bears gummi bears.' +
    '\n\n\n' +
    '\nFruitcake dessert bear claw jujubes. Jujubes lemon drops I love pastry wafer pastry. I love I love marshmallow muffin gummies I love. Tiramisu chocolate cake topping I love ice cream cupcake danish tootsie roll.' +
    '\n\n\n' +
    '\nChocolate cake I love brownie chocolate cake donut chocolate. Marzipan tootsie roll cheesecake ice cream icing. Sugar plum biscuit macaroon chocolate muffin cupcake wafer bonbon. Powder tiramisu I love ice cream donut marzipan I love marzipan.' +
    '\n\n\n' +
    '\nJelly dragée wafer jujubes pudding icing bonbon chocolate lemon drops. Muffin chocolate bar chupa chups icing topping cupcake. Jelly beans powder I love bear claw carrot cake I love marshmallow caramels gummies.';

var begDivider = new Step('Divider',
    begDividerLesson, begDividerMD, function (doc) {
        var good = true;
        var lines = [];
        lines.push(doc.getLine(2), doc.getLine(6), doc.getLine(10));
        var check = /(\*|_|-){3,}/;
        lines.forEach(function (e) {
            e = e.replace(/\n/g, '');
            if(!check.test(e)) good = false; 
        });
        return good;
    },
        successNotice, failNotice
    );

beginnersTutorial.step(begDivider);