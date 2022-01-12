const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  if (arr.length > 1) {
    return arr.reduce(reducer);
  } else {
    if (arr.length != 0) {
      return arr[0];
    } else {
      return 0;
    }
  }
};

const multiply = function (arr) {
  const reducer = (previousValue, currentValue) => previousValue * currentValue;
  if (arr.length > 1) {
    return arr.reduce(reducer);
  } else {
    if (arr.length != 0) {
      return arr[0];
    } else {
      return 0;
    }
  }
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num == 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
