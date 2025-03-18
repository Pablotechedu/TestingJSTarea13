// Utilice la propiedad .length para encontrar el último elemento de una matriz.
// Utilice otros métodos en la documentación de MDN que no se mencionan en la lección.
// Tome todos los elementos de una matriz y cree una cadena.
// Encuentra el valor de retorno de una llamada -push()a una matriz.
// Anidar una matriz dentro de una matriz.
// Acceder a un elemento de la matriz anidada.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`"Length de Array" : ${array.length}`);
console.log(`"Ultimo elemento de matriz" : ${array[array.length - 1]}`);
console.log(
  `"Ultimo elemento de matriz metodo alternativo 1" : ${array.at(-1)}`
);
console.log(
  `"Ultimo elemento de matriz metodo alternativo 2" : ${array.slice(-1)[0]}`
);
convertToString = array.toString();
console.log(
  `"Tipo de variable convertida en array" : ${typeof convertToString}`
);
console.log(`"Valor de retorno de una llamada Push" : ${array.push(11)}`);
console.log(`"Array original" ${array}`);
const array2 = [12, 13, 14];
array.push(array2);
console.log(`"Array anidado"${array}`);
console.log(`"Acceder a un elemento de matriz anidada" : ${array[11][1]}`);
 