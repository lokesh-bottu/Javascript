const get_no_of_cars = require("../Problem5");
const inventory = require("../inventory");

const result = get_no_of_cars(inventory, 2000);
console.log(`There are ${result} cars manufactured after 2000`);