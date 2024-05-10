# Assignment 1 (Game Module)

## Description of my node module: 
I created this node module to track various aspects of gameplay events that are usually performed by gamers on a game. This includes tracking the player's in-game level, experience points, skills, coins and inventory. 

## Setting up the node module
+ Clone the repository to your local machine.
+ Open the terminal in Visual Studio Code and navigate to the directory where the repository is located.
+ Run the following command to install the dependencies(if you don't have it):
```
npm install
```
You may want to create a index.js in the same directory of the repository that you have cloned earlier and paste in this code 
```
const gameModule = require('./Akshitha_GameUse.js'); 


// CHECKING PLAYER'S INITIAL STATE
console.log("Initial player's state:");
console.log(gameModule.getPlayerLevel()); 
console.log(gameModule.getPlayerExperience()); 
console.log(gameModule.getUnlockedSkills());
console.log(gameModule.checkCoins());
console.log(gameModule.viewInventory()); 

// TRYING TO UNLOCK SKILLS 
console.log("\nUnlocking Various Skills:");
console.log(gameModule.unlockSkill(0)); 
console.log(gameModule.unlockSkill(0)); // If try to unlock the same skill again
console.log(gameModule.unlockSkill(1));

console.log(gameModule.getUnlockedSkills());

//CHECKING ALL THE AVAILABLE ITEMS IN SHOP
console.log("\nCheck all available items on sale: ");
console.log(gameModule.checkShopItems()); 

//TRYING TO BUY ITEM(S)
console.log("\nBuying an item:");
console.log(gameModule.buyItem(3)); 
console.log(gameModule.checkCoins()); // Check updated number of coins
console.log(gameModule.viewInventory()); // Check updated inventory

//TRYING TO SELL ITEM(S)
console.log("\nSelling an item:");
console.log(gameModule.sellItem(0)); 
console.log(gameModule.checkCoins()); 
console.log(gameModule.viewInventory()); 

//ADDING GAME EXPERIENCE POINTS TO INCREASE PLAYER'S LEVEL
console.log("\nAdding game experience points to increase level :");
console.log(gameModule.addExperience(-50));
console.log(gameModule.getPlayerExperience());
console.log(gameModule.addExperience(470));
console.log(gameModule.getPlayerExperience());
console.log(gameModule.getPlayerLevel());



```
(Or you can create your own code and test out the functions. All the various functions that are available are listed below. Please scroll down to check them out.😊👍)
+ Run the following command to start the node module:
```
node index.js
```



## The Various fuctions and their explanations
+ **checkCoins()**     
    This function returns the number of coins the player has.


+ **checkShopItems()**     
    This function returns the name and price of each item in the shop.

+ **buyItem(itemIndex)**     
    This function allows the user to buy item(s) from the shop.

+ **sellItem(itemIndex)**     
    This function allows the user to sell item(s) from the inventory.

+ **viewInventory()**      
    This function returns the name of each item in the player's inventory.

+ **getUnlockedSkills()**     
    This function returns the name of each skill that the player has unlocked.

+ **unlockSkill(skillIndex)**     
    This function allows the user to unlock a skill.

+ **getPlayerLevel()**     
    This function return the player's level

+ **getPlayerExperience()**     
    This function returns the player's experience points.

+ **addExperience(points)**     
    This function allows the player to add on to their experience points(after completing tasks) in order to increase their level. [Note : For this node module, there are no tasks added.]


