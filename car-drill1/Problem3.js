
function get_car_models(all_cars) {

    //In tnis we push all the unique model name
    all_models=[]

    //Iterate over each car and get its model
    for (let i = 0; i < all_cars.length; i++) {
        const model = all_cars[i].car_model;

        if(!all_models.includes(model)) {
            all_models.push(model)

        }
    }
    return all_models.sort()
    
}

module.exports = get_car_models