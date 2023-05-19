//Created by Michael Anderson
/* Initialize global variables for character and opponent
var charArmorClass = 17;
var charHitPoints = 12;
var charInit = charInitRoll - 1;
var charProf = 2;
//gnoll opponent variables
var gnollArmorClass = 15;
var gnollHitPoints = 22;
var gnollInit = gnollInitRoll;
var gnollProf = 4; */
function runAlert()
{
    alert(`You run ahead to alert the party to the presence of the gnoll in the
area. Instead of your sleeping party, you find evidence of a struggle at
your camp with your party members nowhere to be seen. 
    
    
Game Over.`)
}
//character variables
var charArmorClass = 17;
var charHitPoints = 12;
var charInit = Math.ceil(Math.random() *20 -1);
var charAtk = Math.ceil(Math.random() *6+2);
//gnoll opponent variables
var gnollArmorClass = 15;

function playGame(){
    document.getElementById("storyPrompt").innerHTML = "Your Initiative is " + charInit 
}