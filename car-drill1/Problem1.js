
function findCarById(inventory,carID) {
    for (let i = 0; i < inventory.length; i++) {
    // Firstly iterate over each car and then for each car check the id.
      if (inventory[i].id === carID) {
        // Car found, return its details
        return {
          year: inventory[i].car_year,
          make: inventory[i].car_make,
          model: inventory[i].car_model,
        };
        
      }
    }
    // If no car with the specified ID is found, return an error message
    return 'Car with ID ' + carID + ' not found in inventory.';
}

module.exports = findCarById;