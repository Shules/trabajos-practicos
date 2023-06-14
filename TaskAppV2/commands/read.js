const fs = require('fs')

const parsedData = JSON.parse(fs.readFileSync("../taskData.json", "utf-8"))

const readTaskData = () => {
    return parsedData;
}

module.exports = readTaskData();