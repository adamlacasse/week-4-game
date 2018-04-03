
// document.getElementById("goal").innerHTML = 5 + 6;

// cheat sheet: https://github.com/bavely/week-4-game/blob/master/assets/javascript/game.js

	
$(document).ready(function(){

    // $("p").hide();
    // $("p").fadeIn(1000);

    var goal;
    var score = 0;
    var crystalsNum;
    var win = 0;
    var losses = 0;

    // var audio = new Audio("../week-4-game/assets/images/Computer Mouse.wav");
    // var backGround = new Audio("../week-4-game/assets/images/Soundimage.org.mp3");
    // backGround.loop=true;
    // backGround.play();

    function startOver() {

        score = 0;

        goal = Math.floor(Math.random() * 102 ) + 19;

        $("#goal").html(goal);
        $("#score").html(score);
    }

    function newcrystalNum(){
        crystalsNum = Math.floor(Math.random() * 12 ) + 1;
    }

    // var crystalsimgUrl =["assets/images/black.jpg", "assets/images/red.jpg", "assets/images/blue.jpg", "assets/images/green.jpg"];

    // for (var i = 0; i < crystalsimgUrl.length; i++) {

    //     var crystalsImg = $("<img>");

    //     crystalsImg.attr("src", crystalsimgUrl[i]);

    //     crystalsImg.addClass("crystal-image img-circle");

    //     newcrystalNum();
    //     crystalsImg.attr("data-crystalvalue", crystalsNum);

    //     $("#crystals").append(crystalsImg);
    // }
    startOver();

    $(".crystal").on("click", function() {
        //audio.play();

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        console.log(score);
        $("#score").html("<h3> " + score + "</h3>");

        if (goal === score) {
            win++
            $("#wins").html("<h3> Wins: " + win + "</h3>");
            startOver();
        }

        if (goal < score){
            losses++
            $("#losses").html("<h3> Losses: " + losses + "</h3>");
            startOver();
        }
    });

});

