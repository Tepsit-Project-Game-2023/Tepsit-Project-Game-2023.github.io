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
    var resources = 10000; //starting resources
    var RESOURCESMAX = 20000;

    // calculate the resources
    function calculatePercentuageFiler () {
        return (resources / RESOURCESMAX) * 100;
    }

    resourcesValue.html(resources);
    progress.css("width", calculatePercentuageFiler() + "%");

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
        let smallFactory = $("#smallFactory");
        if (!haveEnoughResources(2500)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            var clonedImage = smallFactory.clone();
            clonedImage.addClass("placeable");
            clonedImage.appendTo(".gameContainer");
             
            closeBuildMenu();
            addBuildings(clonedImage, 2500);

            let call = showInfo();

            let basicFactoryInterval = setInterval(function() {
                addResources(50);
            }, 5000);//Add resources after 5s

            choice.eq(1).on("click", function () {
                clearInterval(basicFactoryInterval);
            });
        }
    });
    buyButton.eq(1).click(function () {//build medium factory
        let midFactory = $("#midFactory");
        if (!haveEnoughResources(7000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            var clonedImage = midFactory.clone();
            clonedImage.addClass("placeable");
            clonedImage.appendTo(".gameContainer");

            closeBuildMenu();
            addBuildings(clonedImage, 7000);
            
            let call = showInfo();

            let midFactoryInterval = setInterval(function() {
                addResources(100);
              }, 5000);//Add resources after 10s

            choice.eq(1).on("click", function () {
                clearInterval(midFactoryInterval);
            });
        }
    });

    buyButton.eq(2).click(function () { //build big factory
        let bigFactory = $("#bigFactory");
        if (!haveEnoughResources(15000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            var clonedImage = bigFactory.clone();
            clonedImage.addClass("placeable");
            clonedImage.appendTo(".gameContainer");

            closeBuildMenu();
            addBuildings(clonedImage, 15000);

            let call = showInfo();

            let bigFactoryInterval = setInterval(function() {
                addResources(500);
              }, 5000);

            choice.eq(1).on("click", function () {
                clearInterval(bigFactoryInterval);
            });
        }
    });

    buyButton.eq(3).click(function () { //build coffee shop
        let coffeShop = $("#coffeShop");
        if (!haveEnoughResources(1250)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            var clonedImage = coffeShop.clone();
            clonedImage.addClass("placeable");
            clonedImage.appendTo(".gameContainer");

            closeBuildMenu();
            addBuildings(clonedImage, 1250);

            let call = showInfo();

            let coffeShopInterval = setInterval(function() {
                addResources(30);
              }, 7500);

            choice.eq(1).on("click", function () {
                clearInterval(coffeShopInterval);
            });
        }
    });
    buyButton.eq(4).click(function () { //build pharmacy
        let pharmacy = $("#pharmacy");
        if (!haveEnoughResources(1250)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            var clonedImage = pharmacy.clone();
            clonedImage.addClass("placeable");
            clonedImage.appendTo(".gameContainer");
            
            closeBuildMenu();
            addBuildings(clonedImage, 1250);

            let call = showInfo();

            let pharmacyInterval = setInterval(function() {
                addResources(40);
              }, 7500);

            choice.eq(1).on("click", function () {
                clearInterval(pharmacyInterval);
            });
        }
    });
    buyButton.eq(5).click(function () { //build backery
        let backery = $("#backery");
        if (!haveEnoughResources(1500)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            var clonedImage = backery.clone();
            clonedImage.addClass("placeable");
            clonedImage.appendTo(".gameContainer");

            closeBuildMenu();
            addBuildings(clonedImage, 1500);

            let call = showInfo();

            let coffeShopInterval = setInterval(function() {
                addResources(60);
              }, 7500);

            choice.eq(1).on("click", function () {
                clearInterval(coffeShopInterval);
            });
        }
    });

    buyButton.eq(6).click(function () { //build little house
        let smallHouse = $("#smallHouse");
        if (!haveEnoughResources(1700)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            var clonedImage = smallHouse.clone();
            clonedImage.addClass("placeable");
            clonedImage.appendTo(".gameContainer");

            closeBuildMenu();
            addBuildings(clonedImage, 1700);
          
            let call = showInfo();

            let smallHouseInterval = setInterval(function() {
                removeResources(25);
              } , 7000);

            choice.eq(1).on("click", function () {
                clearInterval(smallHouseInterval);
            });
        }
    });
    buyButton.eq(7).click(function () { //build a big house
        let midHouse = $("#midHouse");
        if (!haveEnoughResources(5000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            var clonedImage = midHouse.clone();
            clonedImage.addClass("placeable");
            clonedImage.appendTo(".gameContainer");

            closeBuildMenu();
            addBuildings(clonedImage, 5000);
          
            let call = showInfo();

            let midHouseInterval = setInterval(function() {
                removeResources(60);
              } , 5000);

            choice.eq(1).on("click", function () {
                clearInterval(midHouseInterval);
            });
        }
    });
    buyButton.eq(8).click(function () { //build a small castle
        let mansion = $("#mansion");
        if (!haveEnoughResources(15000)) {
            alert("You don't have enough resources!!");
            return;
        }
        else {
            var clonedImage = mansion.clone();
            clonedImage.addClass("placeable");
            clonedImage.appendTo(".gameContainer");

            closeBuildMenu();
            addBuildings(clonedImage, 15000);
            
            let call = showInfo();

            let mansionInterval = setInterval(function() {
                removeResources(750);
              } , 12000);

            choice.eq(1).on("click", function () {
                clearInterval(mansionInterval);
            });
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
        let posX;
        let posY;
        $(document).on("mousemove", function(event) {
            
            posX = event.pageX;
            posY = event.pageY;
           
            structure.css({
              "left": posX - 270 + "px",
              "top": posY + "px"
            });                                                    
        });     
        gameContainer.click(function () {
             if(posX <= ($(document).width() - gameContainer.width()) / 2  ||  
                posX > ($(document).width() - gameContainer.width()) / 2 + gameContainer.width()) {
               alert("Non puoi costruire in questo punto"); 
             }
             else{
                $(document).off("mousemove");
             }
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
        if(resources <= RESOURCESMAX - value ) {
            resources += value;
            scaleResources();
         }
        return;
    }
    
    function removeResources (value) {
        resourcesValue.html(resources);
        if(resources - value >= 0){ //if you dont have enough resources to pay you lose
            resources -= value;
            scaleResources();
        }
        else {
            alert("Game Over!!!");
        }
        return;
    }

    var infoDivGeneral= $(".clickForInfoObjects");
    var infoForObjects = $("#infoForObjects");
    var deleteMenuObjects = $("#deleteMenuObjects");

    var removeId;

    function showInfo () {
        $(".placeable").dblclick(function () {
            removeId = $(this).attr("id");

            upgradeButton.hide();

            if ($(this).is("#smallFactory")) { //check what has been clicked then show the corrispondent menu
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                infoForObjects.contents().not("button").remove();
                infoForObjects.append('<div style="text-align: center; color:#222; font-weight: bold;"> <h1 style="font-family: "Press Start 2P", cursive;">Small Factory</h1> <p style="color:#030f10;">A fantastic factory, just a little small buit its good to start the game!!!</p> <p style="color: #030f10;">It produces about 5 coins a second, and you will receive your payment every 5 seconds!!!</p></div>')
            }
            else if ($(this).is("#midFactory")) {
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                infoForObjects.contents().not("button").remove();
                infoForObjects.append('<div style="text-align: center; color:#222; font-weight: bold;"> <h1 style="font-family: "Press Start 2P", cursive;">Medium Factory</h1> <p style="color:#030f10;">A great factory,we are starting to get richer, that really good</p> <p style="color: #030f10;">It produces about 10 coins a second, and you will receive your payment every 5 seconds!!!</p></div>');
            }
            else if ($(this).is("#bigFactory")) {
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                infoForObjects.contents().not("button").remove();
                infoForObjects.append('<div style="text-align: center; color:#222; font-weight: bold;"> <h1>Big Factory</h1> <p style="color:#030f10;">A perfect factory, now we can really consider us rich!!</p> <p style="color: #030f10;">It produces about 100 coins a second, and you will receive your payment every 5 seconds!!!</p> </div>')
            }
            else if ($(this).is("#coffeShop")) {
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                infoForObjects.contents().not("button").remove();
                infoForObjects.append('<div style="text-align: center; color:#222; font-weight: bold;"> <h1>Coffe Shop</h1> <p style="color:#030f10;">Really chill place, that you cam earn from it too!!!</p> <p style="color: #030f10;">It produces about 4 coins a second, and you will receive your payment every 7.5 seconds!!!</p> </div>')
            }
            else if ($(this).is("#pharmacy")) {
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                infoForObjects.contents().not("button").remove();
                infoForObjects.append('<div style="text-align: center; color:#222; font-weight: bold;"> <h1>Pharmacy</h1> <p style="color:#030f10;">Another store that is pretty useless considering that this city has no people</p> <p style="color: #030f10;">It produces about 5 coins a second, and you will receive your payment every 7.5 seconds!!!</p></div>')
            }
            else if ($(this).is("#backery")) {
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                infoForObjects.contents().not("button").remove();
                infoForObjects.append('<div style="text-align: center; color:#222; font-weight: bold;"> <h1>Backery</h1> <p style="color:#030f10;">From this store you can buy delicious food, if someone where there to make it -_-</p> <p style="color: #030f10;">It produces about 8 coins a second, and you will receive your payment every 7.5 seconds!!!</p> </div>')
            }
            else if ($(this).is("#smallHouse")) {
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                infoForObjects.contents().not("button").remove();
                infoForObjects.append('<div style="text-align: center; color:#222; font-weight: bold;"><h1>Small House</h1><p style="color:#030f10;">A little comfy house that can host up to 5 people, unfortunately this is a ghost city -_-</p><p style="color: #030f10;">It costs about 3.5 coins a second, and you will pay your payment every 7 seconds!!!</p></div>');
            }
            else if ($(this).is("#midHouse")) {
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                infoForObjects.contents().not("button").remove();
                infoForObjects.append('<div style="text-align: center; color:#222; font-weight: bold;"> <h1>Medium House</h1> <p style="color:#030f10;">A bigger and more comfortable house</p> <p style="color: #030f10;">It costs about 12 coins a second, and you will pay your payment every 5 seconds!!!</p></div>')
            }
            else if ($(this).is("#mansion")) {
                upgradeButton.show();
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                infoForObjects.contents().not("button").remove();
                infoForObjects.append('<div style="text-align: center; color:#222; font-weight: bold;"> <h1>Mansion</h1> <p style="color:#030f10;">The most luxurious home you can own, only few people were able to own this castle</p> <p style="color: #030f10;">It costs about 62.5 coins a second, and you will pay your payment every 12 seconds!!!</p> </div>');
            }

            $(".placeable").click(function () {
                infoDivGeneral.css({"opacity" : "0", "z-index" : "-1"});
            });
        });
        return;
    }

    var infoObjects = $("#infoObjects");
    var deleteButton = $("#deleteButton");
    var closeMenu = $(".closeMenu");
    var choice = $(".choice");

    infoObjects.click(function () {
        infoForObjects.css({"opacity" : "1", "z-index" : "100"});
    });

    deleteButton.click(function () {
        deleteMenuObjects.css({"opacity" : "1", "z-index" : "100"});

        choice.eq(0).click (closeAll);

        choice.eq(1).click(function () {
            var id =  $("#" + removeId);

            if (id.hasClass("placeable") && removeId === "smallFactory") {
                id.remove();
                addResources(1250);
            }
            else if (id.hasClass("placeable") && removeId === "midFactory") {
                id.remove();
                addResources(3500);
            }
            else if (id.hasClass("placeable") && removeId === "bigFactory") {
                id.remove();
                addResources(7500);
            }
            else if (id.hasClass("placeable") && removeId === "coffeShop") {
                id.remove();
                addResources(625);
            }
            else if (id.hasClass("placeable") && removeId === "pharmacy") {
                id.remove();
                addResources(625);
            }
            else if (id.hasClass("placeable") && removeId === "backery") {
                id.remove();
                addResources(750);
            }
            else if (id.hasClass("placeable") && removeId === "smallHouse") {
                id.remove();
                addResources(850);
            }
            else if (id.hasClass("placeable") && removeId === "midHouse") {
                id.remove();
                addResources(2500);
            }
            else if (id.hasClass("placeable") && removeId === "mansion") {
                id.remove();
                addResources(7500);
            }

            closeAll();
        });
    });

    closeMenu.click(closeAll);

    function closeAll () {
        infoDivGeneral.css({"opacity" : "0", "z-index" : "-1"});
        infoForObjects.css({"opacity" : "0", "z-index" : "-1"});
        deleteMenuObjects.css({"opacity" : "0", "z-index" : "-1"});
        upgradeMenu.css({"opacity" : "0", "z-index" : "-1"});
    }

    var upgradeButton = $("#upgradeButton");
    var upgradeMenu = $("#upgradeMenu");
    var choiceUpgrade = $(".choiceUpgrade");

    var firstUp = 7500;

    upgradeButton.click(function () {
        upgradeMenu.css({"opacity" : "1", "z-index" : "100"});

        choiceUpgrade.eq(0).click(closeAll);

        choiceUpgrade.eq(1).click (function () {
            removeResources(firstUp);
            RESOURCESMAX += 10000;
            closeAll();
        });
    });

});