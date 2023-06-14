const fs = require('fs');
const readlineSync = require("readline-sync");


const writeTaskData = (newTask) => {
    const dataString = JSON.stringify(newTask)
    fs.writeFileSync("../taskData.json")




}


module.exports = writeTaskData();