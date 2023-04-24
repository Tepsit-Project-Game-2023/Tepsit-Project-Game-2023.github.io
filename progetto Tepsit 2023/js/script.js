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
    var progressBar = $("#progressBar");
    var gameMenuButton = $(".gameMenuButton");
    
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
        progressBar.css("opacity", "0");
        gameMenuButton.css({"opacity": "0", "z-index": "-1"});
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
            opacity: "0.3",
        }, 500);
        progressBar.animate({
            opacity: "1",
        }, 500);
    }

    // game functions
    var progress = $("#progress");
    var resourcesValue = $("#resourcesValue");
    var resources = 10000;
    const RESOURCESMAX = 20000;

    // calculate the resources
    function calculatePercentuageFiler () {
        return (resources / RESOURCESMAX) * 100;
    }

    resourcesValue.html(resources);
    $("#progress").css("width", calculatePercentuageFiler() + "%");

    var buildMenu = $("#buildMenu");
    var openClose = false;
    buildButton.click(function () {
        if (!openClose) {
            openBuildMenu();
            openClose = true;
        }
        else {
            closeBuildMenu();
            openClose = false;
        }

        if (openCloseSetting) { //if one menu is already opened close this one and open the clicked one
            closeSettingMenu();
            openBuildMenu();
            openCloseSetting = false;
            openClose = true;
        }
    });

    var settingMenu = $("#settingMenu");
    var openCloseSetting = false;
    settingButton.click(function () {
        if (!openCloseSetting) {
            openSettingMenu();
            openCloseSetting = true;
        }
        else {
            closeSettingMenu();
            openCloseSetting = false;
        }

        if (openClose) {
            closeBuildMenu();
            openSettingMenu();
            openClose = false;
            openCloseSetting = true;
        }
    });

    var buyButton = $(".btn");
    buyButton.eq(0).click(function () { //build small factory
        if (!haveEnoughResources(2500)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = $(document.createElement("img"));
            clonedImage.attr("src", "../immagini/gameBuilds/basicFactory.png");
            clonedImage.addClass("placeable");
            clonedImage.appendTo("center");
            closeBuildMenu();
            
            addBuildings(clonedImage, 2500);
        }
    });
    buyButton.eq(1).click(function () {//build medium factory
        let midFactory = $("#midFactory");
        if (!haveEnoughResources(7000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = midFactory.clone().appendTo("body");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 7000);
        }
    });

    buyButton.eq(2).click(function () { //build big factory
        let bigFactory = $("#bigFactory");
        if (!haveEnoughResources(15000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = bigFactory.clone().appendTo("body");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 15000);
        }
    });

    buyButton.eq(3).click(function () { //build big factory
        let coffeShop = $("#coffeShop");
        if (!haveEnoughResources(1000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = coffeShop.clone().appendTo("body");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 1000);
        }
    });

    function haveEnoughResources (costs) {
        return (resources >= costs) ? true : false;
    }

    function openBuildMenu () {
        buildMenu.css({"opacity": 1, "z-index": 5});
    }
    function closeBuildMenu () {
        buildMenu.css({"opacity": 0, "z-index": -1});
    }
    function openSettingMenu () {
        settingMenu.css({"opacity": 1, "z-index": 5});
    }
    function closeSettingMenu () {
        settingMenu.css({"opacity": 0, "z-index": -1});  
    }

    function addBuildings (structure, price) {
        $(document).on("mousemove", function(event) {
            var posX = (event.pageX / $(window).width()) * 100;
            var posY = (event.pageY / $(window).height()) * 100;
            structure.css({
              "left": posX + "%",
              "top": posY + "%"
            });
        });
        gameContainer.click(function () {
            // check if the building is placed on the game container
            //TODO (gaia)
            structure.attr("pointer-events", "auto");
            $(document).off("mousemove");
        });
        resources -= price;
        scaleResources();
    }

    function scaleResources () {
        resourcesValue.html(resources);
        $("#progress").css("width", calculatePercentuageFiler() + "%");
        return;
    }

    //add npc with random movement
    //TODO (gaia)

    $(".placeable").click(function () {
        alert("small factory clicked");
    });
});