const fs = require('fs');

let i = 2;

function call(callback, file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  callback()
  })
}

const readFile = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
}

do {
call(function() {
  console.log(i);
  }, process.argv[i])
  i++;
} while (i < process.argv.length)
