var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickd = [];
var lv = 0;
var started = false;
$(".btn").click(function(){
    var userChoose = $(this).attr("id");
    userClickd.push(userChoose);
    playSound(userChoose);
    animatePress(userChoose);
    checkAnswer(userClickd.length-1);
});

$(document).keypress(function(){
    if (!started){
        $("#level-title").text("Level "+ lv );
        nextSquence();
        started = true;
    }

});

function checkAnswer(currentLevel){
    if (userClickd[currentLevel]===gamePattern[currentLevel] ){
        if (gamePattern.length===userClickd.length){
            setTimeout(function(){
                nextSquence();
            },1000);
        }
        
    } else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("may ngu may chet");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }

}



function nextSquence(){
    userClickd = [];
    lv++;
    $("#level-title").text("Level " + lv);
    var number = Math.floor(Math.random()*4);
    var chooseCL = buttonColor[number];
    gamePattern.push(chooseCL);
    $("#" + chooseCL).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(chooseCL);
}



function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
    $("#"+currentColor).removeClass("pressed")
    }, 100);

}


function startOver(){
    lv = 0;
    started = false;
    gamePattern = [];
}





