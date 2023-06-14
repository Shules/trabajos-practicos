const fs = require('fs')


const readTaskData = () => {
   const parsedData = JSON.parse(fs.readFileSync("../taskData.json", "utf-8"), null, 2)
   return parsedData;
}

module.exports = readTaskData;