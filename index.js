var r;
r=(Math.random())*6;
var randomNumber1=Math.floor(r+1);
var randomDiceImage="dice"+ randomNumber1 +".png";
var randomImage="images/"+ randomDiceImage+ " ";
var image1=document.querySelector("img.img1");
image1.setAttribute("src", randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+ randomNumber2 +".png";
var randomImage2="images/"+ randomDiceImage2 + " ";
var image2=document.querySelector("img.img2");
image2.setAttribute("src", randomImage2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=" 🏁 player 1 wins!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="player 2 wins!  🏁 ";

}
else
document.querySelector("h1").innerHTML="Draw";
