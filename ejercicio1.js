/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos
 * los elementos en el arreglo.
 *
 */

var arraySum = function(array) {
  
 var x=0;
 for (var i = 0; i < array.length; i++) {
  
    x=array[i]+x;

 }
 return x;
 
};

// Prueba (No modificar)

var a = [1, 2, 3, 4, 5];
var b = [-1, -2, -3, -4, -5];
var c = [2];

if (arraySum(a) === 15 &&
    arraySum(b) === -15 &&
    arraySum(c) === 2) {
  console.log('Ejercicio 1 paso la prueba!');
} else {
  console.log('Ejercicio 1 no paso la prueba! =(');
}
