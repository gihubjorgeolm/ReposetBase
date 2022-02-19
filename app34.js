const {crearTabla, crearTablaAsync} = require('./helpers/multiplicar');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default:1,
    })
    .check((argv, options) => {
        if ( isNaN(argv.b) ) {
            throw 'Param error: La base debe ser numerica';
        }
        return true;
    })
    .argv;

console.clear();
console.log(process.argv);
console.log(argv);
console.log('b: yargs', argv.base);
console.log('l: yargs', argv.listar);

crearTablaAsync(argv.base)
    .then(nombreArchivo => console.log('Archivo creado: ', nombreArchivo))
    .catch(err => console.log(err));
