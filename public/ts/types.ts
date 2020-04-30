console.log('Hola TypeScript');

function add(a: number, b: number) {
  return a + b;
}

const sum = add(3, 8);
console.log(sum);

/**
 * Types
 * @boolean
 */
let muted: boolean = true;
muted = false;
// Error
//muted = 'Silencio'
/**
 * @number
 */
let numerador: number = 42;
let denominador: number = 6; // '6' o "6" -> Error
let resultado = numerador / denominador;

/**
 * @string
 */

let nombre: string = 'David';
let saludo = `Me llamo ${nombre}`;

/**
 * @Array
 */
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
/// people.push(900)  -> Error, no es string
people.push('900'); // -> Ok!

//Array de tipo combinado -> (|) -> PIPE <- OR
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push(900);
peopleAndNumbers.push('900'); // -> Ok!

/**
 * @enum
 */

/*
[0, 1, 2, ...]
enum Color0 {
  Rojo,
  Verde,
  Azul,
}
*/

/**
 * [rojo, azul, verde, ...]
 */
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es: ${colorFavorito}`);

//let colorFavorito: Color = Color.Amarillo ->> No válido. no existe

/**
 * @any
 */

// Puede tener cualquier tipado y cambiar el mismo
let comodin: any = 'Joker';
comodin = { type: 'Card' };

/**
 * @object
 */

let someObject: object = { type: 'Card' };
