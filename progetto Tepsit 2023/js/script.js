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
//alert(gameContainer.width()- $(document).width());
    function addBuildings (structure, price) {
        let posX;
        let posY;
        $(document).on("mousemove", function(event) {
            
            posX = event.pageX;
            posY = event.pageY;
           
            structure.css({
              "left": posX -400 + "px",
              "top": posY + "px"
            });

            // console.log((window.innerWidth / posX)* 100);
            // console.log((window.innerHeight / posY)* 100);
         
        });     
        gameContainer.click(function () {
           
             
             if(posX<=($(document).width()-gameContainer.width())/2||posX>($(document).width()-gameContainer.width())/2+gameContainer.width()){
               alert("Non puoi costruire in questo punto"); 
             }else{
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
            location.reload();
        }
        return;
    }

    function showInfo () { // need to be fixed
        var infoDivGeneral= $(".clickForInfoObjects");
        var info= $(".clickForInfoObjectsText");
        var node = document.createElement("p");
        
        $(".placeable").click(function () {
            infoDivGeneral.css({"opacity" : "0", "z-index" : "3"});
        });


        $(".placeable").dblclick(function () {
            if ($(this).is("#smallFactory")) { //check what has been clicked then show the corrispondent menu
                infoDivGeneral.css({"opacity" : "1", "z-index" : "3"});
                // info.appendChild(node);
                // var textnode =  document.createTextNode("The small factory that produces 5/s");
                // node.appendChild(textnode);
            }
            else if ($(this).is("#midFactory")) {
                alert("ciao");
            }
            else if ($(this).is("#bigFactory")) {
                alert("ciao");
            }
            else if ($(this).is("#coffeShop")) {
                alert("ciao");
            }
            else if ($(this).is("#pharmacy")) {
                alert("ciao");
            }
            else if ($(this).is("#backery")) {
                alert("ciao");
            }
            else if ($(this).is("#smallHouse")) {
                alert("ciao");
            }
            else if ($(this).is("#midHouse")) {
                alert("ciao");
            }
            else if ($(this).is("#mansion")) {
                alert("ciao");
            }
        });
        return;
    }
    
    //TODO add npc with random movement
    //TODO add js to manage click for objects info
    //TODO add function to expand the total coin storage in the castle
});