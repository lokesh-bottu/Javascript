const inventory = require("../inventory");
const getLastCar = require("../problem2");

const lastCar = getLastCar();
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
