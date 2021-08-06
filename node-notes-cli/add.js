const fs = require('fs');

const add = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    const fileData = JSON.parse(data);
    if (!process.argv[3]) {
      return console.log('Invalid Argument. Expected: node app.js create \'Text Content\'');
    }
    fileData.notes[fileData.nextId] = process.argv[3];
    fileData.nextId++;
    fs.writeFile(file, JSON.stringify(fileData, null, 2), (err) => {
      if (err) throw err;
    })
  })
}

module.exports = add;
