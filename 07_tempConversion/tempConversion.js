const ftoc = function(tempf) {
  let tempc = Math.round((tempf - 32) * 5 / 9 * 10) / 10;
  return tempc;
};

const ctof = function(tempc) {
  let tempf = Math.round(((tempc * 9 / 5) + 32) * 10) / 10;
  return tempf;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
