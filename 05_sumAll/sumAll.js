const sumAll = function(start, end) {
    if (typeof start === "number" && start > 0 && typeof end === "number" && end > 0) {
        result = 0;

        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }
    
        for (let i = start; i <= end; i++) {
            result += i;      
        }
    
        return result;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
