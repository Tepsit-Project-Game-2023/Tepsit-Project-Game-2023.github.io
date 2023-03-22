$(document).ready(function () {

    var canvas = $(".gameContainer");
    var ctx = canvas.getContext("2d");
    
    var imgTitle = $("#imgTitle");

    //blur the div gameContainer on load 
    gameContainer.css("filter", "blur(10px)");

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