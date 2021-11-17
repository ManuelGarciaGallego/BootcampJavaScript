var operandA = () => parseInt(document.getElementById("input1").value);
var operandB = () => parseInt(document.getElementById("input2").value);


var sum = () => operandA() + operandB();
var subtraction = () => operandA() - operandB();
var multiplication = () => operandA() * operandB();
var division = () => operandA() / operandB();


var resultSum = () => document.getElementById("result").innerText = "El resultado es: " + sum();
var resultSubtraction = () => document.getElementById("result").innerText = "El resultado es: " + subtraction();
var resultMultiplication = () => document.getElementById("result").innerText = "El resultado es: " + multiplication();
var resultDivision = () => document.getElementById("result").innerText = "El resultado es: " + division();


document.getElementById("button-sum").addEventListener("click", condResultSum);
document.getElementById("button-subtraction").addEventListener("click", condResultSubtraction);
document.getElementById("button-multiplication").addEventListener("click", condResultMultiplication);
document.getElementById("button-division").addEventListener("click", condResultDivision);


function condResultSum () {
    if (isNaN(operandA()) || isNaN(operandB())) {
        document.getElementById("result").innerText = "Atención, debe incluir números.";
    } else {
        resultSum();
    }
}
     
function condResultSubtraction () {
    if (isNaN(operandA()) || isNaN(operandB())) {
        document.getElementById("result").innerText = "Atención, debe incluir números.";
    } else {
        resultSubtraction();
    }
}

function condResultMultiplication () {
    if (isNaN(operandA()) || isNaN(operandB())) {
        document.getElementById("result").innerText = "Atención, debe incluir números.";
    } else {
        resultMultiplication();
    }
}

function condResultDivision () {
    if (isNaN(operandA()) || isNaN(operandB())) {
        document.getElementById("result").innerText = "Atención, debe incluir números.";
    } else {
        resultDivision();
    }
}




