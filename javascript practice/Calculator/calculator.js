/*
Screen
7 8 9 +
4 5 6 -
1 2 3 x
< 0 = /
*/
let num1 = false;
let operator = false;
let num2 = false;
let display = "";
let calculationBasin;

function add(a,b) {
    return a+b ;
}

function subtract(a,b) {
    return a-b ;
}

function multiply(a,b) {
    return a*b ;
}

function divide(a,b) {
    return a/b ;
}

function operate(firstNumber, operator, secondNumber){
    switch(operator) {
        case "+":
            display = add(firstNumber, secondNumber);
        case "-":
            display = subtract(firstNumber, secondNumber);
        case "*":
            display = multiply(firstNumber, secondNumber);
        case "/":
            display = divide(firstNumber, secondNumber);
        default:
            display = "";
    }
}

function clearBasin(){
    calculationBasin = "";
}
function clearDisplay(){
    display = "";
}
function pushBasin(){
    display = calculationBasin;
    clearBasin();
}
function pushBasin(){
    calculateBasin = display;
    clearDisplay();
}
function calculateBasin(){
    calculateBasin = operate(...calculateBasin.split);
    pushBasin();
}

function enterNumber(e) {
    calculationBasin += e.target.textContent;
}
function enterOperator(e){
    if(!operator){
        if(display == ""){
            calculationBasin += e.target.textContent;
        }
    }
}
