// var roomRate = () =>  Number(document.getElementById("select-typeRoom").value);
// var spaRate = () => document.getElementById("input-Spa").checked ? 20 : 0;
// var occupancyRate = () => Number(document.getElementById("select-occupation").value);       
// var nights = () => Number(document.getElementById("input-nights").value);
// var parking = () => Number(document.getElementById("input-parking").value);

// var reserveCalculationOne = () => (roomRate() + spaRate()) * occupancyRate();
// var reserveCalculationTwo = () => reserveCalculationOne() * nights();
// var reserveCalculationThree = () => reserveCalculationTwo() + (parking() > 0 ? parking() * 10 : 0 );

// var totalReserve = () => {
//     document.getElementById("result").innerText = "Total reserva: " + reserveCalculationThree() + " €";
// }

// document.getElementById("button-calculate").addEventListener("click", totalReserve);





// Opción más reducida pero quizás más farragosa:

// var roomRate = () =>  Number(document.getElementById("select-typeRoom").value);
// var spaRate = () => document.getElementById("input-Spa").checked ? 20 : 0;
// var occupancyRate = () => Number(document.getElementById("select-occupation").value);       
// var nights = () => Number(document.getElementById("input-nights").value);
// var parking = () => Number(document.getElementById("input-parking").value);
// var reserveCalculation = () => (((roomRate() + spaRate()) * occupancyRate()) * nights()) + (parking() > 0 ? parking() * 10 : 0 );

// var totalReserve = () => {
//     document.getElementById("result").innerText = "Total reserva: " + reserveCalculation() + " €";
// }

// document.getElementById("button-calculate").addEventListener("click", totalReserve);





// Opcional, resultado total a medida que se producen cambios en el formulario:

var roomRate = () =>  Number(document.getElementById("select-typeRoom").value);
var spaRate = () => document.getElementById("input-Spa").checked ? 20 : 0;
var occupancyRate = () => Number(document.getElementById("select-occupation").value);       
var nights = () => Number(document.getElementById("input-nights").value);
var parking = () => Number(document.getElementById("input-parking").value);
var reserveCalculation = () => (((roomRate() + spaRate()) * occupancyRate()) * nights()) + (parking() > 0 ? parking() * 10 : 0 );

var totalReserve = () => {
    document.getElementById("result").innerText = "Total reserva: " + reserveCalculation() + " €";
}

document.getElementById("select-typeRoom").addEventListener("change", totalReserve);
document.getElementById("input-Spa").addEventListener("change", totalReserve);
document.getElementById("select-occupation").addEventListener("change", totalReserve);
document.getElementById("input-nights").addEventListener("change", totalReserve);
document.getElementById("input-parking").addEventListener("change", totalReserve);


