// Render the sandbox mode.
function sandbox () {
    clear();

    renderTopBar('Sandbox');

    codeMirror.setValue('Have fun!');
    render();
}