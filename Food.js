para = document.getElementsByClassName("paras");

iButton = document.getElementsByClassName("textButton");
rButton = document.getElementsByClassName("rTextButton");

for (var i = 0; i< iButton.length; i++){
    iButton[i].addEventListener('click', onButtonClick);
}

for (var i = 0; i< iButton.length; i++){
    rButton[i].addEventListener('click', onRButtonClick);
}


rButton.addEventListener("click", onRButtonClick);

function onButtonClick(){
    console.log("hi");

    for (var p= 0; p < para.length; p++){
        para[p].style.fontSize = "2.0em";
        para[p].style.lineHeight= "1.7em";
    }

}

function onRButtonClick(){
    console.log("working");

    for (var p= 0; p < para.length; p++){
        para[p].style.fontSize = "1.0em";
        para[p].style.lineHeight= "1.5em";
    }
}

