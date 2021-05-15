
const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = ( multiplo) =>{
    
    let salida = '';

    salida+="=====================================\n";
    salida+=`             TABLA DEL ${multiplo}\n`;
    salida+="=====================================\n";

    for (let index = 1; index <=10; index++) {

        salida += ` ${multiplo} x ${index} = ${multiplo*index}\n`;

        fs.writeFileSync( `tabla-${ multiplo }.txt`, salida );

        console.log(`base-${multiplo}.txt creado correctamente`);
    }


}

const getCrearArchivo = async(multiplo,listar,hasta)=>{

    //resolve es un callback, se ejecuta cuando todo sale bien
    //reject se ejecuta cuando las cosas salen mal 

    try {
        let salida = '';

        salida+="=====================================\n";
        salida+=`             TABLA DEL ${multiplo}\n`;
        salida+="=====================================\n";

        (!hasta)
        ? hasta= 10
        : hasta = hasta

        for (let index = 1; index <=hasta; index++) {

            salida += ` ${colors.red (multiplo)} x ${colors.yellow(index)} = ${colors.blue(multiplo*index)}\n`;

        }

        (listar == true)
        ? console.log(salida)
        : 
        fs.writeFileSync(`./salida/tabla-${ multiplo }.txt`, salida );

       return colors.rainbow(`base-${multiplo}.txt`);
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCrearArchivo
}