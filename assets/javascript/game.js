	
$(document).ready(function(){

    var goal;
    var crystalsNum;
    var win = 0;
    var losses = 0;
    var score = 0;

    function startOver() {
        score = 0;

        goal = Math.floor(Math.random() * 100 )+ 1;
        console.log("goal: " + goal);

        $("#goal").html(goal);
        $("#score").html(score);
    }

    function newcrystalNum(){
        crystalsNum = Math.floor(Math.random() * 12 )+ 1;
    }

    var crystalsimgUrl =["assets/images/CrystalGayle.jpg", "assets/images/CrystalBernard.jpg", "assets/images/CrystalBowersox.jpg", "assets/images/CrystalRenn.jpg"];

    for (var i = 0; i < crystalsimgUrl.length; i++) {
        var crystalsImg = $("<img>"); // creates variable crystalsImg, then adds various attributes and classes
        crystalsImg.attr("src", crystalsimgUrl[i]); // REMEMBER THIS IS THE ONLY THING THAT IS DIFFERENT FOR EACH (other than random #)
        crystalsImg.addClass("crystal-image");
        newcrystalNum();
        crystalsImg.attr("data-crystalvalue", crystalsNum);
        // WTF am I doing?
            var crystalsNames = ["Crystal Gayle", "Crystal Bernard", "Crystal Bowersox", "Crystal Renn"];
            for (var n = 0; n < 2; n++){
            var targetName = crystalsNames[n];
            }
        crystalsImg.attr("title", targetName);


        $("#crystals").append(crystalsImg); // adds the Crystals one after the other to the #crystals HTML element
        
    }

    startOver();

    $(".crystal-image").on("click", function() { // ok
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        score	+= crystalValue;
        console.log(score);
        $("#score").html(score);

        if (goal === score) {
            win++
            $("#wins").html("Wins: " + win);
            startOver();
        }

        if ( goal < score){
            losses++
            $("#losses").html("Losses: " + losses);
            startOver();
        }
    });

});