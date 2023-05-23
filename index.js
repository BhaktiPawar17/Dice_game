var rn1 = Math.floor(Math.random()*6)+1;
var randomDiceSrc = "dice" + rn1 + ".png";
document.querySelector("#img1").setAttribute("src",randomDiceSrc);

var rn2 = Math.floor(Math.random()*6)+1;
var randomDiceSrc2 = "dice" + rn2 + ".png";
document.querySelector("#img2").setAttribute("src",randomDiceSrc2);

if(rn1 > rn2){
    document.querySelector("h1").innerHTML = "<img src=flag.png height=100 width=100></img>Player 1 Wins";
}
else if(rn1 < rn2){
    document.querySelector("h1").innerHTML = "Player 2 Wins<img src=flag.png height=100 width=100></img>";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}