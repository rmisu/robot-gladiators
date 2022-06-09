var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

//mutiple values can be logged at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// this creates a function named "fight"
var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    //subtract the value of playerAttack from enemyHealth and use that result to update enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    //log resulting message to console
    console.log(
        playerName + " attacked" + enemyName + ". " + enemyName + "now has" + enemyHealth + "health remaining."
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
        enemyName + " attacked" + playerName + ". " + playerName + " now has" + playerHealth + "health remaining."
    )
    //check playerHealth
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
// executes function "fight"
fight();



