const repeatString = function(str, n) {
   let newStr = "";
    for (let i = 0; i < n; i++) {
        newStr += str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
