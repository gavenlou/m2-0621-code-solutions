const fs = require('fs');

const read = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    const noteList = JSON.parse(data).notes;
    for (const [key, value] of Object.entries(noteList)) {
      console.log(`${key}: ${value}`);
    }
  })
}

module.exports = read;
