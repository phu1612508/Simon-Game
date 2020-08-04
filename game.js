var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

// nhận key để bắt đầu
$(document).keypress(function(key) {
  if (!started && key.key == "a") {
    $("#level-title").html("Level " + level);
    nextSequence();
    started = true;
  }
});

// Nhận button click
$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playMusic(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

// kiếm tra người dùng chọn đúng k
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    if (gamePattern.length == userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playMusic("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").html("Game Over, Press A Key to Restart");
    startOver();
  }

}

// hàm phát sinh nút tiếp theo
function nextSequence() {
  userClickedPattern = [];
  level += 1;
  $("#level-title").html("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  flash(randomChosenColour);
  playMusic(randomChosenColour);

}

// hiệu ứng nháy
function flash(color) {
  $("#" + color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

// phát âm thanh
function playMusic(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

// hiệu ứng khi ấn button
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// reset thông số khi game kết thúc
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
