const fs = require('fs');
const reply = [];

const read = (file = 'data.json') => {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    const dataList = JSON.parse(data).notes;
    for (const key in dataList) reply.push(dataList[key]);
  })
}

module.exports = read;
