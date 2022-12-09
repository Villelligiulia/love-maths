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
function runGame(){

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