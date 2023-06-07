const data = require("../taskData");
const readlineSync = require("readline-sync")

if (process.argv[2] === "find") {
let findTitle = readlineSync.question("Ingrese un título a buscar: ")

const callFind = () => {
  for (i = 0; i < data.length; i++) {
    if (findTitle == data[i].title) {
      return true;
    } 
  }
  return false
}
module.exports = callFind; 
}



