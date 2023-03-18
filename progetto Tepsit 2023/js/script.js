$(document).ready(function () {

    var gameContainer = $(".gameContainer");

    //blur the div gameContainer on load 
    gameContainer.css("filter", "blur(10px)");

    //onclick toogle blur
    gameContainer.click(function () {
        $(this).css("filter", "blur(0px)");
        $("#imgTitle").fadeOut({
            opacity: "0",
        }, 1000);
    });

});