const data = require("../taskData");
const readlineSync = require("readline-sync");


let returnDesc = [];
if (process.argv[2] === "fReturn") {
let returnTitle = readlineSync.question("Ingrese un título para ver su descripción: ");

const callReturn = () => {
    for (i = 0; i < data.length; i++) {      
       let includes = data[i].title.includes(returnTitle) 
       if (includes === true) {
        returnDesc.push(data[i].desc)
       } 
    }  
    return returnDesc;  
}
callReturn();


module.exports = callReturn
}
