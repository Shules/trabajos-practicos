const fs = require('fs')
const path = require("path")
const readTasks = require('./read.js')
const readLineSync = require('readline-sync')
const write = require('./writeTaskData.js')


const erase = () => {

  const eraseTitle = readLineSync.question("Ingrese la tarea para borrar: ")

  const tasks = readTasks()

const deleteTask = (title) => {
   title = eraseTitle;
    for (i = 0; i < tasks.length; i++) {
      if (title == tasks[i].title) {
        tasks.splice(i, 1)
      }
    }
    write(tasks)
    return tasks
  }

deleteTask();

}

module.exports = erase;