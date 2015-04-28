function render(target,source){target||(target=renderee),source||(source=codeMirror.getValue());var parsed=reader.parse(source),result=writer.render(parsed);removal(target),target.innerHTML=result}function destroyModal(){removal(modalPlaceholder)}function destroyNotices(){removal(notifyPlaceholder)}function openNav(){classie.toggle(nav,"open"),TweenLite.to(nav,.5,{left:0})}function closeNav(){nav.classList.contains("open")&&(classie.toggle(nav,"open"),TweenLite.to(nav,.5,{left:"-240px"}))}function accordion(target,self){for(var i=0;i<navHeaders.length;i+=1)classie.remove(navHeaders[i],"current");classie.add(self,"current"),target=document.getElementById(target),target.classList.contains("open")?(classie.toggle(target,"open"),TweenLite.to(target,.5,{maxHeight:0})):(classie.toggle(target,"open"),TweenLite.to(target,.5,{maxHeight:"250px"}))}function currentNav(self){for(var i=0;i<navLinks.length;i+=1)classie.remove(navLinks[i],"active");classie.add(self,"active"),closeNav()}function renderTopBar(content){var bar=document.getElementById("progBar"),li=document.createElement("li"),span=document.createElement("span"),bolded=document.createElement("b"),text=document.createTextNode(content);li.className="lessonProgress",bolded.appendChild(text),span.appendChild(bolded),li.appendChild(span),bar.appendChild(li)}function removal(element){for(;element.firstChild;)element.removeChild(element.firstChild)}function clear(){removal(progBar),removal(lesson),classie.remove(instructions,"material"),destroyModal(),destroyNotices(),removal(buttonPlaceholder),currentTutorial=void 0}function tutNav(self){var name=self.textContent;_.has(tutorials),name&&tutorials[name].smartLoad()}function tutProg(self){var name=self.textContent;currentTutorial.steps.forEach(function(step){step.name===name&&currentTutorial.load(step)})}function standardNotice(type){var text,button,action;destroyNotices(),"success"===type?(text="Good job!",button="Next step",action=function(){destroyNotices(),currentTutorial.current.completed=!0,currentTutorial.next()}):(text="Oops! That doesn't look quite right. Try again?",button="Okay!",action=function(){currentTutorial.current.completed=!1,destroyNotices()}),new Notify(text,button,type,action).render()}function cheatSheet(){clear();var md='# Header1\n## Header 2\n### Header 3\n#### Header 4\n##### Header 5\n###### Header 6\n*Italics*    _Italics_\n\n**Bold**    __Bold__\n\n__*Boldtalics*__    **_Boltalics_**\n\n1. List\n2. Example\n    - Sub\n\n1) Another list\n2) Example\n    * Sub\n    + Sub 2\n\n[Links](https://www.links.com)\n\n```\nCode\n```\n\n`Inline-Code`\n\nDividers:\n***\n\n---\n\n___\n\n> # Blockquotes:\n> Cupcake ipsum dolor sit amet carrot cake I love. Pudding jelly chocolate ice cream.  \nJelly beans lemon drops I love chocolate cake jujubes dessert. Soufflé I love jelly halvah powder.  \nGingerbread candy I love topping jujubes dragée chocolate. Halvah fruitcake carrot cake tiramisu.\n\n![relative path images](assets/images/princeMagnum.jpg "Image Title")\n![web images](http://blog.codinghorror.com/assets/images/codinghorror-app-icon.png?v=bdb986f48f "Image Title")\n\n<span class="red">Easy inline HTML</span>';renderTopBar("Cheat Sheet"),codeMirror.setValue(md),render()}function credits(){clear();var md='# Credits\nThis is a project created by [Phil](https://github.com/EmiPhil/Markdown)\nof EmiPhil for [Jeff Atwood\'s](http://blog.codinghorror.com/toward-a-better-markdown-tutorial/) competition.\n\n[Official Markdown Spec](http://chrisalley.github.io/commonmark-website/)\n## Application Dependencies:\n[classie](https://github.com/yawetse/classie)  \n[codemirror](http://codemirror.net/)  \n[underscore](https://github.com/jashkenas/underscore)  \n[commonmark](https://github.com/jgm/commonmark.js)  \n[tween](http://greensock.com/gsap)  \n[normalize.css](https://github.com/necolas/normalize.css)\n## Development Dependencies:\n[sass/scss](http://sass-lang.com/)  \n[gulp](https://github.com/gulpjs/gulp)  \n[gulp-sass](https://github.com/dlmanning/gulp-sass)  \n[gulp-concat](https://github.com/wearefractal/gulp-concat)  \n[gulp-uglify](https://github.com/terinjokes/gulp-uglify)  \n[gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css)  \n[gulp-jshint](https://github.com/spalger/gulp-jshint)  \n[gulp-run](https://github.com/cbarrick/gulp-run)  \n[browser-sync](https://github.com/BrowserSync/browser-sync)  \n[del](https://github.com/sindresorhus/del)  \n[jshint-stylish](https://github.com/sindresorhus/jshint-stylish)  \n[bower](https://github.com/bower/bower)\n# License:\nThe MIT License (MIT)\n\nCopyright (c) 2015 EmiPhil\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.';renderTopBar("Credits"),codeMirror.setValue(md),render()}function home(){clear();for(var i=0;i<navLinks.length;i+=1)classie.remove(navLinks[i],"active");var homeText="# Hello there. \n How do you do? \n\n This is a tutorial for the popular [Markdown](http://chrisalley.github.io/commonmark-website/) library. \n It is a submission by **Phil** of **EmiPhil** for [Jeff Atwood.](http://blog.codinghorror.com/toward-a-better-markdown-tutorial/)\n Check it out at [github!](https://github.com/EmiPhil/Markdown)\n\n Markdown is a *great* language for quickly creating HTML content.\n\n Go ahead and access one of the tutorial's from the left, or try typing directly in this _**live editor!!**_";renderTopBar("Home Page"),codeMirror.setValue(homeText),render()}function sandbox(){clear(),renderTopBar("Sandbox"),codeMirror.setValue("Have fun!"),render()}var codeEditor=document.getElementById("codeEditor"),codeMirror=CodeMirror(codeEditor,{value:"# Hello there. \n How do you do? \n\n This is a tutorial for the popular [Markdown](http://chrisalley.github.io/commonmark-website/) library. \n It is a submission by **Phil** of **EmiPhil** for [Jeff Atwood.](http://blog.codinghorror.com/toward-a-better-markdown-tutorial/)\n Check it out at [github!](https://github.com/EmiPhil/Markdown)\n\n Markdown is a *great* language for quickly creating HTML content.\n\n Go ahead and access one of the tutorial's from the left, or try typing directly in this _**live editor!!**_",theme:"mdn-like",lineNumbers:!0}),timeoutId;codeMirror.on("change",function(){var millisecondsToWait=1e3;window.clearTimeout(timeoutId),currentTutorial&&(currentTutorial.current.content=codeMirror.getValue()),timeoutId=window.setTimeout(render,millisecondsToWait)});var reader=new commonmark.Parser,writer=new commonmark.HtmlRenderer,renderee=document.getElementById("target");renderTopBar("Home Page"),render();var Modal=function(header,text,button){this.header=header,this.text=text,this.button=button},modalPlaceholder=document.getElementById("modalPlaceholder");Modal.prototype.render=function(){destroyModal();var black=document.createElement("div");classie.add(black,"blacken");var message=document.createElement("div");classie.add(message,"message");var header=document.createElement("div");classie.add(header,"messageHeader");var heading=document.createElement("p");heading.textContent=this.header;var close=document.createElement("div");classie.add(close,"messageClose");var x=document.createElement("span");classie.add(x,"icon-close"),x.onclick=destroyModal;var text=document.createElement("p");text.textContent=this.text;var buttons=document.createElement("div");classie.add(buttons,"buttons");var greenButton=document.createElement("div");classie.add(greenButton,"greenButton"),greenButton.innerHTML=this.button+'<span class="icon icon-check"></span>',greenButton.onclick=destroyModal,modalPlaceholder.appendChild(black),header.appendChild(heading),close.appendChild(x),buttons.appendChild(greenButton),message.appendChild(header),message.appendChild(close),message.appendChild(text),message.appendChild(buttons),modalPlaceholder.appendChild(message)};var Notify=function(text,button,type,action){this.text=text,this.button=button,this.type=type.toLowerCase(),this.action=action},notifyPlaceholder=document.getElementById("notify");Notify.prototype.render=function(){var body=document.createElement("div");switch(this.type){case"success":classie.add(body,"successNotify");break;case"failure":classie.add(body,"failureNotify");break;default:classie.add(body,"notify")}var p=document.createElement("p");p.textContent=this.text;var button=document.createElement("div");classie.add(button,"button"),button.textContent=this.button,button.onclick=this.action,body.appendChild(p),body.appendChild(button),notifyPlaceholder.appendChild(body)};var nav=document.getElementsByTagName("nav")[0],navHeaders=document.querySelectorAll(".navHeader"),navLinks=document.querySelectorAll(".navLinks"),Step=function(name,lesson,md,answer,success,failure){this.name=name,this.lesson=lesson,this.answer=answer,this.md=md,this.success=success,this.failure=failure,this.content="",this.completed=!1,this.awesome=!0},tutorials={},currentTutorial,Tutorial=function(firstStep,name){this.steps=[firstStep],this.current=this.steps[0],this.title=name,this.won=!1,tutorials[name]=this};Tutorial.prototype.check=function(){var step=currentTutorial.current,success=step.success,failure=step.failure,context=codeMirror,result=step.answer(context,step);result?success(context,step):failure(context,step)},Tutorial.prototype.step=function(step){this.steps.push(step)};var instructions=document.getElementById("lesson");Tutorial.prototype.load=function(step){destroyNotices(),this.current=step,currentTutorial=this,this.generateProgBar(),this.generateButtons(),classie.add(instructions,"material"),this.editorLoad(step.content?step.content:step.md),render(instructions,step.lesson)};var buttonPlaceholder=document.getElementById("buttonPlaceholder");Tutorial.prototype.generateButtons=function(){removal(buttonPlaceholder);var container=document.createElement("div");classie.add(container,"buttons");var twoButtons=document.createElement("div");classie.add(twoButtons,"twoButtons");var reset=document.createElement("div");classie.add(reset,"button"),reset.textContent="Reset",reset.onclick=this.reset;var check=document.createElement("div");classie.add(check,"button"),check.textContent="Check Answer",check.onclick=this.check,twoButtons.appendChild(reset),twoButtons.appendChild(check),container.appendChild(twoButtons),buttonPlaceholder.appendChild(container)};var progBar=document.getElementById("progBar");Tutorial.prototype.generateProgBar=function(){removal(progBar);var lessonProg=document.createElement("li"),lessonProgSpan=document.createElement("span"),bolded=document.createElement("b"),text=document.createTextNode("Lesson Progress");lessonProg.className="lessonProgress",bolded.appendChild(text),lessonProgSpan.appendChild(bolded),lessonProg.appendChild(lessonProgSpan),progBar.appendChild(lessonProg);var self=this;self.steps.forEach(function(step){var li=document.createElement("li"),span=document.createElement("span"),text=document.createTextNode(step.name);li.onclick=function(){self.load(step)},self.current.name===step.name&&classie.add(li,"active"),span.appendChild(text),step.completed&&(complete=document.createElement("span"),classie.add(complete,"icon-check"),classie.add(li,"completed"),span.appendChild(complete)),self.current.name===step.name&&step.completed&&(classie.remove(li,"active"),classie.remove(li,"completed"),classie.add(li,"activeCompleted")),li.appendChild(span),progBar.appendChild(li)})},Tutorial.prototype.next=function(){var index=_.indexOf(this.steps,this.current);index+=1,this.steps[index]?this.steps[index].completed?this.smartLoad():this.load(this.steps[index]):this.smartLoad()},Tutorial.prototype.smartLoad=function(){var step=_.find(this.steps,function(step){return!step.completed});step?this.load(step):this.win()},Tutorial.prototype.editorLoad=function(md){codeMirror.setValue(md),render()},Tutorial.prototype.win=function(){var notWin=!1;if(this.steps.forEach(function(step){step.completed||(notWin=!0)}),!notWin&&!this.won){this.won=!0;var header="Congratulations!!!",body="You've completed all the "+this.title+" challenges.\nWow!",buttonText="I'm awesome!";new Modal(header,body,buttonText).render()}},Tutorial.prototype.reset=function(){var self=currentTutorial;self.current.completed&&(self.current.completed=!1),self.current.content="",self.load(self.current)};var successNotice=_.partial(standardNotice,"success"),failNotice=_.partial(standardNotice,"failure"),begStepOneLesson="# Welcome to the beginner's tutorial!\n In this section, we will cover the basic components that make \n Markdown awesome.\n\n This top section will be the *lesson.*",begStepOneMD="## Interactive result area.\n In this area, you will be able to edit markdown in the left to try and complete the lessons.\n\n Are you ready? Let's get started!\n\n Try typing your name in on line **10.**\n\n When you are ready to submit, press the Check Answer button below!",begStepOne=new Step("Intro",begStepOneLesson,begStepOneMD,function(doc){var input=doc.getLine(9);return input?!0:!1},function(doc){var name=doc.getLine(9),namePlace=document.getElementById("namePlace");namePlace.textContent="Welcome, "+name,standardNotice("success")},function(){standardNotice("failure")}),beginnersTutorial=new Tutorial(begStepOne,"Beginner"),begHeadersLesson="# This is a header.\n In markdown, headers are represented with the *#* symbol. There are six levels of headers:\n # \\# Header 1 \n ## \\## Header 2 \n ### \\### Header 3\n #### \\#### Header 4 \n ##### \\##### Header 5\n ###### \\###### Header 6\n### Objective:\n Try converting line 1 to a **level 3** header using the hashbang (#) method! **Hint:** notice the space between the hashbangs and the header text.",begHeadersMD="Content Heading\n\nBonbon halvah gingerbread tiramisu soufflé halvah candy canes. Brownie tootsie roll danish cake candy canes chocolate cake.\n Candy canes gingerbread jujubes chocolate caramels pudding bonbon dragée. Sugar plum sweet fruitcake macaroon marzipan.\n Dessert candy canes apple pie pie gummies cupcake bonbon gingerbread dragée. Marzipan candy canes biscuit cake apple pie.\n\nBrownie carrot cake caramels jelly. Topping topping lemon drops macaroon chocolate cake.\n Chocolate tiramisu jelly tootsie roll. Fruitcake pastry cheesecake. Icing cake danish.\n Lollipop chocolate carrot cake jelly-o tart topping bear claw macaroon.",begHeaders=new Step("Headers",begHeadersLesson,begHeadersMD,function(doc){var check=/^### \w+/;return check.test(doc.getLine(0))?!0:!1},successNotice,failNotice);beginnersTutorial.step(begHeaders);var begEmphasisLesson="# *Attitude!*\nIn markdown, italics are created with the * (asterix) symbol: \n\n\\**So Deep\\**\n# **Yelling!**\nBold words are created with two asterix symbols: \n\n\\*\\***So Powerful**\\*\\*\n\n**NOTE:** Do not add a space between the asterix and the word!\n### Objective:\n\nTry adding italics to each occurence of the word attitude in the text, and bolding every occurence of the word BOLD!\n\n**Hint:** don't forget to add the asterix symbols to both sides of the word!",begEmphasisMD="Cupcake cookie BOLD gingerbread. Fruitcake cupcake wafer. Attitude. Icing cake danish.\nHalvah halvah croissant cheesecake. Attitude. Lemon drops cotton candy BOLD jelly beans chupa chups halvah.",begEmphasis=new Step("Emphasis",begEmphasisLesson,begEmphasisMD,function(doc){var input=doc.getValue();input=input.replace(/\./g,"");var attitude=/\*Attitude\*/g,bold=/\*\*BOLD\*\*/g,foundA=input.match(attitude),foundB=input.match(bold);return foundA&&foundB&&2===foundA.length&&2===foundB.length?!0:!1},successNotice,failNotice);beginnersTutorial.step(begEmphasis);var begLinesLesson="# Lines\nYou can add a line break by adding two spaces at the end of a line.\nSimply pressing enter will continue the text on the current line. To create\na new paragraph, press enter twice.\n### Objective:\nThere is no task in this lesson. Play with the markdown on the left to get\na feel for how it works!",begLinesMD="This is a single line style of text\nseperated in markdown by a new line but not in the rendered output.\n\nNotice the extra space it takes to make a new paragraph.\n\nAdding two spaces at the end of a line...  \n...will create a new line in the same paragraph.",begLines=new Step("Lines",begLinesLesson,begLinesMD,function(){return!0},successNotice,failNotice);beginnersTutorial.step(begLines);var begListsLesson="# Lists\n Making lists in markdown is as simple as creating them in a typical word document:\n 1. \n 2. \n 3. \n\n You can also make unordered lists using the format - A:\n\n - A \n - B \n - C \n### Objective:\n\n Try to convert the text to match this: \n ## TODO\n 1. Learn Markdown\n     - Complete all the tutorials\n     - Master all the techniques\n     - Have fun\n 2. ???\n 3. Profit.\n\n **Hint:** To create a sublist, indent four spaces (spaces indicated by dots):\n\n1. Learn Markdown\n\n....- Complete all the tutorials\n\nDon't forget to add a space between the bullet point and the content!",begListsMD="## TODO\nLearn Markdown\nComplete all the tutorials\nMaster all the techniques\nHave fun\n???\nProfit.",begLists=new Step("Lists",begListsLesson,begListsMD,function(doc){var list=/(## TODO\n)(1. \w+\s\w+\n)(( {4}- (\w+\s)+){3})(2. .+\n)(3. \w+\.)/g;return list.test(doc.getValue())?!0:!1},successNotice,failNotice);beginnersTutorial.step(begLists);var begLinksLesson="# Links\nAdding html links to your content can help add a strong backbone to \nyour content. Adding links in [Markdown](http://spec.commonmark.org/0.18/#) \nis very intuitive: \n\n \\[Text to display](http://www.content.com)\n\n For example, to get a link to [Google](https://www.google.com) like this, type:\n\n \\[Google](https://www.google.com)\n### Objective:\nTry creating a link to 'https://www.facebook.com' with a placeholder text that says 'Facebook' on line 1!",begLinksMD="",begLinks=new Step("Links",begLinksLesson,begLinksMD,function(doc){var check=/\[facebook\]\(https\:\/\/www\.facebook\.com\)/g;return check.test(doc.getLine(0).toLowerCase())?!0:!1},successNotice,failNotice);beginnersTutorial.step(begLinks);var begCodeLesson="# Code\n Adding code blocks to your content is useful if you are a developer of some sort:\n\n```javascript\nfunction sum () {\n    /**\n    * Add all values\n    * @param {...toAdd} Number - All numbers to add\n    * @return {Total} Number - The result\n    */\n\n    var args = Array.prototype.slice.call(arguments),\n        sum = 0;\n    args.forEach(function (e) { sum += e });\n    return sum;\n}\n```\n\nCool, huh?\n\nYou can make these code blocks by surrouding your content with ``` :\n\n\\```  \nSome code  \n\\```\n### Objective:\nCreate a code block that contains the word 'code'\n\n**Hint:** it will take **3** lines to properly do this challenge.",begCodeMD="",begCode=new Step("Code",begCodeLesson,begCodeMD,function(doc){var input=doc.getValue();input=input.toLowerCase(),input=input.replace(/\n/g,"");var check=/```code```/g;return check.test(input)?!0:!1},successNotice,failNotice);beginnersTutorial.step(begCode);var begBlockquotesLesson="# Blockquotes\nFound a cool new quote about Einstein being a marine?  \nInclude it in your\ncontent using blockquotes! To create a blockquote, simply prepend each line with >:\n\n\\> Blockquotes could be used to show customer testimonies,  \n\\> for example. That would definitely increase sales.  \n\nRenders to:\n\n> Blockquotes could be used to show customer testimonies for example. That would definitely increase sales.\n### Objective:\nConvert the text into a blockquote!\n\n**Hint:** Don't forget to add the '>' symbol to blank lines!",begBlockquotesMD="Cupcake ipsum dolor. Sit amet cookie gummi bears I love cupcake bonbon I love.\n\nCandy cotton candy cotton candy pastry. I love icing danish sweet roll jujubes.\n\nIce cream bonbon bonbon soufflé. Oat cake macaroon dragée cotton candy croissant.\n\nTopping cookie. Chocolate sesame snaps cake toffee tootsie roll bonbon gingerbread pudding icing.",begBlockquote=new Step("Blockquote",begBlockquotesLesson,begBlockquotesMD,function(doc){var good=!0,check=/>/;return doc.eachLine(function(handle){var line=handle.text;line=line.replace(/\n/g,""),check.test(line)||(good=!1)}),good},successNotice,failNotice);beginnersTutorial.step(begBlockquote);var begDividerLesson="# Divider\nYou can easily divide your content by typing in three or more \n\n\\--- hyphens \n\n ---\n\n\\*** asterisks \n\n ***\n\n\\___ underscores \n\n ___\n### Objective:\n Put a divider between each paragraph!\n\n**Hint:** Edit lines 3, 7, and 11",begDividerMD="Cupcake ipsum dolor. Sit amet marshmallow dessert powder. Tootsie roll gummies sesame snaps. Soufflé gummi bears gummi bears.\n\n\n\nFruitcake dessert bear claw jujubes. Jujubes lemon drops I love pastry wafer pastry. I love I love marshmallow muffin gummies I love. Tiramisu chocolate cake topping I love ice cream cupcake danish tootsie roll.\n\n\n\nChocolate cake I love brownie chocolate cake donut chocolate. Marzipan tootsie roll cheesecake ice cream icing. Sugar plum biscuit macaroon chocolate muffin cupcake wafer bonbon. Powder tiramisu I love ice cream donut marzipan I love marzipan.\n\n\n\nJelly dragée wafer jujubes pudding icing bonbon chocolate lemon drops. Muffin chocolate bar chupa chups icing topping cupcake. Jelly beans powder I love bear claw carrot cake I love marshmallow caramels gummies.",begDivider=new Step("Divider",begDividerLesson,begDividerMD,function(doc){var good=!0,lines=[];lines.push(doc.getLine(2),doc.getLine(6),doc.getLine(10));var check=/(\*|_|-){3,}/;return lines.forEach(function(e){e=e.replace(/\n/g,""),check.test(e)||(good=!1)}),good},successNotice,failNotice);beginnersTutorial.step(begDivider);var htmlStepOneLesson="# Welcome to the HTML tutorial!\n In this section, we will cover inline html in markdown.\n\n This top section will be the *lesson.*",htmlStepOneMD="## Interactive result area.\n In this area, you will be able to edit markdown in the left to try and complete the lessons.\n\n Are you ready? Let's get started!\n\n Try typing your name in on line **10.**\n\n When you are ready to submit, press the Check Answer button below!",htmlStepOne=new Step("Intro",htmlStepOneLesson,htmlStepOneMD,function(doc){var input=doc.getLine(9);return input?!0:!1},function(doc){var name=doc.getLine(9),namePlace=document.getElementById("namePlace");namePlace.textContent="Welcome, "+name,standardNotice("success")},failNotice),htmlTutorial=new Tutorial(htmlStepOne,"HTML"),htmlHeaderLesson="# Headers\nCreating inline html in markdown is easy!\n\nTo create a header, use the following syntax:\n# \\<h1>A level 1 header!\\</h1>\n## \\<h2>A level 2 header!\\</h2>\n### \\<h3>A level 3 header!\\</h3>\n#### \\<h4>A level 4 header!\\</h4>\n##### \\<h5>A level 5 header!\\</h5>\n###### \\<h6>A level 6 header!\\</h6>\n### Objective:\nOn line 1, make a level 2 header using the html tags!",htmlHeaderMD="",htmlHeader=new Step("Headers",htmlHeaderLesson,htmlHeaderMD,function(doc){var check=/<h2>.*<\/h2>/;return check.test(doc.getLine(0))?!0:!1},successNotice,failNotice);htmlTutorial.step(htmlHeader,"Headers");var htmlEmphasisLesson="# Emphasis\nIn html, italics are created with\n\n\\<em>*Content*\\</em>\n\nand you can bold elements with\n\n\\<strong>**Content**\\</strong>\n\nLike with markdown, these are combinable:\n\n\\<strong>\\<em> __*Content*__ \\</em>\\</strong>\nor \\<em>\\<strong> _**Content**_ \\</strong>\\</em>\n### Objective:\nBoldtalicize line 1 with the html method!",htmlEmphasisMD="Cupcake ipsum dolor sit amet gummi bears. Sweet cupcake topping.",htmlEmphasis=new Step("Emphasis",htmlEmphasisLesson,htmlEmphasisMD,function(doc){var check=/(<em><strong>.*<\/strong><\/em>|<strong><em>.*<\/em><\/strong>)/;return check.test(doc.getLine(0))?!0:!1},successNotice,failNotice);htmlTutorial.step(htmlEmphasis);var htmlSpanLesson='# Span\nThe previous two lessons are useful for understanding inline html tags,\nbut it is much easier to use the native markdown bindings to generate\ncontent, which begs the question *why use html tags?*\n\nHaving custom html tags on your content means that you can create specialized\nuse cases. For example, let\'s say we have css for making text red:\n````\n.red {\n    color: #F44336;\n}\n````\nThen we could \\<span class="red"> <span class="red">make red text!</span> \\</span>\n### Objective:\nMake the words "red cheesecake" red!',htmlSpanMD="Cupcake ipsum dolor sit. Amet sweet pastry marzipan halvah I love. Soufflé I love bear claw.  \nCroissant marzipan tart icing lemon drops red cheesecake soufflé sweet muffin.",htmlSpan=new Step("Span",htmlSpanLesson,htmlSpanMD,function(doc){var check=/.*<span class\=("|')red("|')>red cheesecake<\/span>.*/;return check.test(doc.getLine(1))?!0:!1},successNotice,failNotice);htmlTutorial.step(htmlSpan);var htmlInfiniteLesson="# Endless possibilities\nYou can use HTML tags however you wish. A full overview of html tags\nand classes is beyond the scope of these tutorials. I encourage you\nto spend some time with markdown to learn its potential!",htmlInfiniteMD="# Thank you...\n...for doing this tutorial. I hope it has helped you get used to\nthe wonderful language of Markdown!\n\nCheck out the playground for an interctive cheatsheet and the\nreferences section for more information about Markdown.",htmlInfinite=new Step("Infinite",htmlInfiniteLesson,htmlInfiniteMD,function(){return!0},successNotice,failNotice);htmlTutorial.step(htmlInfinite);var intStepOneLesson="# Welcome to the intermediate user's tutorial!\n In this section, we will cover some more complex markdown concepts.\n\n This top section will be the *lesson.*",intStepOneMD="## Interactive result area.\n In this area, you will be able to edit markdown in the left to try and complete the lessons.\n\n Are you ready? Let's get started!\n\n Try typing your name in on line **10.**\n\n When you are ready to submit, press the Check Answer button below!",intStepOne=new Step("Intro",intStepOneLesson,intStepOneMD,function(doc){var input=doc.getLine(9);return input?!0:!1},function(doc){var name=doc.getLine(9),namePlace=document.getElementById("namePlace");namePlace.textContent="Welcome, "+name,standardNotice("success")},failNotice),intermediateTutorial=new Tutorial(intStepOne,"Intermediate"),intBoldtalicsLesson="# __*Boldtalics*__\nWhat if you wanted to have be **yelling** your *attitude*?\n\n__*No problem!*__ \n\nIn markdown, you can combine **bold** and *italics* into one:\n\n\\_\\*\\*This Works**_ , and \\_\\_\\*This Works*__\n\nIn fact, you can create bold elements with \\_\\_Bold__ and italics with \\_italics_.\n### Objective:\nTry to boldtalicize each line using any of the expected methods!",intBoldtalicsMD="Boldtalicize me!\n\nAnd me!\n\nAnd me!\n\nMe too!",intBoldtalics=new Step("Boldtalics",intBoldtalicsLesson,intBoldtalicsMD,function(doc){var good=!0,lines=[];lines.push(doc.getLine(0),doc.getLine(2),doc.getLine(4),doc.getLine(6));var check=/(_\*\*.+\*\*_)|(__\*.+\*__)/;return lines.forEach(function(e){e=e.replace(/\n/g,""),check.test(e)||(good=!1)}),good},successNotice,failNotice);intermediateTutorial.step(intBoldtalics);var intHeadersLesson="# More Headers\nWhat if you wanted to add a bit of style to your header?\n\nYou can easily italicize, bold, or boldtalicize any of your headers.\n\nIt works *exactly* how you would expect it to!\n\n\\### \\*Header*\n\\### \\_Header__\n\n\\### \\*\\*Header**\n\\### \\_\\_Header__\n\n\\### \\_\\*\\*Header**_\n\\### \\_\\_\\*Header*__\n### Objective:\nTry giving the headers their respective style!",intHeaderMD="# Bold Header\n#### Italicized Header\n> Cupcake ipsum dolor sit amet candy canes. Marshmallow carrot cake macaroon bear claw.\n>\n> Macaroon oat cake sweet roll fruitcake oat cake cotton candy danish jelly beans.\n>\n> Icing biscuit sesame snaps donut candy canes pastry.\n## Boldtalicized Header\nCupcake ipsum dolor sit amet sweet roll I love. Chocolate bar halvah jelly-o cake.\n\nCaramels I love liquorice jelly chocolate bar dragée.\n\nCandy halvah muffin jelly-o candy canes carrot cake I love sesame snaps jelly.",intHeaders=new Step("Headers",intHeadersLesson,intHeaderMD,function(doc){var boldHead=/(# \*\*.+\*\*)|(# __.+__)/;if(!boldHead.test(doc.getLine(0).replace(/\n/,"")))return!1;var italicHead=/(#### \*.+\*)|(#### _.+_)/;if(!italicHead.test(doc.getLine(1).replace(/\n/,"")))return!1;var boldtalicHead=/(## _\*\*.+\*\*_)|(## __\*.+\*__)/;return boldtalicHead.test(doc.getLine(7).replace(/\n/,""))?!0:!1},successNotice,failNotice);intermediateTutorial.step(intHeaders);var intBlockquotesLesson="# More Blockquotes\nYou can add everything we've learned so far to blockquotes.\n\nNotice how lines in the same paragraph don't need to have a > symbol!\n\nIf you want to add a new paragraph, however, you must place a > on the blank line.\n### Objective:\n\nTry to boldtalicize the header of the blockquote!",intBlockquotesMD="> # Cupcake Cheesecake\n>Cupcake ipsum dolor sit amet cheesecake. Chupa chups I love powder chocolate cake danish sesame snaps.  \nDragée I love carrot cake. Gingerbread chocolate bar chupa chups icing sugar plum.\n>\n>Chocolate bar dessert sweet roll icing. Dragée chocolate bar sweet lollipop cotton candy cake.  \nCroissant jelly beans muffin gummi bears muffin sesame snaps I love gummi bears. I love pudding tootsie roll jelly beans cake.",intBlockquotes=new Step("Blockquotes",intBlockquotesLesson,intBlockquotesMD,function(doc){var check=/> # (__\*.+\*__)|(_\*\*.+\*\*_)/;return check.test(doc.getLine(0))?!0:!1},successNotice,failNotice);intermediateTutorial.step(intBlockquotes);var intImagesLesson='# Images\nAdding images is very similar to adding links to your content!\n\nThe format looks like this:\n\n\\!\\[optional alt-text]\\(image source \\"Optional Image Title")\n\n\n\nThe image source can be relative:\n\nassets/images/myimage.jpg\n\nor a direct link to a web image:\n\nhttp://www.somesite.com/assets/images/anImage.png\n### Objective:\nOn line 3, add an image of Prince Magnum to the images!\n\n**Note:** Image source is assets/images/princeMagnum.jpg',intImagesMD='![mystery-machine](assets/images/mysteryMachine.jpg "Mystery Machine")\n![big-bad-wolf](assets/images/wolf.jpg)\n',intImages=new Step("Images",intImagesLesson,intImagesMD,function(doc){var check=/\!\[.*\]\(assets\/images\/princeMagnum\.jpg( ".*")*\)/;return check.test(doc.getLine(2))?!0:!1},successNotice,failNotice);intermediateTutorial.step(intImages);var intTestLesson="# _**Objective**_\nRemake *everything* you see here (including the above header and this text), as you see it!\n> ## Header 2 blockquote\n> ---\n> Some important text about *life*.\n>\n> ![](assets/images/princeMagnum.jpg)\n> ### **Header 3 bolded**\n> 1. An *important* list of items!\n> 2. I love markdown!\n>     - It is great!\n\n**Note:** your answer should be exactly 13 lines long",intTestMD="",intTest=new Step("Test",intTestLesson,intTestMD,function(doc){var line1=/# (_\*\*Objective\*\*_|__\*Objective\*__)/;if(!line1.test(doc.getLine(0)))return!1;var line2=/Remake (\*everything\*|_everything_) you see here \(including the above header and this text\), as you see it!/;
if(!line2.test(doc.getLine(1)))return!1;var line3=/> ## Header 2 blockquote/;if(!line3.test(doc.getLine(2)))return!1;var line4=/> (-{3,}|_{3,}|\*{3,})/;if(!line4.test(doc.getLine(3)))return!1;var line5=/> Some important text about (\*life\*\.|_life_\.|\*life\.\*|_life\._)/;if(!line5.test(doc.getLine(4)))return!1;var line6=/>\s*/;if(!line6.test(doc.getLine(5)))return!1;var line7=/> !\[.*\]\(assets\/images\/princeMagnum\.jpg( ".*")*\)/;if(!line7.test(doc.getLine(6)))return!1;var line8=/ ### \*\*Header 3 bolded\*\*/;if(!line8.test(doc.getLine(7)))return!1;var line9=/> 1\. An \*important\* list of items!/;if(!line9.test(doc.getLine(8)))return!1;var line10=/> 2\. I love markdown!/;if(!line10.test(doc.getLine(9)))return!1;var line11=/>( ){4,}- It is great!/;if(!line11.test(doc.getLine(10)))return!1;var line13=/\*\*Note:\*\* your answer should be exactly 13 lines long/;return line13.test(doc.getLine(12))?!0:!1},successNotice,failNotice);intermediateTutorial.step(intTest);