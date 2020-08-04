var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  flash(randomChosenColour);
  playMusic(randomChosenColour);
}

function flash(color){
  $("#"+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playMusic(color){
  var audio= new Audio("sounds/"+color+".mp3");
  audio.play();
}

$(".btn").click(function(){
  var userChosenColour=this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
