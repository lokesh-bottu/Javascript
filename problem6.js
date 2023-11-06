const inventory = require("./inventory");

// ==== Problem #6 ====
function getBMWAndAudiCars() {
  const bmwAndAudiCars = inventory.filter(
    (car) => car.car_make === "BMW" || car.car_make === "Audi"
  );
  return bmwAndAudiCars;
}

module.exports = getBMWAndAudiCars;
