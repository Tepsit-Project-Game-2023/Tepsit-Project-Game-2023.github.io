$(document).ready(function () {
    var gameContainer = $(".gameContainer");
    var imgTitle = $("#imgTitle");
    
    //blur the canvas gameContainer on load 
    gameContainer.css("filter", "blur(5px)");

    //onclick toogle blur
    gameContainer.click(function () {
        $(this).css("filter", "blur(0px)");
        $("#imgTitle").fadeOut({
            opacity: "0",
        }, 1000);
    });

    imgTitle.click(function () {
        $(gameContainer).css("filter", "blur(0px)");
        $(this).fadeOut({
            opacity: "0",
        }, 1000);
    });
});