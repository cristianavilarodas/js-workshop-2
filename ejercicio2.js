/*
 *
 * Ejercicio 2: Dado un arreglo de personas,
 * retorne el color de cabello de la personaa mas vieja.
 *
 * Una personaa es un objeto con los siguientes atributos:
 *    nombres: String
 *    apellidos: String
 *    edad: Number
 *    colorCabello: String
 */

var colorCabello = function(personas) {

  var edadDelMayorActual=-1;
  var posicionDelMayorActual =-1 ;
  for (var i = 0; i < personas.length; i++) {
  
    var edadDePersonaActual=personas[i].edad;
    if(edadDePersonaActual>edadDelMayorActual) {
    posicionDelMayorActual=i;
    edadDelMayorActual=edadDePersonaActual;}
  
  }
  return personas[posicionDelMayorActual].colorCabello;

};

// Prueba (No modificar)

var persona1 = {
  nombres: 'Kirk',
  apellidos: 'Hummer',
  edad: 27,
  colorCabello: 'Rubio'
};
var persona2 = {
  nombres: 'Homero',
  apellidos: 'Simpson',
  edad: 30,
  colorCabello: 'Cafe Oscuro'
};
var persona3 = {
  nombres: 'Eric',
  apellidos: 'Cartman',
  edad: 10,
  colorCabello: 'Cafe'
};

var personas1 = [persona1];
var personas2 = [persona1, persona3];
var personas3 = [persona1, persona2, persona3];

if (colorCabello(personas1) === 'Rubio' &&
    colorCabello(personas2) === 'Rubio' &&
    colorCabello(personas3) === 'Cafe Oscuro') {
  console.log('Ejercicio 2 paso el test!');
} else {
  console.log('Ejercicio 2 no paso el test!');
}
