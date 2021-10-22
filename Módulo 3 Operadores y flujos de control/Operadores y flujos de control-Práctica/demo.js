const booking = { count: 5, price: 127.95 };


let total = booking.count * booking.price;


// let discount = total * 0.2;


// if (total > 500) {
//      total = total - discount; 

// }else {
//     total = total;
// }
  

//  ternario de total
// total = total > 500 ? total - discount : total  

// console.log(total);

console.log("Total de la reserva sin descuento:", total + "€")

// if (total > 500 && discount > 0) {
//     console.log("Descuento aplicado:", discount + "€")
//     console.log("Total con descuento:", total - discount + "€")
// }


//   ternario de discount
discount = total > 500 ? total * 0.20 : 0;
console.log("Descuento:", discount + "€");


if (total > 500 && discount > 0) {
    const discounted = total - discount;
    console.log("Total con descuento:", discounted + "€");
}









