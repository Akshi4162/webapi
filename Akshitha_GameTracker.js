let playerProgress = {
    level: 1,
    experience: 0,
    coins: 100,
    inventory: [],
    unlockedSkills: []
};

let shopItems = [
    { name: "Boiled eggs", price: 20 },
    { name: "Fairy", price: 50 },
    { name: "Legit Master Sword", price: 100000 } 
];

let availableSkills = ["Protection", "Heal", "Fly", "Thunder"];

module.exports = {
    // Display the number of coins the player currently has
    checkCoins() {
        return `Coins left : ${playerProgress.coins} `;
    },

    // Check shop items
    checkShopItems() {
        //This would display the items' name and price without the brackets
        //Also displays each item with a specific index number as well.
        let itemsString = shopItems.map((item, index) => `${index + 1}. Name: ${item.name}, Price: ${item.price}`).join("\n");
        return ` Items available to buy: \n${itemsString}`;
    },

    // Allow the player to spend coins to purchase items from a shop
    buyItem(itemIndex) {
        let item = shopItems[itemIndex]; //item is being assigned the value of the item at the specified index
        // Check if the item is available
        if(itemIndex < 0 || itemIndex >= shopItems.length){
            // throw new Error("Invalid item index");
            return "Item not available.";
        }
        // Check if the player has enough coins to buy the item
        if (playerProgress.coins >= item.price) {
            playerProgress.coins -= item.price;
            playerProgress.inventory.push(item.name);
            console.log(`Bought ${item.name} for ${item.price} coins. Remaining coins: ${playerProgress.coins}`);
            return `Bought ${item.name} for ${item.price} coins.`;
        } 
        else {
            return `You don't have enough coins to buy this ${item.name}.`;
        }
    },

    // Allow the player to sell items to gain some coins
    sellItem(itemIndex) {
        // Check if the item is available in inventory
        if (itemIndex < 0 || itemIndex >= playerProgress.inventory.length) {
            // throw new Error("Invalid item index");
            return "There's no items you can sell.";
        }

        let item = playerProgress.inventory[itemIndex];
        let itemInShop = shopItems.find(shopItem => shopItem.name === item);

        // Check if the item is already available in shop
        if (itemInShop) {
            let sellingPrice = Math.floor(itemInShop.price * 0.5); //makes the selling price to be half of it's original price
            playerProgress.coins += sellingPrice; 
            playerProgress.inventory.splice(itemIndex, 1);  //removes the item from the inventory
            console.log(`Sold ${item} for ${sellingPrice} coins. Total coins: ${playerProgress.coins}`);
            return `Sold ${item} for ${sellingPrice} coins.`;
        } else {
            return `Item ${item} is not sellable.`;
        }
    },

    // Display the items the player currently owns
    viewInventory() {
        if (playerProgress.inventory.length === 0) {
            return "Inventory : None";
        } else {
            //Displays each item in inventory with name and a specific index number as well.
            return `Inventory:\n${playerProgress.inventory.map((item, index) => `${index + 1}. ${item}`).join('\n')}`;
        }
    },

    //Displays all skills unlocked by the user
    getUnlockedSkills(){
        if (playerProgress.unlockedSkills.length === 0){
            return "Unlocked Skills: None";
        } else{
        return `All skills you unlocked: \n${playerProgress.unlockedSkills} `;
        }
    },

    // Allow the player to unlock new skills
    unlockSkill(skillIndex) {
        let skill = availableSkills[skillIndex];
        if (!playerProgress.unlockedSkills.includes(skill)) {  
            playerProgress.unlockedSkills.push(skill);   //Adds the newly unlocked skill to the player's list of unlocked skills
            console.log(`Unlocked skill: ${skill}`);
            return `You unlocked ${skill}.`;
        } 
        else {
            return `${skill} is already unlocked.`; //would give this message to player if they try to unlock a skill again
        }
    },

    //Displays all skills that are available regardless whether they were unlocked or not
    listAvailableSkills() {
        //Displays each skill with name and a specific index number as well.
        return `Available Skills:\n${availableSkills.map((skill, index) => `${index + 1}. ${skill}`).join('\n')}`;
    },

    //get player's level
    getPlayerLevel(){
        return `Current Level: ${playerProgress.level}`;
    },

    //get player's experience points
    getPlayerExperience(){
        return `Experience Points in your current level (${playerProgress.level}): ${playerProgress.experience}`;
    },
 
    // Increase the player's experience points 
    addExperience(points) {
        playerProgress.experience += points;
        if (playerProgress.experience >= 500 ) {
            let levelIncrease = Math.floor(playerProgress.experience / 500); // Calculate level increase, (if result less than 1, level won't increase)
            playerProgress.level += levelIncrease; // Increase player's level
            playerProgress.experience %= 500; // Reset experience points
            return `You gained ${points} experience points. \nCongrats, you leveled up! Your new level is ${playerProgress.level}.`;
        } else {
            return `You gained ${points} experience points.`;
        }
    },

};
