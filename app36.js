const {crearTabla, crearTablaAsync} = require('./helpers/multiplicar');
const argsv = require('./config/yargs').argsv;

console.clear();
crearTablaAsync(argsv.base, argsv.listar)
    .then(nombreArchivo => console.log('Archivo creado: ', nombreArchivo))
    .catch(err => console.log(err));

