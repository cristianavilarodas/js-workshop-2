/*
 * Ejercicio 3: Duplica el contenido de los valores del arreglo
 *
 * e.g. [2, 3, 4] -> [4, 6, 8]
 *
 *
 */

 var arrayDoble = function(array, callback) {
   array.forEach(function(value, index, arr) {
     arr[index] = callback(value);
   });
 };

 var array = [2, 3, 4];

 arrayDoble(array, function(value) {
  
  return 2*value;
  
 });

// Prueba (No modificar!)

if (array.length === 3 &&
    array[0] === 4 &&
    array[1] === 6 &&
    array[2] === 8) {
  console.log('Ejercicio 3 paso el test!');
} else {
  console.log('Ejercicio 3 no paso el test!');
}
