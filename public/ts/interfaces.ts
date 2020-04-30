// Interfaces
enum Color {
  rojo = 'Rojo',
  verde = 'Verde',
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rectangulo: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRectangulo = area(rectangulo);
console.log(areaRectangulo);

console.log(rectangulo.toString());

rectangulo.toString = function () {
  return `Un rectangulo ${this.color ? this.color : '   '}`;
};

console.log(rectangulo.toString());
