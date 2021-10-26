const product = { count: 3, price: 12.55, type: "libro" };

let precioTotal;
if (product.count > 0) {
    precioTotal = product.count * product.price;
}else {
    precioTotal = 0;
}

console.log("Precio total sin iVA:", precioTotal + "€");


let ivaAlimentación;
if (product.count > 0) {
    ivaAlimentación = 10;
}else {
    ivaAlimentación = 0;
}

 
let ivalibro;
if (product.count > 0) {
    ivalibro = 4;
}else {
    ivalibro = 0;
}


let ivadefault;
if (product.count > 0) {
    ivadefault = 21;
}else {
    ivadefault = 0;
}


switch (product.type) {
    case "alimentación": 
    console.log("Tipo de IVA aplicado a alimentación:", + ivaAlimentación +"%");
    console.log("IVA aplicado a alimentación:", precioTotal * 0.1 + "€"); 
    console.log("Precio total alimentación con IVA:", precioTotal * 0.1 + precioTotal + "€"); break;

    case "libro": 
    console.log("Tipo de IVA aplicado a libro:", + ivalibro + "%");  
    console.log("IVA aplicado a libro:", precioTotal * 0.04 + "€"); 
    console.log("Precio total libro con IVA:", precioTotal * 0.04 + precioTotal + "€"); break;

    default: 
    console.log("Tipo de IVA aplicado a otro tipo de articulo:", + ivadefault + "%"); 
    console.log("IVA aplicado a otro tipo de producto:", precioTotal * 0.21 + "€"); 
    console.log("Precio total otro tipo de producto con IVA:", precioTotal * 0.21 + precioTotal + "€");break;
    
};























