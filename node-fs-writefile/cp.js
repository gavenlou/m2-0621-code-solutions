const fs = require('fs');

let fileData = '';
let file = process.argv[2];
let newFile = process.argv[3];

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err;
      fileData = data;
    })
    if (fileData !== '') {
      resolve(writeFile);
    } else {
      reject('Failed');
    }
  })
}

const writeFile = () => {
  fs.writeFile(process.argv[3].toString(), fileData, (err) => {
    if (err) throw err;
  })
}

readFile().then((message) => {
  message();
}).catch((message) => {
  console.log(message);
})
