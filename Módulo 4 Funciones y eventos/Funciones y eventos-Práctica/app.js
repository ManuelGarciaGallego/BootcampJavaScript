
// function submitName () {
//     var fullName;

// var name = document.getElementById ("input-name").value;
// fullName = name;

// var surname = document.getElementById("input-surname").value;
// fullName = fullName + " " + surname;

// var secondSurname = document.getElementById("input-secondSurname").value;
// fullName = fullName + " " + secondSurname;

// document.getElementById("full-name").innerText = "fullName";

// }

// document.getElementById("button-submit").addEventListener("click", submitName);
 



// Alternativa.

// function submitName () {
   
// var name = document.getElementById("input-name").value;
// var surname = document.getElementById("input-surname").value;
// var secondSurname = document.getElementById("input-secondSurname").value;
// document.getElementById("full-name").innerText = name + " " + surname + " " + secondSurname;
// } 
// document.getElementById("button-submit").addEventListener("click", submitName);




// Arrow function.

// var getName = () => document.getElementById("input-name").value;
// var getSurname = () => document.getElementById("input-surname").value;
// var getSecondSurname = () => document.getElementById("input-secondSurname").value;
// var getFullName = () => getName() + " " + getSurname() + " " + getSecondSurname();
// var submitName = () => document.getElementById("full-name").innerText = getFullName();

// document.getElementById("button-submit").addEventListener("click", submitName);



//  Con evento "keyup".  

var getName = () => document.getElementById("input-name").value;
var getSurname = () => document.getElementById("input-surname").value;
var getSecondSurname = () => document.getElementById("input-secondSurname").value;
var getFullName = () => getName() + " " + getSurname() + " " + getSecondSurname();

var submitName = () => {
    document.getElementById("full-name").innerText = getFullName();
};

document.getElementById("input-name").addEventListener("keyup", submitName);
document.getElementById("input-surname").addEventListener("keyup", submitName);
document.getElementById("input-secondSurname").addEventListener("keyup", submitName);










