const fs = require('fs');

const remove = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    const fileData = JSON.parse(data);
    if (!fileData.notes.hasOwnProperty(process.argv[3])) {
      return console.log('Invalid Argument. That note doesn\'t exist.');
    }
    delete fileData.notes[process.argv[3]];
    fs.writeFile(file, JSON.stringify(fileData, null, 2), (err) => {
      if (err) throw err;
    })
  })
}

module.exports = remove;
