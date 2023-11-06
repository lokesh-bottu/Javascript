function findLastCar(inventory) {
    if (inventory.length === 0) {
      return 'Inventory is empty.';
    }
  
    const lastCar = inventory[inventory.length - 1];
    const make = lastCar.car_make;
    const model = lastCar.car_model;
    return `Last car is a ${make} with the model ${model}`;
  }


module.exports = findLastCar
  