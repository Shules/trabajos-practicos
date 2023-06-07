const data = require("../taskData");
const readlineSync = require("readline-sync")


let founded = []

if (process.argv[2] === "filter") {
let filterTitle = readlineSync.question("Ingrese el titulo o una parte de él para filtrar: ")

const callFilter = () => {
    for (i = 0; i < data.length; i++) {      
       let includes = data[i].title.includes(filterTitle) 
       if (includes === true) {
        founded.push(data[i])
       } 
       if (filterTitle == "") {
        return false;
       }
    } return founded;
    

}
callFilter();


module.exports = callFilter;
}


