// ==== Problem #3 ====
function sortCarModelsAlphabetically() {
  const sortedModels = [...inventory].sort((a, b) =>
    a.car_model.localeCompare(b.car_model)
  );
  return sortedModels.map((car) => car.car_model);
}

module.exports = sortCarModelsAlphabetically;
