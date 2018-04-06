	
$(document).ready(function(){

    var goal;
    var crystalsNum;
    var win = 0;
    var losses = 0;
    var score = 0;

    var crystalsimgUrl = [
        {src:"assets/images/billyCrystal.jpg", title:"Billy Crystal"},
        {src:"assets/images/CrystalGayle.jpg", title:"Crystal Gayle"},
        {src:"assets/images/CrystalBernard.jpg", title:"Crystal Bernard"},
        {src:"assets/images/CrystalRenn.jpg", title:"Crystal Renn"},
    ];
    
    function startOver() {
        score = 0;

        goal = Math.floor(Math.random() * 100);
        console.log("goal: " + goal);

        $("#goal").html(goal);
        $("#score").html(score);
    }

    function newcrystalNum(){
        crystalsNum = Math.floor(Math.random() * 12 )+ 1;
    }

    for (var i = 0; i < crystalsimgUrl.length; i++) {
        var crystalsImg = $("<img>"); 
        crystalsImg.addClass("crystal-image");
        crystalsImg.attr("src", crystalsimgUrl[i].src); 
        crystalsImg.attr("title", crystalsimgUrl[i].title);
        crystalsImg.attr("alt", crystalsimgUrl[i].title);
        newcrystalNum();
        crystalsImg.attr("data-crystalvalue", crystalsNum);
        $("#crystals").append(crystalsImg);        
    }

    startOver();

    $(".crystal-image").on("click", function() { 
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
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