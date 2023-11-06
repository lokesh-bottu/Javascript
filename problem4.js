const inventory = require("./inventory");
// ==== Problem #4 ====
function getCarYears() {
  const carYears = inventory.map((car) => car.car_year);
  return carYears;
}

module.exports = getCarYears;
