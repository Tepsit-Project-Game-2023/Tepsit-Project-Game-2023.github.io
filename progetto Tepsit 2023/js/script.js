$(document).ready(function () {

    var canvas = $(".gameContainer").get(0);    
    var ctx = canvas.getContext("2d");
    
    var imgTitle = $("#imgTitle");

    //blur the div gameContainer on load 
    ctx.css("filter", "blur(10px)");

    //onclick toogle blur
    ctx.click(function () {
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