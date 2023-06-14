const fs = require("fs")
const readTasks = require("./read.js")
const readLineSync = require("readline-sync")
const path = require("path")

const pathFile = path.join(__dirname, '..', './taskdata.json')

const create = () => {
     const newTitle = readLineSync.question("Ingrese el titulo de la tarea nueva: ")

     const newDesc = readLineSync.question("Ingrese el titulo de la tarea nueva: ")

const createTask = (title, desc) => {
   title = newTitle;
   desc = newDesc;

    const newObject = {
    title: title,
    desc: desc
    }
    const newTask = readTasks()
    newTask.push(newObject)
    fs.writeFileSync(pathFile, JSON.stringify(newTask, null, 2))
  }

createTask()

}

module.exports = create;



