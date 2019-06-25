// Code your solution in this file
function findMatching(driversArr, str) {
  driversArr.filter(driver => driver.toLowerCase() === str.toLowerCase());
};

function fuzzyMatch(driversArr, str) {
  driversArr.filter(driver => driver.toLowerCase() === str[0].toLowerCase());
};

function matchName(driversArr, str) {
  driversArr.filter(driver => driver.name.toLowerCase() === str.toLowerCase());
};
