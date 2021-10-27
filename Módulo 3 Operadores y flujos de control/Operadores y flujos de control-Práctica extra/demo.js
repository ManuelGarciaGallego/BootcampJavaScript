const booking1 = { count: 3, price: 127.95 };
const booking2 = { count: 5, price: 112.95 };

// if (booking1.count = booking2.count && booking1.price == booking2.price) {
//     console.log("Son iguales");
// }else {
//     console.log("No son iguales");

// }


// const totalnoches = booking1.count + booking2.count;
// console.log("Número total de noches:", totalnoches);

// console.log("Número total de noches:", booking1.count + booking2.count);


// const Númeronoches = booking1.count > booking2.count ? booking1 : booking2;
// console.log("Reserva con mayor número de noches",Númeronoches);


// const Ampliaciónreserva = (booking1.count++);
// console.log(Ampliaciónreserva, booking1.count);



// let ReservaConDescuento = 0;


if (booking1.count * booking1.price > 500) {
    ReservaConDescuento++;

}

if (booking2.count * booking2.price > 500) {
    ReservaConDescuento++;
}

console.log("Reservas a las que se puede aplicar descuento:", ReservaConDescuento);


