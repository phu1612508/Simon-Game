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
$(".btn").click(function(){
  var userChosenColour=this.id;
  userClickedPattern.push(userChosenColour);
  playMusic(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel){
console.log(gamePattern[currentLevel]);
  console.log(userClickedPattern[currentLevel]);
  if (gamePattern[currentLevel]==userClickedPattern[currentLevel]) {
    console.log("correct");
    if (gamePattern.length==userClickedPattern.length) {
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  } else {
    playMusic("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
      $("#level-title").html("Game Over, Press A Key to Restart");
    console.log("wrong");
    startOver();
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



function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}
function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
