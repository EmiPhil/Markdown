var codeEditor = document.getElementById('codeEditor');
var codeMirror = CodeMirror(codeEditor, {
    value: 'Type in me!',
    theme: 'mdn-like',
    lineNumbers: true
});