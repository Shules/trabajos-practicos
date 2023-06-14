const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, '..', './taskData.json')

const writeTasks = (newTasks) => {
    fs.writeFileSync(pathFile, JSON.stringify(newTasks, null, 2))
}

module.exports = writeTasks;