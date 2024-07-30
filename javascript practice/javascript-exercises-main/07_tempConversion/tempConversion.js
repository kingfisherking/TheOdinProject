const convertToCelsius = function(temp) {
  return (temp - 32) * 5/9; 
};

const convertToFahrenheit = function(temp) {
  return temp * 9/5 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
