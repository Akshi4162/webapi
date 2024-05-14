const gameModule = require('./Akshitha_GameTracker.js'); 

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