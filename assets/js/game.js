//Game States
//"WIN" - Player has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//mutiple values can be logged at once
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// this creates a function named "fight"
var fight = function(enemyName) {
    //alert players that they are starting the round
    while(enemyHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if the player chooses to fight, then fight
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = Math.max(0,playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    //generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);
    //subtract the value of playerAttack from enemyHealth and use that result to update enemyHealth variable
    enemyHealth = Math.max(0, enemyHealth - damage);
    //log resulting message to console
    console.log(
        playerName + " attacked" + enemyName + ". " + enemyName + " now has" + enemyHealth + " health remaining."
    );
    //check enemyHealth
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    //subtract the value of enemyAttack from playerHealth and use that result to update playerHealth variable
    playerHealth = Math.max(0,playerHealth - damage);
    //log resulting message to console
    console.log(
        enemyName + " attacked" + playerName + ". " + playerName + " now has" + playerHealth + " health remaining."
    )
    //check playerHealth
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}}

//function to start a new game
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);

            // if we're not at the last enemy in the array
            if (i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
                if (playerMoney >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");
                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }
                break;
            case "upgrade":
            case "UPGRADE":
                if (playerMoney >= 7) {
                    window.alert("Upgrading player's attack by 6 for 7 dollars.");
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }
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

