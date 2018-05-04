const myApp = {}



myApp.opponent = {
    health: 100,
    regularAttack: function() {
        myApp.player.health = myApp.player.health - 10;
        setTimeout(() => {
            $(".menu__text").html("OPPONENT launches attack on PLAYER");
            $(".player__health-bar--fill").css("width", "-=10%");
            if (myApp.player.health <= 60 && myApp.player.health > 30) {
                $(".player__health-bar--fill").css("background-color", "orange")
            } else if (myApp.player.health <= 30) {
                $(".player__health-bar--fill").css("background-color", "red")
            } 
        }, 3000);
    },
};

myApp.player = {
    health: 100,
    regularAttack: function () {
        myApp.opponent.health = myApp.opponent.health - 15;
        $(".menu__text").html("PLAYER launches attack on OPPONENT");
        $(".opponent__health-bar--fill").css("width", "-=15%");
        if (myApp.opponent.health <= 60 && myApp.opponent.health > 30) {
            $(".opponent__health-bar--fill").css("background-color", "orange")
        } else if (myApp.opponent.health <= 30) {
            $(".opponent__health-bar--fill").css("background-color", "red")
        } 
    },
    specialAttack: function () {
        myApp.opponent.health = myApp.opponent.health - 35;
        $(".menu__text").html("PLAYER launches special attack on OPPONENT");
        $(".opponent__health-bar--fill").css("width", "-=35%");
        if (myApp.opponent.health <= 60 && myApp.opponent.health > 30) {
            $(".opponent__health-bar--fill").css("background-color", "orange")
        } else if (myApp.opponent.health <= 30) {
            $(".opponent__health-bar--fill").css("background-color", "red")
        } 
    },
    capture: function () {
        if (myApp.opponent.health <= 40) {
            $(".menu__text").html("OPPONENT captured!");
        } else {
            $(".menu__text").html("OPPONENT still too powerful!");
            myApp.opponent.regularAttack();
            myApp.defaultMenuText();
        }
    },
    run: function () {
        $(".menu__text").html("PLAYER can not escape!");
    }
};

myApp.defaultMenuText = () => {
    setTimeout(() => {
        $(".menu__text").html("What will PLAYER DO?");
    }, 6000);
}

myApp.disableRedButton = () => {
    $(".menu__buttons--red").attr("disabled", true);
    setTimeout(() => {
        $(".menu__buttons--red").attr("disabled", false);
    }, 6000);
};

myApp.disableGreenButton = () => {
    $(".menu__buttons--green").attr("disabled", true);
    setTimeout(() => {
        $(".menu__buttons--green").attr("disabled", false);
    }, 6000);
};

myApp.disableYellowButton = () => {
    $(".menu__buttons--yellow").attr("disabled", true);
    setTimeout(() => {
        $(".menu__buttons--yellow").attr("disabled", false);
    }, 6000);
};

myApp.disableBlueButton = () => {
    $(".menu__buttons--blue").attr("disabled", true);
    setTimeout(() => {
        $(".menu__buttons--blue").attr("disabled", false);
    }, 6000);
};

myApp.disableButtons = () => {
    myApp.disableRedButton();
    myApp.disableGreenButton();
    myApp.disableYellowButton();
    myApp.disableBlueButton();
}



$(".start__button").on("click", () => {
    $(".start").fadeOut(3000);
    myApp.battleTheme = $("#battle")[0];
    myApp.battleTheme.play();
});

$(".menu__buttons--red").on("click", () => {
    myApp.disableButtons(); 
    myApp.player.regularAttack();
    if (myApp.opponent.health <= 0) {
        $(".menu__text").html("OPPONENT defeated!");
    } else {
        myApp.opponent.regularAttack();
        myApp.defaultMenuText();
    }
});

// When red button is clicked:
// 1. change "menu__text" from "What will PLAYER do?" to "PLAYER attacks OPPONENT".
// 2. remove 15 points of health from opponent and lower 15% width from "opponent__health-bar--fill".
// 3. check if health point is lower than or equal to 60. If it is change colour of opponent__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of opponent__health-bar--fill to red.
// 4. check if health point is lower than or equal to 0. If it is then display victory screen. Otherwise continue on.
// 5. change "menu__text" again to "OPPONENT attacks PLAYER".
// 6. remove 10 points of health from player and lower 10% width from "player__health-bar--fill".
// 7. check if health point is lower than or equal to 60. If it is change colour of player__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of player__health-bar--fill to red.
// 8. check if health point is lower than or equal to 0. If it is then display game over screen. Otherwise continue on.
// 9. change back "menu__text" to "What will PLAYER do?".


$(".menu__buttons--green").on("click", () => {
    myApp.disableButtons();
    myApp.player.specialAttack();
    if (myApp.opponent.health <= 0) {
        $(".menu__text").html("OPPONENT defeated!");
    } else {
        myApp.opponent.regularAttack();
        myApp.defaultMenuText();
    }
});

// When green button is clicked:
// 1. change "menu__text" from "What will PLAYER do?" to "PLAYER uses special attack".
// 2. remove 35 points of health from opponent and lower 35% width from "opponent__health-bar--fill".
// 3. change "menu__text" to "It's super effective".
// 4. check if health point is lower than or equal to 60. If it is change colour of opponent__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of opponent__health-bar--fill to red.
// 5. check if health point is lower than or equal to 0. If it is then display victory screen. Otherwise continue on.
// 6. change "menu__text" again to "OPPONENT attacks PLAYER".
// 7. remove 10 points of health from player and lower 10% width from "player__health-bar--fill".
// 8. check if health point is lower than or equal to 60. If it is change colour of player__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of player__health-bar--fill to red.
// 9. check if health point is lower than or equal to 0. If it is then display game over screen. Otherwise continue on.
// 10. change back "menu__text" to "What will PLAYER do?".


$(".menu__buttons--yellow").on("click", () => {
    myApp.disableButtons();
    myApp.player.capture();    
});

// When yellow button is clicked:
// 1. check if opponent's health is lower than or equal to 30 if it is show capture victory screen.
// 2. If not, change "menu__text" to "Nothing happens, OPPONENT is still too powerful".
// 3. change "menu__text" again to "OPPONENT attacks PLAYER".
// 4. remove 10 points of health from player and lower 10% width from "player__health-bar--fill".
// 5. check if health point is lower than or equal to 60. If it is change colour of player__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of player__health-bar--fill to red.
// 6. check if health point is lower than or equal to 0. If it is then display game over screen. Otherwise continue on.
// 7. change back "menu__text" to "What will PLAYER do?".


$(".menu__buttons--blue").on("click", () => {
    myApp.disableButtons();
    myApp.player.run();
    myApp.opponent.regularAttack();
    myApp.defaultMenuText();
});

// When blue button is clicked:
// 1. change "menu__text" from "What will PLAYER do?" to "You can't escape!".
// 2. change "menu__text" again to "OPPONENT attacks PLAYER".
// 3. remove 10 points of health from player and lower 10% width from "player__health-bar--fill".
// 4. check if health point is lower than or equal to 60. If it is change colour of player__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of player__health-bar--fill to red.
// 5. check if health point is lower than or equal to 0. If it is then display game over screen. Otherwise continue on.
// 6. change back "menu__text" to "What will PLAYER do?".