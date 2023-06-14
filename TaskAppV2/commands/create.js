const fs = require('fs')
const readTasks = require('./read.js')
const readLineSync = require('readline-sync')

if (process.argv[2] == "Crear") {
const newTitle = readLineSync.question("Ingrese el titulo de la tarea nueva: ")
const newDesc = readLineSync.question("Ingrese el titulo de la tarea nueva: ")
const create = (title, desc) => {
  title = newTitle
  desc = newDesc
  const newObject = 
  {
    title: title,
    desc: desc 
  }
  const newTask = readTasks();
  newTask.push(newObject)
  fs.writeFileSync('../taskData.json', JSON.stringify(newTask, null, 2))
 }
 create();
}

