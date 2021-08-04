const fs = require('fs');

const update = () => {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    const fileData = JSON.parse(data);
    fileData.notes[process.argv[3]] = process.argv[4];
    fs.writeFile('data.json', JSON.stringify(fileData, null, 2), (err) => {
      if (err) throw err;
    })
  })
}

module.exports = update;
