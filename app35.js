const {crearTabla, crearTablaAsync} = require('./helpers/multiplicar');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default:1,
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false
    })
    .check((argv, options) => {
        if ( isNaN(argv.b) ) {
            throw 'Param error: La base debe ser numerica';
        }
        return true;
    })
    .argv;
//option('l')
//listar
//boolean
//default:false


console.clear();
console.log(process.argv);
console.log(argv);
console.log('b: yargs', argv.base);
console.log('l: yargs', argv.listar);

crearTablaAsync(argv.base, argv.listar)
    .then(nombreArchivo => console.log('Archivo creado: ', nombreArchivo))
    .catch(err => console.log(err));
