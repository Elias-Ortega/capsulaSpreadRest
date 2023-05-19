import {readFileSync} from "fs";
import { parse} from "csv-parse/sync";

/* Spread- Rest*/
/* Rest(...) */
//Operador Rest unifica valores desde valores independientes hacia un arreglo.
const operadorRest = (...rest) => {
   rest.forEach((elemento) => {
        console.log(elemento);
   });
}

operadorRest('uno', 'dos', 'tres', 'cuatro','cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez');

/* Operador Spread propaga valores desde un conjunto de datos como un arreglo o un objeto y los 
separa en valores independientes */
const operadorSpread = (spread) => {
    console.log(...spread);
}

const arregloPalabrasNumeros = ['uno', 'dos', 'tres', 'cuatro','cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez']
console.log(arregloPalabrasNumeros);
operadorSpread(arregloPalabrasNumeros);//operador spread genera una propagacion del arreglo y cada valor lo trabaja de forma independiente

const leerArchivo = nombreArchivo  => parse(readFileSync(`${nombreArchivo}.csv`, 'utf-8'));

console.log(leerArchivo('datosUno'));
console.log(leerArchivo('datosDos'));

 const formarArreglos = (...arreglos) => {
    arreglos = [...arreglos[0], ...arreglos[1]];//separa con spread los arreglos independientes y luego los une dentro de un nuevo arreglo (numeros 1 al 20)
    console.log(arreglos);
 }   

formarArreglos(leerArchivo('datosUno')[0],leerArchivo('datosDos')[0] );