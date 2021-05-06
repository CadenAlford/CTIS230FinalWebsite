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
    makeMain(myFood);
}

/*function makeMain(jsonObj){
    theFoods = jsonObj["foods"];

    for (i=0; i < theFoods.length; i++) {

       foodIDiv = document.createElement('div');
       foodImage = document.createElement('img');
       foodLink = document.createElement('p'); 
       
       
       foodImage.src = theFoods[i].foodimage;
       foodImage.alt = theFoods[i].alt;
       foodLink.textContent = theFoods[i].link;

       foodIDiv.appendChild(foodImage);
       foodIDiv.appendChild(foodLink);
       mainC.appendChild(foodIDiv);

       
       

    }
}
*/