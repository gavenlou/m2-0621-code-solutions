const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let op = process.argv[3];
let num1 = parseInt(process.argv[2]), num2 = parseInt(process.argv[4]);
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
    console.log('Try using: plus, minus, times, over.');
    break;
}
console.log('Result:', result);
