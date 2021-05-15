//const { argv } = require('node:process');
const { option } = require('yargs');
const {  getCrearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

//console.log(process.argv);
console.log('base: yargs',argv.b, 'listar:',argv.l, 'Hasta: ',argv.h);

/*const [ , , arg3='base=5'] = process.argv;
const[ , base] = arg3.split('=');*/

//crearArchivo(multiplo);

getCrearArchivo(argv.b,argv.l,argv.h)
    .then ( nombreArchivo  => console.log(nombreArchivo,'Creado Correctamente'))
    .catch ( error => console.log(error));
/*fs.writeFile( 'tabla-5.txt', salida , (error)=>{

    if (error) throw error;

    console.log( 'tabla-5.txt creado' );

} );*/

//esta opcion es mas simple, pero hay que controlar los errores con try catch
