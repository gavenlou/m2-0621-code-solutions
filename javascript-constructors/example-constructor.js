function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);
var example = new ExampleConstructor();
console.log(example);
var instance = example instanceof ExampleConstructor;
console.log(instance);
