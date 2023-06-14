const fs = require('fs')
const path = require("path")

const pathFile = path.join(__dirname, '..', './taskdata.json')

const readTask = () => {
   const parsedData = JSON.parse(fs.readFileSync(pathFile, "utf-8"), null, 2)
   return parsedData;
}

module.exports = readTask;