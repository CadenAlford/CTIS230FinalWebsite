mainC = document.getElementById("maincontent");

requestURL = 'https://cadenalford.github.io/CTIS230FinalWebsite/Foods.json';

request = new XMLHttpRequest();

request.open('GET', requestURL);

request.reponseType = 'json';

request.send();

request.onload =
function(){
    myFood = request.reponse;
    console.log(myFood);
}
