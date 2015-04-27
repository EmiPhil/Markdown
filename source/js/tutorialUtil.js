/**
* As of 4/17/2015, the beginner.js file is probably the best spot to start and
* get a feel for how this all works. You can safely ignore everything below in
* favor of copying the structure of beginner.js for future potential tutorials.
*
* There's enough magic here to allow that kind of thing, which is nice for
* tutorial makers at least.
*
* Sometime in the future I think it would be wise to refactor this into a frame
* work of some sort. This is conditional on being accepted in the competition,
* if it doesn't then I'll probably just leave it as-is.
*/

var Step = function (name, lesson, md, answer, success, failure) {
    /**
    * Theres a lot of shit going on here. I'm not going to attempt to doc it
    * all, just check out the premade tutorials and you'll get a feel for
    * making steps.
    */
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
    /**
    * When you generate a new tutorial you need to pass the first step in.
    * This might be a bit limiting but it forces the tutorial to be able to
    * automagically work with all the spaghetti below. In other words, I don't
    * trust you to register a step before the user might be executing methods.
    * @param {firstStep} Object - created with the Step constructor
    * @param {name} String - give it the same name as the sidebar or you will
    *                        ruin the spaghetti.
    */
    this.steps = [firstStep];
    this.current = this.steps[0];
    this.title = name;
    this.won = false;
    tutorials[name] = this;
};

Tutorial.prototype.check = function () {
    /**
    * Checks to see if what the user submitted is what they should have.
    * Expects middleware through the Step constructor. Typically, you would
    * just use the pre-made middleware at the bottom of this file but I wanted
    * to keep options open in case there was a tutorial that had a specific
    * success / failure middleware requirement.
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
    * Creates a new tutorial step. Use this to register constructed steps to a
    * particular tutorial. See one of the tutorials for usage.
    * @param {step} object - created by Step constructor
    */
    this.steps.push(step);
};

var instructions = document.getElementById('lesson');
Tutorial.prototype.load = function (step) {
    /**
    * Load a given step into the dom. There is no reason this should ever be
    * manually loaded.
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
    /**
    * Create the check button and reset tutorial button. This is a hard-wired
    * function and there is no reason you should ever have to manually call it.
    */
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
    * Load all the steps into the progress bar for easy navigation. This is a
    * hard wired function and there shouldn't be a reason to manually call it.
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
    * Load the next step. If the next step is already complete, or if it
    * is the last step, trigger a smartLoad() instead. Hardwired.
    */
    var index = _.indexOf(this.steps, this.current);
    index += 1;
    if (this.steps[index])
        if (!this.steps[index].completed)
            this.load(this.steps[index]);
        else this.smartLoad();
    else this.smartLoad();
};

Tutorial.prototype.smartLoad = function () {
    /**
    * Load the first uncompleted step, or congratulate the user. Hardwired.
    */
    var step = _.find(this.steps, function (step) {
        return !step.completed;
    });
    if (step) this.load(step);
    else this.win();
};

Tutorial.prototype.editorLoad = function (md) {
    /**
    * Load the tutorial into the editor. Hardwired.
    * @param {md} string - Required component of a step;
    */
    codeMirror.setValue(md);
    render();
};

Tutorial.prototype.win = function () {
    /**
    * Congratulate the user with a modal. I can imagine a few cases where
    * you might want to call this, but it is also hardwired.
    */
    var notWin = false;
    this.steps.forEach(function (step) {
        if (!step.completed) notWin = true;
    });
    if (notWin) return;

    if (this.won) return;

    this.won = true;
    var header = 'Congratulations!!!';
    var body = 'You\'ve completed all the ' +
        this.title + ' challenges.\nWow!';
    var buttonText = 'I\'m awesome!';

    new Modal(header, body, buttonText).render();
};

Tutorial.prototype.reset = function () {
    /**
    * Reset the tutorial. Hardwired to the reset button that is auto-genned.
    */
    var self = currentTutorial;
    if (self.current.completed) self.current.completed = false;
    self.current.content = '';
    self.load(self.current);
};

// ============================================================================
// Other utilities ============================================================
// ============================================================================
function removal (element) {
    /**
    * Remove all child elements of element.
    * @param {element} Dom element
    */
    while (element.firstChild)
        element.removeChild(element.firstChild);
}

function clear () {
    /**
    * An ever-growing function that resets everything. Spaghetti prone.
    */
    removal(progBar);
    removal(lesson);
    classie.remove(instructions, 'material');
    destroyModal();
    destroyNotices();
    removal(buttonPlaceholder);
    currentTutorial = undefined;
}

function tutNav (self) {
    /**
    * Load a tutorial from the text content of the sidebar. Should be called
    * from the links onclick.
    * @param {self} Sidebar link
    */
    var name = self.textContent;
    if (_.has(tutorials), name) tutorials[name].smartLoad();
}

function tutProg (self) {
    /**
    * Allow navigation from the progress bar. Should be made a part of prog bar
    * creation - note that this is already done and there is no need to use
    * this function in any other use case.
    * @param {self} Progbar element
    */
    var name = self.textContent;
    currentTutorial.steps.forEach(function (step) {
        if (step.name === name) currentTutorial.load(step);
    });
}

function standardNotice (type) {
    /**
    * A delightful step middleware that allows the tutorial writer to not
    * have to create a middleware for each step. Also encourages some
    * consistency and structure to the spaghetti.
    * @param {type} String - 'success' makes the green next bar, anything else
    *                        makes the failure notice. This probably should
    *                        have been a boolean but whatever.
    */
    var text;
    var button;
    var action;
    destroyNotices();
    if (type === 'success') {
        text = 'Good job!';
        button = 'Next step';
        action = function () {
            destroyNotices();
            currentTutorial.current.completed = true;
            currentTutorial.next();
        };
    } else {
        text = 'Oops! That doesn\'t look quite right. Try again?';
        button = 'Okay!';
        action = function () {
            currentTutorial.current.completed = false;
            destroyNotices();
        };
    }
    new Notify(text, button, type, action).render();
}

/**
* Further sugar for the above. Instead of even calling the function you can
* just include these as steps. See the tutorials for usage in action.
*/
var successNotice = _.partial(standardNotice, 'success');
var failNotice = _.partial(standardNotice, 'failure');