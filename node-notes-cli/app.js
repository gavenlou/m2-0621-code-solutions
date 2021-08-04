const read = require('./read');
const add = require('./add');
const remove = require('./remove');
const update = require('./update');

let command = process.argv[2];

if (command === 'read') read();
else if (command === 'create') add();
else if (command === 'delete') remove();
else if (command === 'update') update();
else console.log('Invalid argument. Try: read, add, delete, update.');
