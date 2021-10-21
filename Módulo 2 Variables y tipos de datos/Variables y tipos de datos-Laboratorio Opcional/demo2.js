var hoteles = {
    Barceló: {
      name: "Barceló",
      location: "Málaga",
      img: "https://static.barcelo.com/content/dam/bhg/master/es/hoteles/spain/andalucia/malaga/barcelo-malaga/carrusel/BMAL_EXT_14.jpg.bhgimg.optm1100.jpg/1615994986666.jpg",

    },
    "Ibis Aeropuerto": {
      name: "Ibis Aeropuerto",
      location: "Málaga",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/284308740.jpg?k=814e3efccd0c195dc8740b414d10127ff75e6985a151d05efd2a9017ad82497a&o=&hp=1",

    },   
};
 

var selectedhotel = prompt("Indique el nombre de hotel: Barceló o Ibis Aeropuerto");


document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedhotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedhotel].location;
document.getElementById("img-hotel").src = hoteles[selectedhotel].img;


var stars = {
  una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};


var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
document.getElementById("rating").innerHTML = stars[rating];




