var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;
$(document).keypress(function(key){
  if(!started &&key.key=="a"){
    $("#level-title").html("Level "+ level);
    nextSequence();
    started=true;
  }
});

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel]==userClickedPattern[currentLevel]) {
    console.log("correct");
    if (gamePattern.length=userClickedPattern.length) {
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  } else {
    console.log("wrong");
  }

}

function nextSequence(){
  userClickedPattern = [];
  level+=1;
  $("#level-title").html("Level "+ level);
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
  playMusic(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length);
});

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}
