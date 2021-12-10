const bookings = [
{
    id: 1,
    price: 45.30,
    count: 3,
    room: "standard",
    prepaid: false,
    succeeded: true
},
{ 
    id: 2, 
    price: 92.45, 
    count: 4, 
    room: "superior", 
    prepaid: false, 
    succeeded: true
}, 
{
    id: 3, 
    price: 63.50, 
    count: 7, 
    room: "standard", 
    prepaid: true, 
    succeeded: false
},
{ 
    id: 3, 
    price: 37.50, 
    count: 2, room: "standard", 
    prepaid: true, 
    succeeded: true
},
{ 
    id: 5, 
    price: 87.90, 
    count: 5, 
    room: "superior", 
    prepaid: true, 
    succeeded: false
}
];



// listar todas las reservas del hotel:

// for (i = 0; i < bookings.length; i++) {
//     imprimir(bookings[i]);
// }

for (reserva of bookings) {
    imprimir(reserva);
}

// function imprimir(reserva) {
//     console.log("---- Reserva: " + reserva.id + " ----");
//     console.log("Precio: " + reserva.price);
//     console.log("Noches: " + reserva.count);
//     console.log("Tipo de habitacón: " + reserva.room);
//     console.log("Esta pagada: " + reserva.prepaid);
//     console.log("Error:" + !reserva.succeeded);
// }




// Crear una función que nos indique si al menos una reserva ha fallado:

function bugCheck () {
    console.log("---- bug check ----")
    let exito = true;
    exito = exito && reserva.succeeded;

    return !exito;
}
console.log("Al menos una reserva ha fallado: " + bugCheck());




// Listar las reservas que han tenido éxito:

console.log("---- Successful bookings ----")

for (reserva of bookings) {
    if (reserva.succeeded) {
        imprimir(reserva);
    } 
}




// Listar las reservas pagadas:

console.log("---- Paid reservations ----")


for (reserva of bookings) {
    if (reserva.prepaid) {
    imprimir(reserva);
    } 
}




// Calcular la suma total de precios:

console.log("---- Total price ----")


totalPrice = 0;

for (reserva of bookings) {
    totalPrice  += reserva.price * reserva.count;
}

console.log("total de las reservas: " + totalPrice + "€");




// Aplicar 10% al precio de cada reserva:

console.log("---- 10% discount ----")

for (reserva of bookings) {

    reserva.price = reserva.price * 0.9; 
    imprimir(reserva);
    
}




// Listar reservas pagadas que han fallado:

console.log("---- Paid and failed reservations -----")


for (reserva of bookings) {
    if (reserva.prepaid && !reserva.succeeded) {
        imprimir(reserva);
    } 
}


function imprimir(reserva) {
    console.log("---- Booking ----")
    for (propiedad in reserva) {
        console.log(propiedad + ": " + reserva[propiedad]);
    }
}




// Comprobar si hay reservas con el identicador repetido:


console.log("---- id repeated ----")


let repeticion = false;

for (i = 0; i < bookings.length; i++) {
    const reserva1 = bookings[i];
    for (x = i + 1; x < bookings.length; x++) {
        const reserva2 = bookings[x];
        repeticion = repeticion || reserva1.id === reserva2.id; 
        
    } 
}

console.log("¿Hay reservas con el identificador repetido?: " + repeticion);







