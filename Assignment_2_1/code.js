//Created by Michael Anderson
function gameOver()
{
    alert(`You have been knocked unconcious.
Game Over.`);
    //refreshes the page to play again
    window.location.reload();
}
//using the backtick (`) allows easier newline creation, leading to no need to escape the code for a newline
function youWin(){
    alert(`You win!
Play Again?`)
    //refreshes the page to play again
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
var charHitPoints = 12;
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
    document.getElementById("storyBoard").innerHTML = `The gnoll, a feral, hyena-headed humanoid notices you as you approach. It seems as though it has been caught off guard.`
    document.getElementById("dmPrompt")
    //character attacks gnoll
    if(charAtk >= gnollArmorClass){
        gnollHitPoints = gnollHitPoints-charDmg
        document.getElementById("gameBoard").innerHTML = `You hit the gnoll for ` + charDmg + ` points, knocking its total health down to ` + gnollHitPoints
    }
    else if(charAtk < gnollArmorClass){
        document.getElementById("gameBoard").innerHTML = `You missed!`
    }
    //gnoll attacks character at same time
    else if(gnollAtk >= charArmorClass){
        charHitPoints = charHitPoints-gnollDmg
        document.getElementById("dmPrompt").innerHTML = `<span class="dmVoice">The gnoll hits you for ` + gnollDmg + ` points, knocking your health down to ` + charHitPoints + `</span>`
    }
    else if(gnollAtk < charArmorClass){
        document.getElementById("dmPrompt").innerHTML = `<span class="dmVoice">The gnoll missed its attack! You take no damage this round.</span>`
    }
    //if the gnoll's hit points fall to zero or below
    else if(gnollHitPoints <= 0){
        document.getElementById("gameBoard").innerHTML = `You knocked the gnoll unconcious and successfully alerted your party back at the cave. Your adventure continues elsewhere.`
    }
    //if the character's hit points fall to zero or below
    else if(charHitPoints <= 0){
        gameOver()
    }
    else{
        document.getElementById("dmPrompt").innerHTML = `The Game Goes On`
    }
}