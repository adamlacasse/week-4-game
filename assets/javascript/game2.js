	
$(document).ready(function(){

    var goal;
    var crystalsNum;
    var win = 0;
    var losses = 0;
    var score = 0;

    $("#checkBox").click(function(){
        if (this.checked) {
            test = "checked";
            } else {test = "unchecked"}
            console.log("check box: " + test);
        }); 

    var crystalsimgUrl = [
        {src:"assets/images/billyCrystal.jpg", title:"Billy Crystal", diff:test},
        {src:"assets/images/CrystalGayle.jpg", title:"Crystal Gayle", diff:test},
        {src:"assets/images/CrystalBernard.jpg", title:"Crystal Bernard", diff:test},
        {src:"assets/images/CrystalRenn.jpg", title:"Crystal Renn", diff:test},
    ];


    function startOver() {
        score = 0;

        goal = Math.floor(Math.random() * 75);
        console.log("goal: " + goal);

        $("#goal").html(goal);
        $("#score").html(score);
    }

    function newcrystalNum(){
        crystalsNum = Math.floor(Math.random() * 10 ) + 1;
    }

    for (var i = 0; i < crystalsimgUrl.length; i++) {
        var crystalsImg = $("<img>"); 
        newcrystalNum();
        crystalsImg.attr("data-crystalvalue", crystalsNum);
        crystalsImg.addClass("crystal-image");
        crystalsImg.attr("src", crystalsimgUrl[i].src); 
        crystalsImg.attr("alt", crystalsimgUrl[i].title);
        crystalsImg.attr("title", crystalsimgUrl[i].title + " is thinking of  a " + crystalsNum);

            if (crystalsImg.attr("diff") === "checked"){
                crystalsImg.attr("title", crystalsimgUrl[i].title + " is thinking of  a " + crystalsNum);
            } else crystalsImg.attr("title", crystalsimgUrl[i].title);    

        
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