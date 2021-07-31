const fs = require('fs');

let data = process.argv[2] + '\n';

fs.writeFile('note.txt', data, (err) => {
  if (err) throw err;
})
