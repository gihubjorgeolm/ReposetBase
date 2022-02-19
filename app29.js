/*
https://nodejs.org/docs/latest-v15.x/api/fs.html#fs_fspromises_writefile_file_data_options

*/
const fs = require('fs');
////import { writeFile } from 'fs/promises';

const base = 5;
const mino = 1;
const topo = 10;
const filo = `tabla-${base}.txt`;
let data = ''; ////  = Array[topo];// Uint8Array(Buffer.from('Hello Node.js'));

console.clear();
data = "=========\n"
+`  Tabla del: ${base}\n`
+"=========\n";
for (let inco = mino; inco <= topo; inco++) {
    data += `${base} x ${inco} = ${base * inco}\n`;
}
console.log(data);
fs.writeFileSync(filo, salida);

/*
Mejor que: menos codigo
fs.writeFile(filo, data, (err) => {
    if (err) throw err;
    console.log(`${filo} creado`);
});
*/
