//  1º Dado el siguiente objeto. Escribir en una variable un día de la semana y decir que asignatura toca ese día.

[
    {
        day: "Lunes",
        subject: "Matemáticas",
    },
    {
        day: "Martes",
        subject:"Lengua",
    },
    {
        day:"Miercoles",
        subject:"Física",
    },
    {
        day:"Jueves",
        subject:"Química",
    },
    {
        day: "Viernes",
        subject:"Gimnasia",
    },
]

const a = { day: "Lunes", subject: "Matemáticas" };
const b = { day: "Martes", subject: "Lengua" };
const c = { day: "Miércoles", subject: "Física" };
const d = { day: "Jueves", subject: "Química" };
const e = { day: "Viernes", subject: "Gimnasia" };

let dia = "Viernes";

switch (dia) {
    case a.day: console.log(a.subject); break;
    case b.day: console.log(b.subject); break;
    case c.day: console.log(c.subject); break;
    case d.day: console.log(d.subject); break;
    case e.day: console.log(e.subject); break;

}


// 2º Según una variable llamada "hora", mostrar un buenos días, buenas tardes, o buenas noches según la hora. Se utilizarán los tramos de 6 a 12, de 13 a 20, y de 21 a 5. Sólo se tienen en cuenta la horas no los minutos.


let hora = 22;

if (hora >= 6 && hora <= 12) {
    console.log("Buenos días");

}else if (hora >= 13 && hora <= 20) {
    console.log("Buenas tardes");
    
}else if (hora >= 21 && hora <= 24) {
    console.log("Buenas noches");

}else if (hora >= 0 && hora <= 5) {
    console.log("Buenas noches");

}else {
    console.log("No es una hora válida");
}

    

// 3º Dada una variable que se llame "diaSemana", que contenga un número del 1 al 7 mostrar el día de la semana correspondiente. 
 
var diaSemana = 7;

if (diaSemana == 1) console.log("Lunes");
if (diaSemana == 2) console.log("Martes");
if (diaSemana == 3) console.log("Miércoles");
if (diaSemana == 4) console.log("Jueves");
if (diaSemana == 5) console.log("Viernes");
if (diaSemana == 6) console.log("Sábado");
if (diaSemana == 7) console.log("Domingo");



// 4º Calcula la media de tres notas y muestra si está apta, no apta, notable o sobre saliente. - Una persona está apta con un 5. - Una persona está no apta con menos de un 5. - Notable de 5 a 7. - Sobre saliente de 7 al 10. 

const result = { nota1: 10, nota2: 10, nota3: 10, };

let notaMedia = (result.nota1 + result.nota2 + result.nota3) / 3; 

console.log("Nota media:",notaMedia);

if (notaMedia >=0 && notaMedia < 5) {
    console.log("No apto");

}else if (notaMedia == 5) {
    console.log("Apto");

}else if (notaMedia > 5 && notaMedia <= 7) {
    console.log("Notable");

}else if (notaMedia > 7 && notaMedia <= 10) {
    console.log("Sobre saliente");

};



// 5º Según una variable dia y otra mesNacimiento , calcular el horóscopo de la persona.

let día = 11;
let mesNacimiento = 2;

if((día >= 21 && mesNacimiento == 3)||(día <=20 && mesNacimiento == 4)) console.log("Su horóscopo sería Aries");
if((día >= 24 && mesNacimiento == 9)||(día <=23 && mesNacimiento == 10)) console.log("Su horóscopo sería Libra");
if((día >= 21 && mesNacimiento == 4)||(día <=21 && mesNacimiento == 5)) console.log("Su horóscopo sería Tauro");
if((día >= 24 && mesNacimiento == 10)||(día <=22 && mesNacimiento == 11)) console.log("Su horóscopo sería Escorpio");
if((día >= 22 && mesNacimiento == 5)||(día <=21 && mesNacimiento == 6)) console.log("Su horóscopo sería Géminis");
if((día >= 23 && mesNacimiento == 11)||(día <=21 && mesNacimiento == 12)) console.log("Su horóscopo sería Sagitario");
if((día >= 21 && mesNacimiento == 6)||(día <=23 && mesNacimiento == 7)) console.log("Su horóscopo sería Cáncer");
if((día >= 22 && mesNacimiento == 12)||(día <=20 && mesNacimiento == 1)) console.log("Su horóscopo sería Capricornio");
if((día >= 24 && mesNacimiento == 7)||(día <=23 && mesNacimiento == 8)) console.log("Su horóscopo sería Leo");
if((día >= 21 && mesNacimiento == 1)||(día <=19 && mesNacimiento == 2)) console.log("Su horóscopo sería Acuario");
if((día >= 24 && mesNacimiento == 8)||(día <=23 && mesNacimiento == 9)) console.log("Su horóscopo sería Virgo");
if((día >= 20 && mesNacimiento == 2)||(día <=20 && mesNacimiento == 3)) console.log("Su horóscopo sería Piscis");



// 6º Según una variable llamada numero , calcule si es par o impar.

let numero = 8;

(numero % 2 == 0) ? console.log(numero + " Es número par") : console.log(numero + " Es número impar");



// 7º Usa una variable y di si es positivo o negativo.

let dato = -1000;

(dato > 0) ? console.log(dato + " Tiene valor positivo") : console.log(dato + " Tiene valor negativo");



// 8º Di si un número es mayor de 100.

let number = 1000;

(number > 100) ? console.log(number + " Es mayor de 100") : console.log(number + " No es mayor de 100");



// 9º Usa 3 variables que contengan un número y di si el tercero es igual a la suma del primero y el segundo.

let num1 = 10;
let num2 = 15;
let num3 = 25;

if (num3 == num1 + num2) {
    console.log(num3 + " Es igual a la suma de " + num1 + " y " + num2);
    
} else {
    console.log(num3 + " No es igual a la suma de " + num1 + " y " + num2);
}



// 10º Según los siguientes objetos.

var square = {
    sideOne: 1,
    sideTwo: 3,
    typeOfGeometricFigure: "Cuadrado",

}

var circle = {
    radius: 5,
    typeOfGeometricFigure: "Círculo",

}


squareArea = square.sideOne * square.sideTwo;

const Pi = 3.14;
circleArea = Pi * circle.radius * 5;

let typeOfGeometricFigure = "Círculo";

switch (typeOfGeometricFigure) {
    case "Cuadrado":
    console.log("Área del cuadrado:", typeOfGeometricFigure = squareArea); break;
    case "Círculo":
    console.log("Área del círculo:", typeOfGeometricFigure = circleArea); break;

}

