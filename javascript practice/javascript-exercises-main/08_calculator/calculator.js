const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum+item);
};

const multiply = function(a,b) {
  return a*b;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  let factor = 1
	for(let x = 1; x <= num; x++){
    factor*=x;
  }
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
