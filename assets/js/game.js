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

// this creates a function named "fight"
var fight = function(enemyName) {
    //alert players that they are starting the round
    while(enemyHealth > 0) {

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if the player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //subtract the value of playerAttack from enemyHealth and use that result to update enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    //log resulting message to console
    console.log(
        playerName + " attacked" + enemyName + ". " + enemyName + " now has" + enemyHealth + " health remaining."
    );
    //check enemyHealth
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
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
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm the player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    }
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try again!")
}}};
// executes function "fight"
fight();

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

