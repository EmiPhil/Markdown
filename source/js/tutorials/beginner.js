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
        alert(input);
        if (input && !_.isEmpty(input)) return true;
        return false;
    }, function (doc, self) {
        /**
        * On success...
        */
        var name = doc.getLine(7);
        var namePlace = document.getElementById('namePlace');
        namePlace.textContent = 'Welcome, ' + name;
        self.completed = true;
        currentTutorial.generateProgBar();
    }, function () {
        /**
        * On failure...
        */
        //alert('failure');
    });

var beginnersTutorial = new Tutorial(begStepOne, 'Beginner');