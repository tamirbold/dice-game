//Toglogchiin eeljiig hadgalah huvisagch, 1r toglogch 0, 2r toglogch 1

var activePlayer = 1;

//Toglogchiin tsugluulsan onoog hadgalah huvisagch

var score = [0, 0];

//Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch

var rounnScore = 0;

//Shoonii ali talaaraa buusniig hadagalah huvisagch, 1 - 6 gesen utgiig random-r ugnu

var dice = Math.floor(Math.random() * 6) + 1;

console.log("Dice: " + dice);

//<div class="player-score" id="score-0">43</div>

//document.querySelector("#score-0").textContent = dice;

//document.querySelector("#score-1").innerHTML = "<em> yes </em>";

//Program ajillaj ehelehed

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
