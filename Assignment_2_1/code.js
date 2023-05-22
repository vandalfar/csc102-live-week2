//Created by Michael Anderson
function gameOver()
{ //the strange formatting inside the backticks is how the script acceps newlines without hacing to escape the code for a newline
    alert(`You have been knocked unconscious. Your last thoughts before you go under are of your companions and what trouble they may be encountering.

Game Over.`);
    //refreshes the page to start the game again
    window.location.reload();
}
//using the backtick (`) allows easier newline creation, leading to no need to escape the code for a newline
function youWin(){
    alert(`You have managed to knock the gnoll unconscious. You rush back to your camp and find your comrades standing around another small group of gnolls, which they have managed to defeat as well.

Your group looks relieved to see you, and your adventure continues in another game.

Play Again?`)
    //refreshes the page to start the game again
    window.location.reload();
}
function runAlert()
{
    alert(`You run ahead to alert the party to the presence of the gnoll in the
area. Instead of your sleeping party, you find evidence of a struggle at
your camp with your party members nowhere to be seen. 
    
    
Game Over.`);
    //refreshes the page to start the game again
    window.location.reload();
}
//character variables
var charArmorClass = 17;
var charHitPoints = 18;
//gnoll opponent variables
var gnollArmorClass = 15;
var gnollHitPoints = 22;
function playGame(){
    //used to calculate attack rolls
    var charAtk = Math.ceil(Math.random() *20+2);
    //used to calculate damage rolls
    var charDmg = Math.ceil(Math.random() *6+3);
    //gnoll opponent variables
    var gnollAtk = Math.ceil(Math.random() *20+2);
    var gnollDmg = Math.ceil(Math.random() *4+2);
    //change the look of the page for the game by updating storyBoard, scoreBoard, rollBoard, and the artBoard
    document.getElementById("storyBoard").innerHTML = `The gnoll, a feral, hyena-headed humanoid notices you as you approach. It seems as though it has been caught off guard. At its hip is a scabbard for a sword, but the weapon itself seems missing. In its clawed hands is a simple spear.`
    document.getElementById("scoreBoard").innerHTML = `<h2>Your Hit Points</h2><h1>`+charHitPoints+`</h1><h3>Your Armor Class</h3><h2>` +charArmorClass+ `</h2><h2>The Gnoll's Hit Points</h2><h1>`+gnollHitPoints+`</h1><h3>The Gnoll's Armor Class</h3><h2>`+gnollArmorClass+`</h2>`
    document.getElementById("rollBoard").innerHTML = `<span class="dmVoice">What do you do?</span>`
    document.getElementById("artBoard").innerHTML = `<img id="dndArt2" src="gnoll.png" alt="A gnoll">`
    //character attacks gnoll
    if(charAtk >= gnollArmorClass){
        gnollHitPoints = gnollHitPoints-charDmg
        document.getElementById("gameBoard").innerHTML = `<span class ="dmVoice">You hit the gnoll for ` + charDmg + ` points, knocking its total health down to ` + gnollHitPoints + '!</span>'
    }
    else{
        document.getElementById("gameBoard").innerHTML = `<span class="dmVoice">You missed your attack! Roll again.</span>`
    }
    //gnoll attacks character at same time
   if(gnollAtk >= charArmorClass){
        charHitPoints = charHitPoints-gnollDmg
        document.getElementById("dmPrompt").innerHTML = `<span class="dmVoice">The gnoll hits you for ` + gnollDmg + ` points, knocking your health down to ` + charHitPoints + `!</span>`
    }
    else{
        document.getElementById("dmPrompt").innerHTML = `<span class="dmVoice">The gnoll missed its attack! You take no damage this round.</span>`
    }
    //if the gnoll's hit points fall to zero or below
    if(gnollHitPoints <= 0){
        document.getElementById("gameBoard").innerHTML = `You knocked the gnoll unconscious and successfully alerted your party back at the cave. Your adventure continues elsewhere.`
        youWin();
    }
    //if the character's hit points fall to zero or below
    else if(charHitPoints <= 0){
        document.getElementById("dmPrompt").innerHTML = `<span class-"dmVoice">You have been knocked unconscious.</span>`
        gameOver();
    }
    //otherwise let the game run without doing anything
    else{
    }
}