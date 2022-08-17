const leapYears = function(year) {
    //if it's divisible by 4 is the first step.
    //if it happens to also be divisible by 100, then...
    // if it's divisible by 400

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        } 
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
