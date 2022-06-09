//Game States
//"WIN" - Player has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var getPlayerName = function() {
    var name = ""; 

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?")
    }

    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    name: playerInfo = {
        name: getPlayerName(),
    },
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};
//mutiple values can be logged at once
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Any Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

// this creates a function named "fight"
var fight = function(enemy) {
    //alert players that they are starting the round
    while(enemy.health > 0 && enemy.health > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if the player chooses to fight, then fight
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.money = Math.max(0,playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
    }

    //generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    //subtract the value of playerInfo.attack from enemy.health and use that result to update enemy.health variable
    enemy.health = Math.max(0, enemy.health - damage);
    //log resulting message to console
    console.log(
        playerInfo.name + " attacked" + enemy.name + ". " + enemy.name + " now has" + enemy.health + " health remaining."
    );
    //check enemy.health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    //subtract the value of enemy.attack from playerInfo.health and use that result to update playerInfo.health variable
    playerInfo.health = Math.max(0,playerInfo.health - damage);
    //log resulting message to console
    console.log(
        enemy.name + " attacked" + playerInfo.name + ". " + playerInfo.name + " now has" + playerInfo.health + " health remaining."
    )
    //check playerInfo.health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
    } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
}}

//function to start a new game
var startGame = function() {
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {

        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array
            if (i < enemyInfo.length - 1) {
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop()};
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    } endGame();
};

var endGame = function() {
    // if the player is still alive, they win!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    //ask player what they would like to do in the shop
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        ) 
        switch (shopOptionPrompt) {
            case "refill":
            case "REFILL":
                playerInfo.refillHealth();
                break;
            case "upgrade":
            case "UPGRADE":
               playerInfo.upgradeAttack();
                break;
            case "leave":
            case "LEAVE":
                window.alert("Leaving the store.");
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
                shop();
                break;
        }
};

startGame();

