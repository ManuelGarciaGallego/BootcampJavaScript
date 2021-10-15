var hotel = {
   name: "",
   location: "",

};
                                             
//console.log("hola");
hotel.name = prompt("Introduce el nombre del hotel");
//console.log(nameHotel);
document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;
hotel["location"] = prompt("Introduce la localización del hotel")
document.getElementById("hotel-location").innerHTML = hotel["location"];
console.log(hotel);