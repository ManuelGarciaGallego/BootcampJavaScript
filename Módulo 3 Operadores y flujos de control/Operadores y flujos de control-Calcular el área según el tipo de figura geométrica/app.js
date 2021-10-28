var square = {
    sideOne: 1,
    sideTwo: 3,
    typeOfGeometricFigure: "Cuadrado",

}

var circle = {
    radius: 5,
    typeOfGeometricFigure: "Círculo",

}


squareArea = square.sideOne * square.sideTwo;

const Pi = 3.14;
circleArea = Pi * circle.radius * 5;

let typeOfGeometricFigure = "Cuadrado";

switch (typeOfGeometricFigure) {
    case "Cuadrado":
    console.log("Área del cuadrado:", typeOfGeometricFigure = squareArea); break;
    case "Círculo":
    console.log("Área del círculo:", typeOfGeometricFigure = circleArea); break;

}