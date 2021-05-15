const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true, //obliga al usuario a enviar algo
                describe: 'Es la base de multiplicar'
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: false, //obliga al usuario a enviar algo,
                default:false
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: false, //obliga al usuario a enviar algo,
                default:10,
                describe: ' Limite de multiplicador '
            })
            .check (( argv , options ) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número';
                }
                return true;
            })
            .argv;


module.exports = argv;