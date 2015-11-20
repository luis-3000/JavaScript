var user = prompt("You are walking through a mystic forest, when suddently a Dragon appears, do you FIGHT him, PAY him or RUN in order to get through the forest?").toUpperCase();

switch(user) {
    case 'FIGHT':
        console.log("I hope you are smart or strong enough to defeat it!");
        var strong = prompt("Are you strong: (YES or NO)?").toUpperCase();
        var smart = prompt("Are you smart?").toUpperCase();
        if (smart ==='YES' || strong === 'YES') {
            console.log("You only need one of the two to defeat the dragon. Nice job on slaying the beast!");   
        } else {
            console.log("You are not smart or strong? Well, if you were smarter you wouldn't have tried to fight a dragon! You lose!");   
        }
        break;
    case 'PAY':
        console.log("It only accepts gold conins as payment!");
        var hasCoins = prompt("Do you have coins?").toUpperCase();
        var madeOfGold = prompt("Are these coins made of gold?").toUpperCase();
        if (hasCoins == 'YES' && madeOfGold === 'YES') {
            console.log("Excellent! You pay the dragon and continue on your wonderful journey.");    
        } else {
            console.log("Bad luck! This Dragon only takes gold coins. You are fried!");
        }        
        break;
    case 'RUN':
        console.log("I hope you are a fast runner!");
        var fast = prompt("Are you fast?").toUpperCase();
        var hasHeadStart = prompt("Do you have a head start?").toUpperCase();
        if (fast === 'YES' && hasHeadStart === 'YES') {
            console.log("You barely escaped the dragon's fiery breath. You get to roam around the mystic forest for another day");
        } else {
            console.log("You are not fast and you did not have a head start? You get to become another skull in the dragon's layer skull collection!");    
        }
        break;
    default:
        console.log("I don't recognize that choice, try again.");
}