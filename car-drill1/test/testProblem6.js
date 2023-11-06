const get_bmw_audi = require("../Problem6");
const inventory = require("../inventory");

const result = get_bmw_audi(inventory);
console.log(JSON.stringify(result, null, 2));