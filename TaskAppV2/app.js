const read = require('./commands/read.js')
const create = require('./commands/create.js')
const update = require('./commands/update.js')
const erase = require('./commands/delete.js')
const readLineSync = require('readline-sync')


if (process.argv[2] == 'list') {
    
    console.log('Las tareas son las siguientes:\nAdd\nEdit\nDelete')
    
    const answer = readLineSync.question("¿Que tarea desea ejecutar? ")

const getElection = () => {
    if (answer == 'Add') {
        create()
    } else if (answer == 'Edit') {
        update();
    } else if (answer == 'Delete') {
        erase();
    }
 }

getElection()

module.exports = getElection;

}






