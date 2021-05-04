para = document.getElementsByClassName("paras");

iButton = document.getElementsByClassName("textButton");
rButton = document.getElementsByClassName("rTextButton");

iButton.addEventListener("click",onButtonClick);
rButton.addEventListener("click", onRButtonClick);

function onButtonClick(){
    paragraph.style.fontSize = "2.0em";
}

function onRButtonClick(){
    para.style.fontSize = "1.0em";
}
