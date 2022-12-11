// Waiting for the Dom to finish loading before start the game
// Get button elelemnts and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
     for (let button of buttons){
        button.addEventListener("click", function() {
        if (this.getAttribute("data-type")==="submit") {
        alert("You clicked Submit!");
    } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked the ${gameType}`);

        }
     })
    }
})
/** 
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    //Creates two random number between 1 and 25
    let num1= Math.floor(math.random() * 25) + 1;
    let num2 = Math.floor(math.random() * 25) + 1;

}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){}