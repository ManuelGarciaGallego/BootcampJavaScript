var operandA = () => parseInt(document.getElementById("input1").value);
var operandB = () => parseInt(document.getElementById("input2").value);


var sum = () => operandA() + operandB();
var subtraction = () => operandA() - operandB();
var multiplication = () => operandA() * operandB();
var division = () => operandA() / operandB();


var resultSum = () => document.getElementById("result").innerText = sum();
var resultSubtraction = () => document.getElementById("result").innerText = subtraction();
var resultMultiplication = () => document.getElementById("result").innerText = multiplication();
var resultDivision = () => document.getElementById("result").innerText = division();


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




