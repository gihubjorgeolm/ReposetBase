const {crearTabla, crearTablaAsync} = require('./helpers/multiplicar');

console.clear();
const base = 10;
crearTablaAsync(base)
    .then(nombreArchivo => console.log('Tabla multiplicar creada: ', nombreArchivo))
    .catch(err => console.log(err));

