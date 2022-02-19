/*
Ejemplo: Invoca de manera asincrona
*/

const fs = require('fs');
const colors = require('colors');

const crearTabla = (b = 1) => {
    return new Promise((resolve, reject) => {
        const mino = 1;
        const topo = 100;
        const filo = `./salida/tabla-${b}.txt`;
        let data = "=========\n"
        +`  Tabla del: ${b}\n`
        +"=========\n";
    
        for (let inco = mino; inco <= topo; inco++) {
            data += `${b} x ${inco} = ${b * inco}\n`;
        }
        console.log(data);
        fs.writeFileSync(filo, data);
        resolve(filo);
    });
}

const crearTablaAsync = async (b=1, l=false, h=10) => {
    const mino = 1;
    const topo = h;
    const filo = `./salida/tabla-${b}.txt`;
    let arco = "=========\n"
    +`  Tabla del: ${b}\n`
    +"=========\n";
    let consola = "=========\n".green
    +'  Tabla del: ' + `(${b})`.blue + "\n".green
    +"=========\n".green;

    for (let inco = mino; inco <= topo; inco++) {
        arco += `${b} x ${inco} = ${b * inco}\n`;
        consola += `${b} ${'x'.green} ${inco} ${'='.green} ${b * inco}\n`;
    }
    if (l) {
        console.log(consola);
    }
    fs.writeFileSync(filo, arco);
    return filo;
}

const crearTablaASCIIAsync = async (l=false) => {
    //const base = 5;

    const mino = 1;
    const topo = 10;
    const filo = `./salida/tabla-${b}.txt`;
    let data = "=========\n"
    +`  Tabla del: ${b}\n`
    +"=========\n";

    for (let inco = mino; inco <= topo; inco++) {
        data += `${b} x ${inco} = ${b * inco}\n`;
    }
    if (l)
        console.log(data);

    fs.writeFileSync(filo, data);
    return filo;
}

module.exports = {
    crearTabla
    ,crearTablaAsync
}
