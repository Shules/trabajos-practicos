const fs = require('fs')
const readTasks = require('./read.js')
const readLineSync = require('readline-sync')
const write = require('./writeTaskData.js')

const update = () => {
    
  const findTitle = readLineSync.question("Ingrese la tarea para actualizar: ")

  const newDesc = readLineSync.question("Ingrese la nueva descripcion: ")

  const tasks = readTasks()

  const updateTask = (title, desc) => {
    title = findTitle;
    desc = newDesc;
    for (i = 0; i < tasks.length; i++) {
      if (title == tasks[i].title) {
        tasks[i].desc = desc
      }
    }

    write(tasks)

  }

  updateTask()

}

module.exports = update;

