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




