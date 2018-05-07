
const myApp = {};

myApp.opponent = {
    health: 100,
    regularAttack: function() {
        myApp.player.health = myApp.player.health - 10;
        setTimeout(() => {
            $(".menu__text").html("Wild CSS throws DANNY a syntax error!");
            $(".opponent__error").fadeIn(900).css("display", "flex");
            const errorOne = setInterval(myApp.errorOne, 300);
            setTimeout(() => {
                clearInterval(errorOne);
            }, 3000);
            const errorTwo = setInterval(myApp.errorTwo, 300);
            setTimeout(() => {
                clearInterval(errorTwo);
            }, 3000);
            const errorThree = setInterval(myApp.errorThree, 300);
            setTimeout(() => {
                clearInterval(errorThree);
            }, 3000);
            setTimeout(() => {
                $(".opponent__error").fadeOut(900);
            }, 3000);
        }, 4500);
        setTimeout(() => {
            $(".player__health-bar--fill").css("width", "-=10%");
            if (myApp.player.health <= 60 && myApp.player.health > 30) {
                $(".player__health-bar--fill").css("background-color", "orange")
            } else if (myApp.player.health <= 30) {
                $(".player__health-bar--fill").css("background-color", "red")
            }
        }, 7500);
    },
};

myApp.player = {
    health: 100,
    regularAttack: function () {
        myApp.opponent.health = myApp.opponent.health - 15;
        $(".menu__text").html("DANNY styles the wild CSS!");
        myApp.styleOption();
        setTimeout(() => {
            $(".opponent__health-bar--fill").css("width", "-=15%");
            if (myApp.opponent.health <= 60 && myApp.opponent.health > 30) {
                $(".opponent__health-bar--fill").css("background-color", "orange")
            } else if (myApp.opponent.health <= 30) {
                $(".opponent__health-bar--fill").css("background-color", "red")
            }
        }, 3000);
    },
    specialAttack: function () {
        myApp.opponent.health = myApp.opponent.health - 35;
        $(".menu__text").html("DANNY calls a function!");
        $(".player__image").animate({
            left: "5%"
        }, 900);
        myApp.specialText();
        setTimeout(() => {
            $(".opponent__health-bar--fill").css("width", "-=35%");
            if (myApp.opponent.health <= 60 && myApp.opponent.health > 30) {
                $(".opponent__health-bar--fill").css("background-color", "orange")
            } else if (myApp.opponent.health <= 30) {
                $(".opponent__health-bar--fill").css("background-color", "red")
            }
        }, 3000);
        setTimeout(() => {
            $(".player__image").animate({
                left: "25%"
            }, 900);
        }, 3000);
    },
    capture: function () {
        if (myApp.opponent.health <= 40) {
            $(".opponent__image").fadeOut(1200);
            $(".opponent__capture").fadeIn(900).css("display", "block");
            $(".menu__text").html("DANNY threw his fanny pack!");
            setTimeout(() => {
                $(".menu__text").html("Wild CSS collected!");
                myApp.battleTheme.pause();
                myApp.victoryTheme.play();
                setTimeout(() => {
                    $(".capture").fadeIn(1500).css("display", "flex");
                }, 3000);
            }, 3000);
        } else {
            $(".menu__text").html("Wild CSS still not styled enough!");
            myApp.opponent.regularAttack();
            myApp.defaultMenuText();
        }
    },
    run: function () {
        chance = Math.floor(Math.random() * 11);
        console.log(chance);        
        if (chance === 10) {
            $(".menu__text").html("Fled from the wild CSS!");
            myApp.battleTheme.pause();
            myApp.victoryTheme.play();
            setTimeout(() => {
                $(".flee").fadeIn(1500).css("display", "flex");
            }, 3000);
        } else {
            $(".menu__text").html("DANNY can not escape!");
        }
    }
};

myApp.defaultMenuText = () => {
    setTimeout(() => {
        $(".menu__text").html("What will DANNY do?");
    }, 9000);
};

myApp.opacityButton = () => {
    $(".menu__button").css("opacity", "0.5");
    setTimeout(() => {
        $(".menu__button").css("opacity", "1");
    }, 9000);
};

myApp.disableYellowButton = () => {
    $(".menu__button--yellow").attr("disabled", true);
    setTimeout(() => {
        $(".menu__button--yellow").attr("disabled", false);
    }, 9000);
};

myApp.disableOrangeButton = () => {
    $(".menu__button--orange").attr("disabled", true);
    setTimeout(() => {
        $(".menu__button--orange").attr("disabled", false);
    }, 9000);
};

myApp.disablePinkButton = () => {
    $(".menu__button--pink").attr("disabled", true);
    setTimeout(() => {
        $(".menu__button--pink").attr("disabled", false);
    }, 9000);
};

myApp.disableBlueButton = () => {
    $(".menu__button--blue").attr("disabled", true);
    setTimeout(() => {
        $(".menu__button--blue").attr("disabled", false);
    }, 9000);
};

myApp.disableButtons = () => {
    myApp.opacityButton();
    myApp.disableYellowButton();
    myApp.disableOrangeButton();
    myApp.disablePinkButton();
    myApp.disableBlueButton();
};

myApp.battleTheme = $("#audio__battle")[0];
myApp.victoryTheme = $("#audio__victory")[0];

myApp.errorOneArray = ["010", "00", "01"];
myApp.errorTwoArray = ["X", "$", "?", "!"];
myApp.errorThreeArray = ["404", "error", "#", "%"];

myApp.errorOne = () => {
    let errorOneText = document.getElementById("opponent__error1");
    let curErrorOne = myApp.errorOneArray.indexOf(errorOneText.innerHTML);
    errorOneText.innerHTML = myApp.errorOneArray[(curErrorOne + 1) % myApp.errorOneArray.length];
};

myApp.errorTwo = () => {
    let errorTwoText = document.getElementById("opponent__error2");
    let curErrorTwo = myApp.errorTwoArray.indexOf(errorTwoText.innerHTML);
    errorTwoText.innerHTML = myApp.errorTwoArray[(curErrorTwo + 1) % myApp.errorTwoArray.length];
};

myApp.errorThree = () => {
    let errorThreeText = document.getElementById("opponent__error3");
    let curErrorThree = myApp.errorThreeArray.indexOf(errorThreeText.innerHTML);
    errorThreeText.innerHTML = myApp.errorThreeArray[(curErrorThree + 1) % myApp.errorThreeArray.length];
};

myApp.styleText = (target, message, index, interval) => {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(() => {
            myApp.styleText(target, message, index, interval);
        }, interval);
    }
};

myApp.styleOne = () => {
    myApp.styleText("#player__style1", "display: flex;", 0, 150);
    setTimeout(() => {
        $(".player__style").fadeOut(1200);
    }, 3000);
    setTimeout(() => {
        $(".player__style").text("");
        $(".player__style").css("display", "");
    }, 6000);   
};

myApp.styleTwo = () => {
    myApp.styleText("#player__style2", "color: hotpink;", 0, 150);
    setTimeout(() => {
        $(".player__style").fadeOut(1200);
    }, 3000);
    setTimeout(() => {
        $(".player__style").text("");
        $(".player__style").css("display", "");
    }, 6000);
};

myApp.styleThree = () => {
    myApp.styleText("#player__style3", "padding: 15px;", 0, 150);
    setTimeout(() => {
        $(".player__style").fadeOut(1200);
    }, 3000);
    setTimeout(() => {
        $(".player__style").text("");
        $(".player__style").css("display", "");
    }, 6000);
};

myApp.styleOption = () => {
    option = Math.floor(Math.random() * 6);
    console.log(option);
    if (option === 2 || option === 4) {
        myApp.styleOne();
    } else if (option === 1 || option === 3) {
        myApp.styleTwo();
    } else {
        myApp.styleThree();
    }
};

myApp.specialText = () => {
    myApp.styleText("#special__text", "Sweet()", 0, 100);
    setTimeout(() => {
        $(".special").animate({
            top: "-200%",
            left: "400%"
        }, 1500);
    }, 3000);
    setTimeout(() => {
        $(".special__text").fadeOut(1200);
    }, 7500);
    setTimeout(() => {
        $(".special__text").text("");
        $(".special__text").css("display", "");
        $(".special").css("top", "35%");
        $(".special").css("left", "50%");
    }, 9000);
};

myApp.start = () => {
    $(".start__button").on("click", () => {
        $(".start").fadeOut(1500);
        myApp.battleTheme.play();
        const blink = setInterval(() => {
            $(".blink").toggleClass("blink--white").fadeOut(6000);
        }, 150);
        setTimeout(() => {
            clearInterval(blink);
        }, 6000);
        setTimeout(() => {
            $(".opponent__image").animate({
                left: "20%"
            },2000);
        }, 3000);
        setTimeout(() => {
            $(".player__image").animate({
                left: "25%"
            },2000);
        }, 3000);
        setTimeout(() => {
            $(".opponent__box").fadeIn(1500).css("display", "flex");
        }, 6000);
        setTimeout(() => {
            $(".player__box").fadeIn(1500).css("display", "flex");
        }, 6000);
        setTimeout(() => {
            $(".menu__text").html("Wild CSS has appeared!");
        }, 6000);
        setTimeout(() => {
            $(".menu__text").html("What will DANNY do?");
        }, 9000);
    });
};

// When yellow button is clicked:
// 1. change "menu__text" from "What will PLAYER do?" to "PLAYER attacks OPPONENT".
// 2. remove 15 points of health from opponent and lower 15% width from "opponent__health-bar--fill".
// 3. check if health point is lower than or equal to 60. If it is change colour of opponent__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of opponent__health-bar--fill to red.
// 4. check if health point is lower than or equal to 0. If it is then display victory screen. Otherwise continue on.
// 5. change "menu__text" again to "OPPONENT attacks PLAYER".
// 6. remove 10 points of health from player and lower 10% width from "player__health-bar--fill".
// 7. check if health point is lower than or equal to 60. If it is change colour of player__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of player__health-bar--fill to red.
// 8. check if health point is lower than or equal to 0. If it is then display game over screen. Otherwise continue on.
// 9. change back "menu__text" to "What will PLAYER do?".

myApp.yellowButton = () => {
    $(".menu__button--yellow").on("click", () => {
        myApp.disableButtons(); 
        myApp.player.regularAttack();
        if (myApp.opponent.health <= 0) {
            setTimeout(() => {
                $(".opponent__image").fadeOut(1200);
            }, 3000);
            setTimeout(() => {
                $(".menu__text").html("Wild CSS defeated!");
                myApp.battleTheme.pause();
                myApp.victoryTheme.play();
                setTimeout(() => {
                    $(".victory").fadeIn(1500).css("display","flex");
                }, 3000);
            }, 4500);
        } else {
            myApp.opponent.regularAttack();
            myApp.defaultMenuText();
        }
    });
};

// When orange button is clicked:
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

myApp.orangeButton = () => {
    $(".menu__button--orange").on("click", () => {
        myApp.disableButtons();
        myApp.player.specialAttack();
        if (myApp.opponent.health <= 0) {
            setTimeout(() => {
                $(".opponent__image").fadeOut(1200);
            }, 3000);
            setTimeout(() => {
                $(".menu__text").html("Wild CSS defeated!");
                myApp.battleTheme.pause();
                myApp.victoryTheme.play();
                setTimeout(() => {
                    $(".victory").fadeIn(1500).css("display","flex");
                }, 3000);
            }, 4500);
        } else {
            myApp.opponent.regularAttack();
            myApp.defaultMenuText();
        }
    });
};

// When pink button is clicked:
// 1. check if opponent's health is lower than or equal to 30 if it is show capture victory screen.
// 2. If not, change "menu__text" to "Nothing happens, OPPONENT is still too powerful".
// 3. change "menu__text" again to "OPPONENT attacks PLAYER".
// 4. remove 10 points of health from player and lower 10% width from "player__health-bar--fill".
// 5. check if health point is lower than or equal to 60. If it is change colour of player__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of player__health-bar--fill to red.
// 6. check if health point is lower than or equal to 0. If it is then display game over screen. Otherwise continue on.
// 7. change back "menu__text" to "What will PLAYER do?".

myApp.pinkButton = () => {
    $(".menu__button--pink").on("click", () => {
        myApp.disableButtons();
        myApp.player.capture();    
    });
};

// When blue button is clicked:
// 1. change "menu__text" from "What will PLAYER do?" to "You can't escape!".
// 2. change "menu__text" again to "OPPONENT attacks PLAYER".
// 3. remove 10 points of health from player and lower 10% width from "player__health-bar--fill".
// 4. check if health point is lower than or equal to 60. If it is change colour of player__health-bar--fill to yellow. Also check if health point is lower than or equal to 30. If it is change colour of player__health-bar--fill to red.
// 5. check if health point is lower than or equal to 0. If it is then display game over screen. Otherwise continue on.
// 6. change back "menu__text" to "What will PLAYER do?".

myApp.blueButton = () => {
    $(".menu__button--blue").on("click", () => {
        myApp.disableButtons();
        myApp.player.run();
        myApp.opponent.regularAttack();
        myApp.defaultMenuText();
    });
};

// When restart button is clicked:
// 1. Change health for both PLAYER and OPPONENT back to 100.
// 2. Hide victory, capture and gameover screen.
// 3. Pause victory_theme audio and reset current time.
// 4. Reset current time and battle_theme audio.
// 5. Reset menu_text.

myApp.restart = () => {
    $(".restart__button").on("click", () => {
        myApp.opponent.health = 100;
        $(".opponent__health-bar--fill").css("width", "100%");
        $(".opponent__health-bar--fill").css("background-color", "green")
        $(".opponent__image").css("left", "-300%")
        $(".opponent__box").css("display", "none")
        $(".opponent__image").css("display","block")
        $(".opponent__capture").css("display", "none");
        myApp.player.health = 100;
        $(".player__health-bar--fill").css("width", "100%");
        $(".player__health-bar--fill").css("background-color", "green")
        $(".player__image").css("left", "")
        $(".player__image").css("right", "-300%")
        $(".player__box").css("display", "none")
        $(".menu__text").html("");
        myApp.victoryTheme.pause();
        myApp.victoryTheme.currentTime = 0;
        myApp.battleTheme.currentTime = 0;
        myApp.battleTheme.play();
        $(".blink").removeClass("blink--white")
        $(".blink").css("display", "block")
        const blink = setInterval(() => {
            $(".blink").toggleClass("blink--white").fadeOut(6000);
        }, 150);
        setTimeout(() => {
            clearInterval(blink);
        }, 6000);
        setTimeout(() => {
            $(".opponent__image").animate({
                left: "20%"
            },2000);
        }, 3000);
        setTimeout(() => {
            $(".player__image").animate({
                left: "25%"
            },2000);
        }, 3000);
        setTimeout(() => {
            $(".opponent__box").fadeIn(1500).css("display", "flex");
        }, 6000);
        setTimeout(() => {
            $(".player__box").fadeIn(1500).css("display", "flex");
        }, 6000);
        setTimeout(() => {
            $(".menu__text").html("Wild CSS has appeared!");
        }, 6000);
        setTimeout(() => {
            $(".menu__text").html("What will DANNY do?");
        }, 9000);
        $(".victory").fadeOut(3000);
        setTimeout(() => {
            $(".victory").css("display", "none");
        }, 3000);
        $(".capture").fadeOut(3000);
        setTimeout(() => {
            $(".capture").css("display", "none");
        }, 3000);
        $(".flee").fadeOut(3000);
        setTimeout(() => {
            $(".capture").css("display", "none");
        }, 3000);
    });
};

// INITIALIZE

myApp.init = () => {
    myApp.start();
    myApp.yellowButton();
    myApp.orangeButton();
    myApp.pinkButton();
    myApp.blueButton();
    myApp.restart();
};

// DOCUMENT READY

$(function () {
    myApp.init();
});