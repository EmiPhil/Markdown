// Render the cheatSheet mode.
function cheatSheet () {
    clear();
    var md =
    '# Header1' +
    '\n## Header 2' +
    '\n### Header 3' +
    '\n#### Header 4' +
    '\n##### Header 5' +
    '\n###### Header 6' +
    '\n*Italics*    _Italics_' +
    '\n\n**Bold**    __Bold__' +
    '\n\n__*Boldtalics*__    **_Boltalics_**' +
    '\n\n1. List\n2. Example\n    - Sub' +
    '\n\n1) Another list\n2) Example\n    * Sub\n    + Sub 2' +
    '\n\n[Links](https://www.links.com)' +
    '\n\n```\nCode\n```' +
    '\n\n`Inline-Code`' +
    '\n\nDividers:' +
    '\n***\n\n---\n\n___' +
    '\n\n> # Blockquotes:\n> Cupcake ipsum dolor sit amet carrot cake I love. Pudding jelly chocolate ice cream.  ' +
    '\nJelly beans lemon drops I love chocolate cake jujubes dessert. Soufflé I love jelly halvah powder.  ' +
    '\nGingerbread candy I love topping jujubes dragée chocolate. Halvah fruitcake carrot cake tiramisu.' +
    '\n\n![relative path images](assets/images/princeMagnum.jpg "Image Title")' +
    '\n![web images](http://blog.codinghorror.com/assets/images/codinghorror-app-icon.png?v=bdb986f48f "Image Title")' +
    '\n\n<span class="red">Easy inline HTML</span>';
    
    renderTopBar('Cheat Sheet');

    codeMirror.setValue(md);
    render();
}