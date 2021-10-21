var hotel = {
    name: "Barceló",
    location: "Málaga",
    img: "https://static.barcelo.com/content/dam/bhg/master/es/hoteles/spain/andalucia/malaga/barcelo-malaga/carrusel/BMAL_INT_84.jpg.bhgimg.optm1100.jpg/1604511181638.jpg",
  
  };
  
  document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
  document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotel.location;
  document.getElementById("img-hotel").src = hotel.img;


var rating = prompt("Puntuación: del 1 al 5");
document.getElementById("rating").innerHTML = rating + " estrellas";


var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;

