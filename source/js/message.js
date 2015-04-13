var Modal = function (header, text, button) {
    this.header = header;
    this.text = text;
    this.button = button;
};

Modal.prototype.render = function () {
    var black = document.createElement('div');
    classie.add(black, 'blacken');

    var message = document.createElement('div');
    classie.add(message, 'message');

    var header = document.createElement('div');
    classie.add(header, 'messageHeader');

    var heading = document.createElement('p');
    p.textContent = this.header;

    var close = document.createElement('div');
    classie.add(close, 'messageClose');

    var x = document.createElement('span');
    classie.add(x, 'icon-close');

    var text = document.createElement('p');
    text.textContent = this.text;

    var buttons = document.createElement('div');
    classie.add(buttons, 'buttons');

    var greenButton = document.createElement('div');
    classie.add(greenButton, 'greenButton');
    greenButton.innerHTML = this.button + 
        '<span class="icon icon-check"></span>';

    var placeHolder = document.getElementById('messagePlaceholder');
    placeHolder.appendChild(black);

    header.appendChild(heading);
    close.appendChild(x);
    buttons.appendChild(greenButton);

    placeHolder.appendChild(header);
    placeHolder.appendChild(close);
    placeHolder.appendChild(buttons);
};
/*
<div class="blacken"></div>
<div id="message" class="message">
    <div class="messageHeader">
        <p>Heading</p>
    </div>
    <div class="messageClose"><span class="icon-close"></span></div>
    <p>Test</p>
    <div class="buttons"><div class="greenButton">Got it!<span class="icon icon-check"></span></div></div>
</div>
*/