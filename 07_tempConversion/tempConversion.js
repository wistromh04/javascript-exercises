const convertToCelsius = function(num) {
  let converted = (num - 32) / 1.8;
  return converted;
};

const convertToFahrenheit = function(num) {
  let converted = num * 1.8+ 32;
  return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
