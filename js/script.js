/*----- constants -----*/
// Number buttons
// = button will be result after pressed
// grabbing the button being clicked  correctly identifies order of opertion
const NUMBERS = [1,2,3,4,5,6,7,8,9,0]
const OPERATORS = ['+','-','/','=','*','.',]
// const clearButton = function();

//======================================================

// number being clicked (square being clicked) feed into a function that we declared

// const calculator = document.querySelector('main')
// const keys = document.querySelector('.calculator-base')
const numberOne = document.getElementById('.one')

numberOne.addEventListener('click', testing)

function testing(){
    console.log('this is number one')
}

function add(numOne, numTwo) {
    let result = numOne + numTwo
    return result
};

function subtract(numOne, numTwo) {
    let result = numOne - numTwo
    return result
};
    function divide(numOne, numTwo) {
        if (numTwo === 0){
        prompt("You can't do this function!")
        return 0
    }
    let result = numOne / numTwo
        return result
};
function multiply(numOne, numTwo) {
    let result = numOne * numTwo
    return result
};

// const calculator = Main.querySelector('.calulator-base')
// const button = calculator.querySelector('calculator-base.square')


//for addition
//numOne and numTwo to add up and return result




// function test(){
//     console.log("This test worked")
// }
