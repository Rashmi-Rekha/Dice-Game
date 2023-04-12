
//Function to Change the Player Name
function editName(){
    //Player Name 
    var player1 = "Player 1";
    var player2 = "Player 2";
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change Player2 name");
    
    document.getElementById("p1").innerHTML = player1;
    document.getElementById("p2").innerHTML =  player2 ;
}

function scores(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "dice images/" + randomDiceImage; //dice images/dice1.png - dice images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource2 = "dice images/" + randomNumber2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "dice images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);

//if player 1 wins!
if (randomNumber1 > randomNumber2) {
    var player1 = document.getElementById("p1");
    document.querySelector("h1").innerHTML = ("🎲 Player1 WINS!🎲");
}

//if player 2 wins!
else if (randomNumber2 > randomNumber1) {
    var player2 = document.getElementById("p2");
    document.querySelector("h1").innerHTML = ("🎲 Player2 WINS!🎲" );
}
else {
    document.querySelector("h1").innerHTML = "oops its a Draw!👍";
}
 
}
