/*
Screen
7 8 9 +
4 5 6 -
1 2 3 x
< 0 = /
*/
let display;
let calculationBasin = "";
let operator = false;
let result;

function add(a,b) {
    [a1, b1] = [parseInt(a), parseInt(b)];
    return (a1+b1).toString();
}

function subtract(a,b) {
    [a1, b1] = [parseInt(a), parseInt(b)];
    return (a1-b1).toString();
}

function multiply(a,b) {
    [a1, b1] = [parseInt(a), parseInt(b)];
    return (a1*b1).toString();
}

function divide(a,b) {
    [a1, b1] = [parseInt(a), parseInt(b)];
    return (a1/b1).toString();
}

function checkOperate() { 
    operator = calculationBasin.includes("+") || 
               calculationBasin.includes("–") || 
               calculationBasin.includes("*") || 
               calculationBasin.includes("/");
    let operators = [...document.querySelectorAll(".operator")]
                    .map(button => button.textContent);
    return operators.filter(x => calculationBasin.includes(x))[0];
}

function operate(firstNumber, operator, secondNumber){
    switch(operator) {
        case "+":
            calculationBasin = add(firstNumber, secondNumber);
            pushBasin();
            break;
        case "–":
            calculationBasin = subtract(firstNumber, secondNumber);
            pushBasin();
            break;
        case "*":
            calculationBasin = multiply(firstNumber, secondNumber);
            pushBasin();
            break;
        case "/":
            calculationBasin = divide(firstNumber, secondNumber);
            pushBasin();
            break;
        default:
            return;
    }
}

function round(numStr){
    let newNum = parseFloat(numStr).toFixed(2).toString();
    if(newNum.endsWith(".00")){
        newNum = parseInt(newNum).toString();
    }
    if(newNum.endsWith(".0")){
        newNum = parseInt(newNum).toString();;
    }
    return newNum;
}

function clearBasin(){
    calculationBasin = "";
    checkOperate();
}
function clearDisplay(){
    display.textContent = "";
    checkOperate();
}
function pushBasin(){
    if(calculationBasin == ""){
        display.textContent = "";
        return;
    }
    display.textContent = calculationBasin;
    checkOperate();
    console.log(calculationBasin, display);
}
function pushDisplay(){
    calculationBasin = display.textContent;
    checkOperate();
}
function calculate(){
    if(calculationBasin == ""){
        return;
    }
    let [first, second] = calculationBasin.split(checkOperate());
    let sign = checkOperate();
    if(first && sign && second){
        operate(first, sign, second);
        calculationBasin = round(calculationBasin);
        result = calculationBasin;
    }
    pushBasin();
    pushDisplay();
}

function enterNumber(e) {
    if(calculationBasin == "Infinity"){
        clearBasin();
        pushBasin();
    }
    if(result == calculationBasin){
        return;
    }
    calculationBasin += e.target.textContent;
    pushBasin();
}
function enterOperator(e){
    checkOperate();
    if(!operator){
        if(!display == ""){
            calculationBasin += e.target.textContent;
            console.log(e.target.textContent);
            pushBasin();
            checkOperate();
        }
    }
    pushBasin();
}
function remove1(){
    if(calculationBasin == result) {
        clearDisplay();
        clearBasin();
        pushBasin();
    } else{
        if(calculationBasin) {
        calculationBasin = calculationBasin
                           .substring(0, calculationBasin.length-1);
    }
    }
    pushBasin();
}
window.onload = () => {

document.querySelectorAll(".number").forEach(num => 
    num.addEventListener("click", enterNumber)
);
document.querySelectorAll(".operator").forEach(op => 
    op.addEventListener("click", enterOperator)
);
document.querySelector(".delete").addEventListener("click", remove1);
document.querySelector(".equal").addEventListener("click", calculate);
display = document.getElementById("screen");
}