var Step = function (name, lesson, md, answer, success, failure) {
    this.name = name;
    this.lesson = lesson;
    this.answer = answer;
    this.md = md;
    this.success = success;
    this.failure = failure;
    this.completed = false;
    this.awesome = true;
};

var tutorials = {};
var currentTutorial;

var Tutorial = function (firstStep, name) {
    this.steps = [firstStep];
    this.current = this.steps[0];

    tutorials[name] = this;
};

Tutorial.prototype.check = function () {
    /**
    * Checks to see if what the user submitted is what they should have. Also
    * accepts middleware through the Step constructor.
    */
    var step = this.current;
    var success = step.success;
    var failure = step.failure;

    var context = codeMirror;

    var result = step.answer(context, step);

    if (result) success(context, step);

    failure(context, step);
};

Tutorial.prototype.step = function (name, lesson, answer) {
    /**
    * Creates a new tutorial step.
    * @param {name} string - name of lesson
    * @param {lesson} string - set of instructions
    * @param {answer} string - what the solution looks like
    * @returns {Object} As specified
    */
    var step = new Step(name, lesson, answer);
    this.steps.push(step);
    return step;
};

var instructions = document.getElementById('lesson');
Tutorial.prototype.load = function (step) {
    /**
    * Load a given step into the dom.
    * @param {step} object - created by this.step();
    */
    this.current = step;
    currentTutorial = this;
    this.generateProgBar();
    this.editorLoad(step.md);
    render(instructions, step.lesson);
};

var progBar = document.getElementById('progBar');
Tutorial.prototype.generateProgBar = function () {
    /**
    * Load all the steps into the progress bar for easy navigation
    */
    while (progBar.firstChild)
        progBar.removeChild(progBar.firstChild);

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

Tutorial.prototype.smartLoad = function () {
    /**
    * Load the first uncompleted step, or the final step if all completed.
    * @return {Value} Description
    */
    var self = this;
    self.steps.forEach(function (step) {
        if (!step.completed) self.load(step);
    });
    self.load(_.last(self.steps));
};

Tutorial.prototype.editorLoad = function (md) {
    /**
    * Load the tutorial into the editor.
    * @param {md} string - Required component of a step;
    */
    codeMirror.setValue(md);
    render();
};

Tutorial.prototype.reset = function () {
    /**
    * Reset the tutorial
    */
    if (this.current.completed) this.current.completed = false;
    this.load(this.current);
};

// Other utility

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