function varletloop () {
  for (var i = 0; i < 5; i++) {
    console.log('var loop with i value ' + i);
  }

  console.log('value of i after loop ' + i);
  for (let a = 0; a < 3; a++) {
    console.log('let loop with a value ' + a);
  }

  try {
    console.log('value of a after loop ' + a);
  } catch (error) {
    console.error(error);
  }
}

varletloop();

var x = 1;
function example () {
  y = 2; // y is set to global scope without
  z = 3;
}

example();
console.log('variable x value ' + x);
console.log('variable y value ' + y);
console.log('variable z value ' + z);
