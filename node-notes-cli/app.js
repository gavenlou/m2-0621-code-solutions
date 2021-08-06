const read = require('./read');
const add = require('./add');
const remove = require('./remove');
const update = require('./update');

const command = process.argv[2];
const file = 'data.json';

if (command === 'read') read(file);
else if (command === 'create') add(file);
else if (command === 'delete') remove(file);
else if (command === 'update') update(file);
else console.log('Invalid argument. Try: read, create, delete, update.');
