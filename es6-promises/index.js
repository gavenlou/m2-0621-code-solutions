const takeAChance = require('./take-a-chance');

const result = takeAChance('Gaven');

result
  .then( (val) => console.log(val))
  .catch((err) => console.log(err.message));
