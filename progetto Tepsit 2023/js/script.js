$(document).ready(function () {
    //prewiew images
    var gameContainer = $(".gameContainer");
    var imgTitle = $("#imgTitle");
    var title = $("#title");

    //game buttons
    var settingButton = $("#settingButton");
    var buildButton = $("#buildButton");
    var resourcesBarFiller = $("#resourcesBarFiller");
    var opacityBackgroundBarFiller = $("#opacityBackgroundBarFiller");
    
    //blur the gameContainer on load 
    gameContainer.css("filter", "blur(5px)");
    //hide all the game buttons
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

    //hide all the game buttons
    function hideAllGameButtons() {
        settingButton.css("opacity", "0");
        buildButton.css("opacity", "0");
        resourcesBarFiller.css("opacity", "0");
        opacityBackgroundBarFiller.css("opacity", "0");
    }

    //show all the game buttons
    function showAllGameButtons() {
        settingButton.animate({
            opacity: "1",
        }, 500);
        buildButton.animate({
            opacity: "1",
        }, 500);
        resourcesBarFiller.animate({
            opacity: "1",
        }, 500);
        opacityBackgroundBarFiller.animate({
            opacity: "0.2",
        }, 500);
    }
    

    //game functions
    var resources = 20000;
    const RESOURCESMAX = 20000;

    //calculate the resources
    // function calculatePercentuageFiler () {
    //     return (resources / RESOURCESMAX) * 100;
    // }
});