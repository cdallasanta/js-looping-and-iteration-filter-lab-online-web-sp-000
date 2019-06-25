// Code your solution in this file
function findMatching(driversArr, str) {
  debugger;
  driversArr.filter(driver => driver.toLowerCase() === str.toLowerCase());
};

function fuzzyMatch(driversArr, str) {
  driversArr.filter(driver => driver.toLowerCase() === str[0].toLowerCase());
};
