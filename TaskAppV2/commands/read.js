const fs = require('fs')


const readTaskData = () => {
   const parsedData = JSON.parse(fs.readFileSync("../taskData.json", "utf-8"))
   return parsedData;
}

module.exports = readTaskData;