const inventory = require("./inventory");

// ==== Problem #5 ====
function countCarsOlderThanYear(year) {
  const olderCars = inventory.filter((carYear) => carYear < year);
  return olderCars.length;
}

module.exports = countCarsOlderThanYear;
