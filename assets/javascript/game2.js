
// document.getElementById("goal").innerHTML = 5 + 6;
	
$(document).ready(function(){

    var goal = 0;
    var score = 0;
    var gayleNum = 0;
    var bernardNum = 0;
    var rennNum = 0;
    var bowersoxNum = 0;
    var win = 0;
    var losses = 0;

    // produce a random number for the goal ========================================
    goal = Math.floor((Math.random() * 25) + 1);
    $("#goal").html(goal);

    // Assigning random numbers to the Crystals ====================================

    // produce a random number for gayleNum
    gayleNum = Math.floor((Math.random() * 10) + 1);
    console.log("gayleNum: " + gayleNum);

    // produce a random number for bernardNum
    bernardNum = Math.floor((Math.random() * 10) + 1);
    console.log("bernardNum: " + bernardNum);

    // produce a random number for rennNum
    rennNum = Math.floor((Math.random() * 10) + 1);
    console.log("rennNum: " + rennNum);

    // produce a random number for bowersoxNum
    bowersoxNum = Math.floor((Math.random() * 10) + 1);
    console.log("bowersoxNum: " + bowersoxNum);
    
    // Map Crystal numbers to click events; push to score variable ==================

    $("#gayleNum").click(goal = goal + gayleNum);
    console.log("goal:" + goal);


});
