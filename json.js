mainC = document.getElementById("maincontent");

requestURL = 'https://cadenalford.github.io/CTIS230FinalWebsite/Foods.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload =
function(){
    myFood = request.response;
    console.log(myFood);
    makeMain(myFood);
}

function makeMain(jsonObj){
    theFoods = jsonObj["foods"];

    for (i=0; i < theFoods.length; i++) {
       
       
       foodIDiv = document.createElement('div');
       foodImage = document.createElement('img');
       foodP = document.createElement('p'); 
       foodLink = document.createElement('a');
       
       
       foodIDiv.classList.add("fi");
       foodImage.classList.add("images");

       foodImage.src = theFoods[i].foodimage;
       foodImage.alt = theFoods[i].alt;
       foodImage.style.width = theFoods[i].width;


       foodLink.textContent = theFoods[i].alt;
       foodLink.href = theFoods[i].link;

       
       


       
       foodIDiv.appendChild(foodImage);
       foodP.appendChild(foodLink); 
       foodIDiv.appendChild(foodP);
       mainC.appendChild(foodIDiv);
       
       
       
       

    }
}
