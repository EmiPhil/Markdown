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
    '\n\n Try typing your name in on line **8.**';

var begStepOne = new Step('Intro', 
    begStepOneLesson, begStepOneMD, function (doc) {
        /**
        * Check input
        * @param {doc} The context of the code editor
        * @param {self} The step
        */
        var input = doc.getLine(7);
        if (input) return true;
        return false;
    }, function (doc) {
        /**
        * On success...
        */
        var name = doc.getLine(7);
        var namePlace = document.getElementById('namePlace');
        namePlace.textContent = 'Welcome, ' + name;
        currentTutorial.generateProgBar();
        standardNotice('success');
    }, function () {
        /**
        * On failure...
        */
        standardNotice('failure');
    });

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
        var input = doc.getLine(0);
        var check = new RegExp(/^### \w+/);
        if (check.test(input)) return true;
        return false;
    },
        successNotice, failNotice
    );

beginnersTutorial.step(begHeaders);

// ============================================================================
// ============================================================================
var begEmphasisLesson = 
    '# *Attitude!*' +
    '\n In markdown, italics are created with the * (asterix) symbol: ' +
    '\n\n \\**So Deep\\**' +
    '\n # **Yelling!**' +
    '\n Bold words are created with two asterix symbols: ' +
    '\n\n \\*\\***So Powerful**\\*\\*' +
    '\n\n **NOTE:** Do not add a space between the asterix and the word!' +
    '\n\n Try adding italics to each occurence of the word attitude in the ' + 
    'text, and bolding every occurence of the word BOLD! \n\n' +
    '**Hint:** don\'t forget to add the asterix symbols to both sides of the word!';

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
var begListsLesson = 
    '# Lists' +
    '\n Making lists in markdown is as simple as' +
    '\n 1. <== ( 1. ) \n 2. <== ( 2. ) \n 3. <== ( 3. )' + 
    '\n\n - A <== ( - A ) \n - B <== ( - B ) \n - C <== ( - C )' +
    '\n\n Try to convert the text to match this: ' +
    '\n ## TODO' +
    '\n 1. Learn Markdown' +
    '\n     - Complete all the tutorials' +
    '\n     - Master all the techniques' +
    '\n     - Have fun' + 
    '\n 2. ???' +
    '\n 3. Profit.' +
    '\n\n **Hint:** To create a sublist, indent four spaces:' +
    '\n\n    1. Learn Markdown' +
    '\n        - Complete all the tutorials';

var begListsMD = 
    '## TODO\nLearn Markdown\nComplete all the tutorials' +
    '\nMaster all the techniques\nHave fun' +
    '\n???\nProfit.';

var begLists = new Step('Lists',
    begListsLesson, begListsMD, function (doc) {
        var input = doc.getValue();
        var list = /(## TODO\n)(1. \w+\s\w+\n)(( {4}- (\w+\s)+){3})(2. .+\n)(3. \w+\.)/g;
        if (list.test(input)) return true;
        return false;
    },
        successNotice, failNotice
    );

beginnersTutorial.step(begLists);

// ============================================================================
// ============================================================================
