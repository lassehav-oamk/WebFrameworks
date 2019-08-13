console.log('- Object destructuring --');
const example = {
  a: 1,
  b: `some value`,
  c: 20
};

/* Access only the a property from the object */
let { a } = example;
console.log(a);

const destructureParameters = ({ b }) => console.log('Value of b: ' + b);
destructureParameters(example);

console.log('\n\n-- Object literal enhancement --');
const someValue = 'abc';
const anotherValue = 123;
const newObject = { someValue, anotherValue };
console.log(newObject);

console.log('\n\n-- Spread operator --');
const food = ['bread', 'joghurt', 'banana'];
const meat = ['sausage', 'beef'];
const drinks = ['water', 'juice'];

const meal = [...food, ...meat, ...drinks];
console.log(meal);

console.log('\n\n-- Rest parameter in function definition --');
function restParameters (param1, ...theArgs) {
  console.log(theArgs);
}

restParameters(10, ...drinks);
