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

+ In the event you may need a sample code to test out the fuctions, you may want to create a index.js in the same directory of the repository that you have cloned earlier and paste in this code :


``` js

const gameModule = require('./index.js'); 

// CHECKING PLAYER'S INITIAL STATE
console.log("Initial player's state:");
console.log(gameModule.getPlayerLevel()); 
console.log(gameModule.getPlayerExperience()); 
console.log(gameModule.getUnlockedSkills());
console.log(gameModule.checkCoins());
console.log(gameModule.viewInventory()); 

// TRYING TO UNLOCK SKILLS 
console.log("\nUnlocking Various Skills:");
console.log(gameModule.listAvailableSkills()); //Shows all possible unlockable skills
console.log(gameModule.unlockSkill(0)); 
console.log(gameModule.unlockSkill(0)); // If player tries to unlock the same skill again, a error message would show.
console.log(gameModule.unlockSkill(1));

console.log(gameModule.getUnlockedSkills());//Shows all skills unlocked by the player

//CHECKING ALL THE AVAILABLE ITEMS IN SHOP
console.log("\nCheck all available items on sale: ");
console.log(gameModule.checkShopItems()); 

//TRYING TO BUY ITEM(S)
console.log("\nBuying an item:");
console.log(gameModule.buyItem(1)); //If player tries buying a item that doesn't exist or items with no coins , a error message would show.
console.log(gameModule.buyItem(0));
console.log(gameModule.checkCoins()); // Check updated number of coins
console.log(gameModule.viewInventory()); // Check updated inventory

//TRYING TO SELL ITEM(S)
console.log("\nSelling an item:");
console.log(gameModule.sellItem(0)); //If player tries selling with no items in inventory, a error message would show.
console.log(gameModule.checkCoins()); // Check updated number of coins
console.log(gameModule.viewInventory()); // Check updated inventory

//ADDING GAME EXPERIENCE POINTS TO INCREASE PLAYER'S LEVEL
console.log("\nAdding game experience points to increase level :");
/*For every 500 points gained, the user's level will increase by 1 
if they gained more than 500 points from a certain time, 
their unused points will be carried over to the next level.*/
console.log(gameModule.addExperience(500)); 
console.log(gameModule.getPlayerExperience());

```

(Or you can create your own code and test out the functions. All the various functions that are available are listed below. 😊👍)

+ Then run the following command on terminal:
```
node index.js //replace index with the name of your file, if need be.
```



## The Various fuctions and their explanations
+ **checkCoins()**     
    This function returns the number of coins the player has.


+ **checkShopItems()**     
    This function returns the name and price of each item in the shop.

+ **buyItem(itemIndex)**     
    This function allows the user to buy item(s) from the shop.
     The `itemIndex` parameter specifies the index of the item to be purchased and must be an integer.
    

+ **sellItem(itemIndex)**     
    This function allows the player to sell item(s) from the inventory.
     The `itemIndex` parameter specifies the index of the item to be sold and must be an integer.

+ **viewInventory()**      
    This function returns the name of each item in the player's inventory.

+ **getUnlockedSkills()**     
    This function returns the name of each skill that the player has unlocked.

+ **unlockSkill(skillIndex)**     
    This function allows the player to unlock a skill.
     The `skillIndex` parameter specifies the index of the skill to be unlocked and must be an integer.

+ **listAvailableSkills()**     
    This function allows the player to view all possible skills that are available.
     

+ **getPlayerLevel()**     
    This function return the player's level

+ **getPlayerExperience()**     
    This function returns the player's experience points.

+ **addExperience(points)**     
    This function allows the player to add on to their experience points(after completing tasks) in order to increase their level. [Note : For this node module, there are no tasks added.]
     The `points` parameter specifies the number of experience points to be added and must be an integer.
     


