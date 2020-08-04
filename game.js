var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;
$(document).keypress(function(key){
  if(!started &&key.key=="a"){
    $("h1").html("Level "+ level);
    nextSequence();
    started=true;
  }
});



function nextSequence(){
  level+=1;
  $("h1").html("Level "+ level);
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

$(document).keypress()
$(".btn").click(function(){
  var userChosenColour=this.id;
  userClickedPattern.push(userChosenColour);
  playMusic(userChosenColour);
  animatePress(userChosenColour);
});

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}
