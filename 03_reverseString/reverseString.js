const reverseString = function(str) {
    let result = "";
    for (let j = str.length -1; j>=0; j--) {
        result += str[j];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
