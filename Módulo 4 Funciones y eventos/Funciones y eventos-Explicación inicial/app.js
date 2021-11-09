// Calcular peso ideal con la siguiente fórmula; (altura en centímetros - 150 * 0.75 ó 0.60 + 50).


// Con funciones clásicas.

// informePesoIdeal(1.8, 73, "hombre");

// function informePesoIdeal (altura, peso, sexo) {
//     var pesoIdeal = calcularPesoIdeal (sexo , altura);
//     var excesoPeso = calcularExcesoDePeso (peso, pesoIdeal);
//     console.log(notificapesoIdeal(pesoIdeal));
//     console.log(notificaEstadoDeSobrepeso(excesoPeso));
// }

// function calcularPesoIdeal (sexo, altura) {
//     var factor = sexo === "hombre" ? 0.75 : 0.60;
//     return (altura * 100 - 150) * factor + 50;
// }

// function calcularExcesoDePeso (pesoActual, pesoIdeal) {
//     return pesoActual - pesoIdeal ;
// }

// function notificapesoIdeal (pesoIdeal) {
//     return "Su peso ideal sería: " + pesoIdeal + " kilogramos.";
// }

// function notificaEstadoDeSobrepeso (excesoPeso) {
//     if (excesoPeso >= 1) {
//         return "Su peso esta por encima del peso ideal en: " + excesoPeso +  " kilogramos.";
    
//     }else if (excesoPeso <= -1) {
//             return "Su peso esta por debajo del peso ideal en: " + (excesoPeso * -1) + " kilogramos.";
        
//     }else {
//         return "Su peso es el ideal para su altura y sexo.";
//     }
    
// }




// Usando como dato un objeto.

// var person = {
//     altura: 1.80,
//     peso: 73,
//     sexo: "hombre",
// }
// informePesoIdeal(person);

// function informePesoIdeal (person) {
//     var pesoIdeal = calcularPesoIdeal (person.sexo , person.altura);
//     var excesoPeso = calcularExcesoDePeso (person.peso, pesoIdeal);
//     console.log(notificapesoIdeal(pesoIdeal));
//     console.log(notificaEstadoDeSobrepeso(excesoPeso));
// }

// function calcularPesoIdeal (sexo, altura) {
//     var factor = sexo === "hombre" ? 0.75 : 0.60;
//     return (altura * 100 - 150) * factor + 50;
// }

// function calcularExcesoDePeso (pesoActual, pesoIdeal) {
//     return pesoActual - pesoIdeal ;
// }

// function notificapesoIdeal (pesoIdeal) {
//     return "Su peso ideal sería: " + pesoIdeal + " kilogramos.";
// }

// function notificaEstadoDeSobrepeso (excesoPeso) {
//     if (excesoPeso >= 1) {
//         return "Su peso esta por encima del peso ideal en: " + excesoPeso +  " kilogramos.";
    
//     }else if (excesoPeso <= -1) {
//             return "Su peso esta por debajo del peso ideal en: " + (excesoPeso * -1) + " kilogramos.";
        
//     }else {
//         return "Su peso es el ideal para su altura y sexo.";
//     }
    
// }




// con arrow fuction.


var informePesoIdeal = (altura, peso, sexo) => {
    var pesoIdeal = calcularPesoIdeal (sexo, altura)
    console.log(notificapesoIdeal(pesoIdeal));
    console.log(notificaEstadoDeSobrepeso(calcularExcesoDePeso (peso, pesoIdeal)));
}

var calcularPesoIdeal = (sexo, altura) => (altura * 100 - 150) * (sexo === "hombre" ? 0.75 : 0.60) + 50;
var calcularExcesoDePeso = (pesoActual, pesoIdeal) => pesoActual - pesoIdeal ;
var notificapesoIdeal = (pesoIdeal) => "Su peso ideal sería: " + pesoIdeal + " kilogramos."; 

var notificaEstadoDeSobrepeso = (excesoPeso) => {
    if (excesoPeso >= 1) {
        return "Su peso esta por encima del peso ideal en: " + excesoPeso +  " kilogramos.";
    }else if (excesoPeso <= -1) {
            return "Su peso esta por debajo del peso ideal en: " + (excesoPeso * -1) + " kilogramos.";
    }else {
        return "Su peso es el ideal para su altura y sexo.";
    }
    
}

informePesoIdeal (1.93, 90, "hombre");




// Con código monolítico.


// var height = 1.8;
// var weight = 73;
// var sex = "man";

// var idealWeight;

// if (sex === "man") {
//     idealWeight = (height * 100 - 150) * 0.75 + 50;
// }else {
//     idealWeight = (height * 100 - 150) * 0.60 + 50;
   
// }

// console.log("Su peso ideal sería: ", idealWeight, "kilogramos.");

// // Calcular el exceso de peso con 1 kilogramo de margen respecto al peso ideal.

// overWeight = weight - idealWeight;

// if (overWeight >= 1) {
//     console.log("Su peso esta por encima del peso ideal en:", overWeight, "kilogramos.");

// }else if (overWeight <= -1) {
//         console.log("Su peso esta por debajo del peso ideal en:", overWeight * -1, "kilogramos.");
    
// }else {
//     console.log("Su peso es el ideal para su altura y sexo.");
// }

