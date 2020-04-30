// Funciones
/**
 * (): type
 */
function add(a: number, b: number): number {
  return a + b;
}

const suma = add(45, 20);

/**
 * @return functions
 */

function createAdder(a: number): (number) => number {
  return function (b: number): number {
    return a + b;
  };
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

/**
 *
 * @param lastName --> Parámetro opcional
 */

function fullNameOptional(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}
/**
 *
 * @param firstName
 * @param lastName --> Parámetro por defecto
 */
function fullNameDefault(
  firstName: string,
  lastName: string = 'Johnson'
): string {
  return `${firstName} ${lastName}`;
}

const davidOpcional = fullNameOptional('David');
const davidDefecto = fullNameDefault('David');

console.log(davidOpcional);
console.log(davidDefecto);
