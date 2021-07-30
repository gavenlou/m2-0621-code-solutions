const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const op = process.argv[3];
const num1 = Number(process.argv[2]), num2 = Number(process.argv[4]);
let result = 0;
switch(op) {
  case 'plus':
    result = add(num1, num2);
    break;
  case 'minus':
    result = subtract(num1, num2);
    break;
  case 'times':
    result = multiply(num1, num2);
    break;
  case 'over':
    result = divide(num1, num2);
    break;
  default:
    console.log('Use the format: Number operation(eg. plus, minus, times, over) Number. Ex: 2 plus 2');
    break;
}
console.log('Result:', result);
