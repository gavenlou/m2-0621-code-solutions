const fs = require('fs');

const add = () => {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    const fileData = JSON.parse(data);
    fileData.notes[fileData.nextId] = process.argv[3];
    fileData.nextId++;
    fs.writeFile('data.json', JSON.stringify(fileData, null, 2), (err) => {
      if (err) throw err;
    })
  })
}

module.exports = add;
