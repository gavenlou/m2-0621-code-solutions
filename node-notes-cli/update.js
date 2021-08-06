const fs = require('fs');

const update = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    const fileData = JSON.parse(data);
    if (!fileData.notes.hasOwnProperty(process.argv[3])) {
      return console.log('Invalid Argument. That note doesn\'t exist.')
    } else if (!process.argv[4]) return console.log('Invalid Argument. Expected: node app.js update # \'Text Content\'');
    fileData.notes[process.argv[3]] = process.argv[4];
    fs.writeFile(file, JSON.stringify(fileData, null, 2), (err) => {
      if (err) throw err;
    })
  })
}

module.exports = update;
