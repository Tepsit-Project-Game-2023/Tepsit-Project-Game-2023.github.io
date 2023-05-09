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
    var RESOURCESMAX = 20000;

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
             
            clonedImage.appendTo(".gameContainer");
            closeBuildMenu();
            clonedImage.addClass("placeable");
            addBuildings(clonedImage, 2500);

            let call = showInfo();

           let basicFactoryInterval=setInterval(function() {
                addResources(50);
            }, 5000);//Add resources after 5s
        }
    });
    buyButton.eq(1).click(function () {//build medium factory
        if (!haveEnoughResources(7000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = $(document.createElement("img"));
            clonedImage.attr("src", "../immagini/gameBuilds/midFactory.png");
            clonedImage.appendTo(".gameContainer");

            closeBuildMenu();
            clonedImage.addClass("placeable");
            
            addBuildings(clonedImage, 7000);
            
            let call = showInfo();

            let midFactoryInterval=setInterval(function() {
                addResources(100);
                suca();
              }, 5000);//Add resources after 10s
        }
    });

    buyButton.eq(2).click(function () { //build big factory
        if (!haveEnoughResources(15000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = $(document.createElement("img"));
            clonedImage.attr("src", "../immagini/gameBuilds/bigFactory.png");
            clonedImage.appendTo(".gameContainer");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 15000);

            let call = showInfo();

            let bigFactoryInterval=setInterval(function() {
                addResources(500);
              }, 5000);
        }
    });

    buyButton.eq(3).click(function () { //build coffee shop
        if (!haveEnoughResources(1000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = $(document.createElement("img"));
            clonedImage.attr("src", "../immagini/gameBuilds/coffeHouse.png");
            clonedImage.appendTo(".gameContainer");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 1000);

            let call = showInfo();

            let coffeShopInterval=setInterval(function() {
                addResources(30);
              }, 10000);
        }
    });
    buyButton.eq(4).click(function () { //build pharmacy
        if (!haveEnoughResources(1000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = $(document.createElement("img"));
            clonedImage.attr("src", "../immagini/gameBuilds/pharmacy.png");
            clonedImage.appendTo(".gameContainer");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 1000);

            let call = showInfo();

            let pharmacyInterval=setInterval(function() {
                addResources(30);
              }, 10000);
        }
    });
    buyButton.eq(5).click(function () { //build backery
        if (!haveEnoughResources(1000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = $(document.createElement("img"));
            clonedImage.attr("src", "../immagini/gameBuilds/backery.png");
            clonedImage.appendTo(".gameContainer");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 1000);

            let call = showInfo();

            let coffeShopInterval=setInterval(function() {
                addResources(30);
              }, 10000);
        }
    });

    buyButton.eq(6).click(function () { //build little house
        if (!haveEnoughResources(1200)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = $(document.createElement("img"));
            clonedImage.attr("src", "../immagini/gameBuilds/smallHouse.png");
            clonedImage.appendTo(".gameContainer");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 1000);
          
            let call = showInfo();
        }
    });
    buyButton.eq(7).click(function () { //build a big house
        if (!haveEnoughResources(7000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = $(document.createElement("img"));
            clonedImage.attr("src", "../immagini/gameBuilds/midHouse.png");
            clonedImage.appendTo(".gameContainer");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 1000);
          
            let call = showInfo();
        }
    });
    buyButton.eq(8).click(function () { //build a small castle
        if (!haveEnoughResources(19000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            let clonedImage = $(document.createElement("img"));
            clonedImage.attr("src", "../immagini/gameBuilds/mansion.png");
            clonedImage.appendTo(".gameContainer");
            closeBuildMenu();
            clonedImage.addClass("placeable");

            addBuildings(clonedImage, 1000);
            
            let call = showInfo();
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

            /*left = 435, 436
            right =  1497 436
            bottom = 967 774
            top = 962 99*/

            // let x = event.pageX; 
            // let y = event.pageY;
            // console.log(x, y);
         
        });
        gameContainer.click(function () {
            // check if the building is placed on the game container
            //TODO (gaia)
             $(document).off("mousemove");
           
            return;
        });
        resources -= price;
        scaleResources();
        
        return;
    }

    function scaleResources () {
        resourcesValue.html(resources);
        $("#progress").css("width", calculatePercentuageFiler() + "%");
        return;
    }
    function addResources (value) {
        resourcesValue.html(resources);
        if(resources <= RESOURCESMAX - value ){
            resources+=value;
            scaleResources();
         }
        return;
    }

    //add npc with random movement
    //TODO (gaia)

    function showInfo () {
        $(".placeable").click(function () {
            let info = $(document.createElement("div"));
            info.addClass("clickForInfoObjects");
            info.appendTo(".gameContainer");

            let infoText = $(document.createElement("div"));
            infoText.addClass("clickForInfoObjectsText");
            infoText.html("Click on the object to see the info");
            infoText.appendTo(info);

            let infoText1 = $(document.createElement("div"));
            infoText1.addClass("clickForInfoObjectsText");
            infoText1.html("Click on the object to see the info");
            infoText1.appendTo(info);

            let infoText2 = $(document.createElement("div"));
            infoText2.addClass("clickForInfoObjectsText");
            infoText2.html("Click on the object to see the info");
            infoText2.appendTo(info);
        });
        return;
    }

    //TODO add js to manage click for objects info

});