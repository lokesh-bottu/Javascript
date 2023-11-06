const inventory = require("./inventory");
// ==== Problem #2 ====
function getLastCar() {
  const lastCar = inventory[inventory.length - 1];
  return lastCar;
}

module.exports = getLastCar;
