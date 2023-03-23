$(document).ready(function () {
    var gameContainer = $(".gameContainer");
    var imgTitle = $("#imgTitle");
    var title = $("#title");
    var settingButton = $("#settingButton");
    
    //blur the gameContainer on load 
    gameContainer.css("filter", "blur(5px)");
    hideAllGameButtons();

    //onclick toogle blur
    gameContainer.click(function () {
        $(this).css("filter", "blur(0px)");
        imgTitle.fadeOut({
            opacity: "0",
        }, 1000);
        title.fadeOut({
            opacity: "0",
        }, 1000);

        showAllGameButtons();
    });

    imgTitle.click(function () {
        gameContainer.css("filter", "blur(0px)");
        $(this).fadeOut({
            opacity: "0",
        }, 1000);
        title.fadeOut({
            opacity: "0",
        }, 1000);

        showAllGameButtons();
    });
    
    title.click(function () {
        gameContainer.css("filter", "blur(0px)");
        imgTitle.fadeOut({
            opacity: "0",
        }, 1000);
        $(this).fadeOut({
            opacity: "0",
        }, 1000);

        showAllGameButtons();
    });

    function hideAllGameButtons() {
        settingButton.css("opacity", "0");
    }

    function showAllGameButtons() {
        settingButton.fadeIn({
            opacity: "1",
        }, 1000);
    }
});