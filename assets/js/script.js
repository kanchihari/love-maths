//Wait for the DOM to finish loading before running the game
// Get the button elemrnts and add event listeners to them

document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName("button");
    //here in the for loop we are using for(let i=0;i<buttons.length;i++)same expression in different way
    for(let button of buttons){
        button.addEventListener("click",function(){
            if(this.getAttribute("data-type") ==="submit"){
                alert("You clicked submit!");
            }else{
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);//using the dollar sign and curly braces to reffer to the game type
            }
        })

    }
})

/**
 * The main game"loop",called when the script is first loaded
 * and after the user's answer has processed
 */
function rungame(){
    //Creates two random numbers between 1 and 25
    let num1=Math.floor(Math.random() * 25)+1;
    let num2=Math.floor(Math.random() * 25)+1;
}
function chechAnswer(){

}
function calculateCorrectAnswer(){

}
function incorrectScore(){

}
function incrementWorngAnswer(){
    
}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}
