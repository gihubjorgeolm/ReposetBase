const {crearTabla, crearTablaAsync} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearTablaAsync(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log('Archivo creado: ', nombreArchivo))
    .catch(err => console.log(err));

