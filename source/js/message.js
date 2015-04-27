/**
* The modal and the notify bars. Pretty self explanatory I believe. IF you need
* help here send me a message.
*/

var Modal = function (header, text, button) {
    this.header = header;
    this.text = text;
    this.button = button;
};

var modalPlaceholder = document.getElementById('modalPlaceholder');
Modal.prototype.render = function () {
    destroyModal();

    var black = document.createElement('div');
    classie.add(black, 'blacken');

    var message = document.createElement('div');
    classie.add(message, 'message');

    var header = document.createElement('div');
    classie.add(header, 'messageHeader');

    var heading = document.createElement('p');
    heading.textContent = this.header;

    var close = document.createElement('div');
    classie.add(close, 'messageClose');

    var x = document.createElement('span');
    classie.add(x, 'icon-close');
    x.onclick = destroyModal;

    var text = document.createElement('p');
    text.textContent = this.text;

    var buttons = document.createElement('div');
    classie.add(buttons, 'buttons');

    var greenButton = document.createElement('div');
    classie.add(greenButton, 'greenButton');
    greenButton.innerHTML = this.button + 
        '<span class="icon icon-check"></span>';
    greenButton.onclick = destroyModal;

    modalPlaceholder.appendChild(black);

    header.appendChild(heading);
    close.appendChild(x);
    buttons.appendChild(greenButton);

    message.appendChild(header);
    message.appendChild(close);
    message.appendChild(text);
    message.appendChild(buttons);

    modalPlaceholder.appendChild(message);
};

function destroyModal () {
    removal(modalPlaceholder);
}

var Notify = function (text, button, type, action) {
    this.text = text;
    this.button = button;
    this.type = type.toLowerCase();
    this.action = action;
};

var notifyPlaceholder = document.getElementById('notify');
Notify.prototype.render = function () {
    var body = document.createElement('div');

    switch (this.type) {
        case 'success':
            classie.add(body, 'successNotify');
            break;
        case 'failure':
            classie.add(body, 'failureNotify');
            break;
        default:
            classie.add(body, 'notify');
    }

    var p = document.createElement('p');
    p.textContent = this.text;

    var button = document.createElement('div');
    classie.add(button, 'button');
    button.textContent = this.button;
    button.onclick = this.action;

    body.appendChild(p);
    body.appendChild(button);

    notifyPlaceholder.appendChild(body);
};

function destroyNotices () {
    removal(notifyPlaceholder);
}