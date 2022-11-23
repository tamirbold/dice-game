//Toglogchiin eeljiig hadgalah huvisagch, 1r toglogch 0, 2r toglogch 1

var activePlayer = 0;

//Toglogchiin tsugluulsan onoog hadgalah huvisagch

var score = [0, 0];

//Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch

var rounnScore = 0;

//<div class="player-score" id="score-0">43</div>

//document.querySelector("#score-0").textContent = dice;

//document.querySelector("#score-1").innerHTML = "<em> yes </em>";

//Program ajillaj ehelehed

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  //Shoonii ali talaaraa buusniig hadagalah huvisagch, 1 - 6 gesen utgiig random-r ugnu
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //Shoonii zurgiir web deer gargaj irne
  diceDom.style.display = "block";

  //Buusan shoonii toonii zurgiig web deer haruulna
  diceDom.src = "dice-" + diceNumber + ".png";

  //Buusan too ni 1s yalgaatai bhiin bol idevhitei toglogchiin eeljiin onoog nemegduulne.
  if (diceNumber !== 1) {
    rounnScore = rounnScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = rounnScore;
  } else {
    //Toglogchiin onoog 0 bolgono.
    rounnScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    //shoo 1 buuval idevhitei toglogchiig solih
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // if(activePlayer === 0){
    //   activePlayer = 1;
    // }else{
    //   activePlayer = 0;
    // }

    //active toglogchiin temdeglegee ulaan tsegiig zuuh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //shoog tur alga bolgoh
    diceDom.style.display = "none";
  }
});
