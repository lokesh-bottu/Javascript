
// ==== Problem #1 ====
const inventory = require("./inventory");
function findCarById(id) {
  const car = inventory.find((item) => item.id === id);
  return car;
}

module.exports = findCarById;
