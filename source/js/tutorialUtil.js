var Step = function (name, lesson, md, answer, success, failure) {
    this.name = name;
    this.lesson = lesson;
    this.answer = answer;
    this.md = md;
    this.success = success;
    this.failure = failure;
    this.content = '';
    this.completed = false;
    this.awesome = true;
};

var tutorials = {};
var currentTutorial;

var Tutorial = function (firstStep, name) {
    this.steps = [firstStep];
    this.current = this.steps[0];
    this.title = name;

    tutorials[name] = this;
};

Tutorial.prototype.check = function () {
    /**
    * Checks to see if what the user submitted is what they should have. Also
    * accepts middleware through the Step constructor.
    */
    var step = currentTutorial.current;
    var success = step.success;
    var failure = step.failure;

    var context = codeMirror;

    var result = step.answer(context, step);

    if (result) success(context, step);
    else failure(context, step);
};

Tutorial.prototype.step = function (step) {
    /**
    * Creates a new tutorial step.
    * @param {step} object - created by Step constructor
    */
    this.steps.push(step);
};

var instructions = document.getElementById('lesson');
Tutorial.prototype.load = function (step) {
    /**
    * Load a given step into the dom.
    * @param {step} object - created by this.step();
    */
    destroyNotices();
    this.current = step;
    currentTutorial = this;
    this.generateProgBar();
    this.generateButtons();
    classie.add(instructions, 'material');
    if (step.content) this.editorLoad(step.content);
    else this.editorLoad(step.md);
    render(instructions, step.lesson);
};

var buttonPlaceholder = document.getElementById('buttonPlaceholder');
Tutorial.prototype.generateButtons = function () {
    removal(buttonPlaceholder);

    var container = document.createElement('div');
    classie.add(container, 'buttons');

    var twoButtons = document.createElement('div');
    classie.add(twoButtons, 'twoButtons');

    var reset = document.createElement('div');
    classie.add(reset, 'button');
    reset.textContent = 'Reset';
    reset.onclick = this.reset;

    var check = document.createElement('div');
    classie.add(check, 'button');
    check.textContent = 'Check Answer';
    check.onclick = this.check;

    twoButtons.appendChild(reset);
    twoButtons.appendChild(check);

    container.appendChild(twoButtons);

    buttonPlaceholder.appendChild(container);
};

var progBar = document.getElementById('progBar');
Tutorial.prototype.generateProgBar = function () {
    /**
    * Load all the steps into the progress bar for easy navigation
    */
    removal(progBar);

    var lessonProg = document.createElement('li'),
        lessonProgSpan = document.createElement('span'),
        bolded = document.createElement('b'),
        text = document.createTextNode('Lesson Progress');
    lessonProg.className = 'lessonProgress';

    bolded.appendChild(text);
    lessonProgSpan.appendChild(bolded);
    lessonProg.appendChild(lessonProgSpan);
    progBar.appendChild(lessonProg);

    var self = this;
    self.steps.forEach(function (step) {
        var li = document.createElement('li'),
            span = document.createElement('span'),
            text = document.createTextNode(step.name);

        li.onclick = function () {
            self.load(step);
        };

        if (self.current.name === step.name)
            classie.add(li, 'active');

        span.appendChild(text);
        if (step.completed) {
            complete = document.createElement('span');
            classie.add(complete, 'icon-check');
            classie.add(li, 'completed');
            span.appendChild(complete);
        }

        if ((self.current.name === step.name) && (step.completed)) {
            classie.remove(li, 'active');
            classie.remove(li, 'completed');
            classie.add(li, 'activeCompleted');
        }

        li.appendChild(span);
        progBar.appendChild(li);
    });
};

Tutorial.prototype.next = function () {
    /**
    * Load the next step
    */
    var index = _.indexOf(this.steps, this.current);
    index += 1;
    if (this.steps[index]) this.load(this.steps[index]);
    else this.smartLoad();
};

Tutorial.prototype.smartLoad = function () {
    /**
    * Load the first uncompleted step, or congratulate the user.
    */
    var step = _.find(this.steps, function (step) {
        return !step.completed;
    });
    if (step) this.load(step);
    else this.win();
};

Tutorial.prototype.editorLoad = function (md) {
    /**
    * Load the tutorial into the editor.
    * @param {md} string - Required component of a step;
    */
    codeMirror.setValue(md);
    render();
};

Tutorial.prototype.win = function () {
    /**
    * Congratulate the user with a modal
    */
    var notWin = false;
    this.steps.forEach(function (step) {
        if (!step.completed) notWin = true;
    });
    if (notWin) return;

    var header = 'Congratulations!!!';
    var body = 'You\'ve completed all the ' +
        this.title + ' challenges.\nWow!';
    var buttonText = 'I\'m awesome!';
    new Modal(header, body, buttonText).render();
};

Tutorial.prototype.reset = function () {
    /**
    * Reset the tutorial
    */
    var self = currentTutorial;
    if (self.current.completed) self.current.completed = false;
    self.current.content = '';
    self.load(self.current);
};

// Other utility
function removal (element) {
    while (element.firstChild)
        element.removeChild(element.firstChild);
}

function clear () {
    removal(progBar);
    removal(lesson);
    classie.remove(instructions, 'material');
    destroyModal();
    destroyNotices();
    removal(buttonPlaceholder);
    currentTutorial = undefined;
}

function tutNav (self) {
    var name = self.textContent;
    if (_.has(tutorials), name) tutorials[name].smartLoad();
}

function tutProg (self) {
    var name = self.textContent;
    currentTutorial.steps.forEach(function (step) {
        if (step.name === name) currentTutorial.load(step);
    });
}

function standardNotice (type) {
    var text;
    var button;
    var action;
    currentTutorial.current.completed = true;
    destroyNotices();
    if (type === 'success') {
        text = 'Good job!';
        button = 'Next step';
        action = function () {
            destroyNotices();
            currentTutorial.next();
        };
    } else {
        text = 'Oops! That doesn\'t look quite right. Try again?';
        button = 'Okay!';
        action = function () {
            destroyNotices();
        };
    }
    new Notify(text, button, type, action).render();
}

var successNotice = _.partial(standardNotice, 'success');
var failNotice = _.partial(standardNotice, 'failure');