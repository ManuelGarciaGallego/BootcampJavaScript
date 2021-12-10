const cart = [
    {
      id: 198752,
      name: "Tinta DJ27 Color",
      price: 52.95,
      count: 3,
      premium: true
  }, {
      id: 75621,
      name: "Impresora ticketera PRO-201",
      price: 32.75,
      count: 2,
      premium: true
  }, {
      id: 54657,
      name: "Caja de rollos de papel para ticketera",
      price: 5.95,
      count: 3,
      premium: false
  }, {
      id: 3143,
      name: "Caja de folios DIN-A4 80gr",
      price: 9.95,
      count: 2,
      premium: false
  } ];


// // Mostrar el carrito de la compra o listar todos los productos:

// console.log("---- Show cart or list product ----")

// for (product of cart) {
//     print(product);
// } 

// function print(product) {
//     console.log("---- Product ----")
//     for (property in product) {
//         console.log(property + ": " + product[property]);
//     }
// }




// Eliminar el producto con id 54657 del carrito de la compra:

// console.log("---- Remove product from cart ----");

// let index;

// for (i = 0; i < cart.length; i++) {
//     if (cart[i].id == 54657) {
//         index = i;
//     }  
// }

// cart.splice(index, 1);

// for (product of cart){
//     print(product);
// }

// function print(product) {
//     console.log("---- Product ----")
//     for (property in product) {
//         console.log(property + ": " + product[property]);
//     }
// }




// Calcular el total del carrito de la compra:

// console.log("---- Cart total ----");

//   let totalCart = 0;

// for (product of cart) {
//     totalCart += product.price * product.count;
// }
// console.log("Total shopping cart: " + totalCart + "€");




// Filtar los productos que sean premium:

// console.log("---- Filter premium products ----");

// for (product of cart) {
//     if (product.premium == true) {
//         print(product);
//     }
// }

// function print(product) {
//     console.log("---- Product ----")
//     for (property in product) {
//         console.log(property + ": " + product[property]);
//     }
// }

// Alternativa con array vacio y añadiendole los productos premium.

// premiumList = [];

// for (i = 0; i < cart.length; i++) {
//     if (cart[i].premium == true) {
//         premiumList.push(cart[i]);
//     }
// }

// console.log(premiumList);




// Si todos los productos son premium mostrar un mensaje "Pedido sin gastos de envio", si no "Este pedido tiene gasto de envio":

// console.log("---- Show message ----");

//  let premium = true;

// for (product of cart) {
//     if (product.premium == false) {
//         premium = false;
//     }
// }

// if (premium == true){
//     console.log("Pedido sin gasto de envio.");

// }else {
//     console.log("Este pedido tiene gastos de envio.");
// }




// Mostrar el carrito en un listado de html básico:

// document.write("<h2>Shopping cart:</h2>");

// for (product of cart) {
//     document.write("<li>" + product.name + ". " + "Price: " + product.price + "€. " + "Count: " + product.count + "." + "</li>");
// }


    
  
// Aplicar un descuento del 5% si la compra es mayor de 100€.

// console.log("---- 5% Discount -----");

// totalCart = 0;

// for (product of cart) {
//     totalCart += product.price * product.count;
// }
// console.log("Total shopping cart: " + totalCart + "€");
 

// if (totalCart > 100) {
//     totalDiscount = totalCart * 0.05;
//     totalCart = totalCart - totalDiscount;
// }
//  console.log("Discount applied: " + totalDiscount + "€");
//  console.log("Total purchase with discount: " + totalCart + "€");

