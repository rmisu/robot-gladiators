//Game States
//"WIN" - Player has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

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
            playerMoney = playerMoney - 2;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    //subtract the value of playerAttack from enemyHealth and use that result to update enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
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
    //subtract the value of enemyAttack from playerHealth and use that result to update playerHealth variable
    playerHealth = playerHealth - enemyAttack;
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
            enemyHealth = 50;
            fight(pickedEnemyName);
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

startGame();

