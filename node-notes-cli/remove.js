const fs = require('fs');

const remove = () => {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    const fileData = JSON.parse(data);
    delete fileData.notes[process.argv[3]];
    fs.writeFile('data.json', JSON.stringify(fileData, null, 2), (err) => {
      if (err) throw err;
    })
  })
}

module.exports = remove;
