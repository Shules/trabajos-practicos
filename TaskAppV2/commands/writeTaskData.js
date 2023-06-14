const fs = require('fs');

const writeTasks = (newTasks) => {
    fs.writeFileSync('../taskData.json', JSON.stringify(newTasks, null, 2))
}


module.exports = writeTasks;