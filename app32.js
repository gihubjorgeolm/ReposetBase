/*

Paquete que usa los parametros de linea de comandos
*/

const {crearTabla, crearTablaAsync} = require('./helpers/multiplicar');

console.clear();
console.log(process.argv);
const[ , , arg3='base=1'] = process.argv;
const[, base=1] = arg3.split('=');

if (base) {
    crearTablaAsync(base)
        .then(nombreArchivo => console.log('Archivo creado: ', nombreArchivo))
        .catch(err => console.log(err));
}
