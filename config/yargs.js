/*
Ejemplo: Invoca de manera asincrona
*/

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default:1,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Habilita listado de la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Elementos en la tabla'
    })
    .check((argv, options) => {
        if ( isNaN(argv.b) ) {
            throw 'Param error: La base debe ser numerica';
        }
        return true;
    })
    .argv;

module.exports = argv;
