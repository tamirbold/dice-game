//Global variables

var isNewGame;
//Toglogchiin eeljiig hadgalah huvisagch, 1r toglogch 0, 2r toglogch 1
var activePlayer;
//Toglogchiin tsugluulsan onoog hadgalah huvisagch
var scores;
//Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
var rounnScore;

//Find Dice picture from DOM
var diceDom = document.querySelector(".dice");

//Start the game
initGame();

//Program ajillaj ehelehed
function initGame() {
  isNewGame = true;

  activePlayer = 0;
  scores = [0, 0];
  rounnScore = 0;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //Toglogchidiin neriig butsaaj solih
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

//Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    //Shoonii ali talaaraa buusniig hadagalah huvisagch, 1 - 6 gesen utgiig random-r ugnu
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Shoonii zurgiir web deer gargaj irne
    diceDom.style.display = "block";

    //Buusan shoonii toonii zurgiig web deer haruulna
    diceDom.src = "dice-" + diceNumber + ".png";

    //Buusan too ni 1s yalgaatai bhiin bol idevhitei toglogchiin eeljiin onoog nemegduulne.
    if (diceNumber !== 1) {
      rounnScore = rounnScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        rounnScore;
    } else {
      //1 buusan tul toglogchiin eeljiig solih
      switchToNextPlayer();
    }
  } else {
    alert("Game over. Click NEW GAME button");
  }
});

//Hold button event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    //Ug toglogchiin tsugluulsan onoog global onoon deer ni nemj ugnu.
    scores[activePlayer] = scores[activePlayer] + rounnScore;

    //Delgets deer onoog uurchluh
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //Toglogchiig hoson esehiig (onoo ni 100-s ih eseh) shalgah
    if (scores[activePlayer] >= 20) {
      //Togloomiig duussan tuluvt oruulna
      isNewGame = false;

      document.getElementById("name-" + activePlayer).textContent =
        "Winner Player" + (activePlayer + 1);
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      //Toglogchiin eeljiig solino.
      switchToNextPlayer();
    }
  } else {
    alert("Game over. Click NEW GAME button");
  }
});

// Eelj solidog function
function switchToNextPlayer() {
  //Eeljiin onoog 0 bolgoh
  rounnScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // if(activePlayer === 0){
  //   activePlayer = 1;
  // }else{
  //   activePlayer = 0;
  // }

  //active toglogchiin temdeglegee ulaan tsegiig zuuh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //temprory clear dice picture
  diceDom.style.display = "none";
}

//click new game button
document.querySelector(".btn-new").addEventListener("click", initGame);
