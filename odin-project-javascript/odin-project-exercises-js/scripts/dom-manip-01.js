var pTag = document.createElement("p");
var h3Tag = document.createElement("h3");
var content = document.createElement("div");
var contentHeader = document.createElement("h1");
var contentPara = document.createElement("p");


pTag.style.color = "red";
h3Tag.style.color = "blue";
content.style.border = "solid 4px black";
content.style.backgroundColor = "pink";


pTag.textContent = "Hey im red!";
h3Tag.textContent = "Hey im a blue h3!";
contentHeader.textContent = "I'm a DIV";
contentPara.textContent = "ME TOO!";


container = document.querySelector("#container");
contentArray = [contentHeader,contentPara];
containerArray = [pTag,h3Tag,content]

for(i = 0; i < contentArray.length; i++){
    content.appendChild(contentArray[i]);
}
for(i = 0; i < containerArray.length; i++){
    container.appendChild(containerArray[i]);
}