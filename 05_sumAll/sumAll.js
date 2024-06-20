const sumAll = function(num1, num2) {
let sum = 0;
const start = Math.min(num1, num2);
const end = Math.max(num1, num2);
for (let i = start; i <= end; i++) {
    sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;

sumAll(1, 4)