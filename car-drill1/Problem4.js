const inventory= require("./inventory")
function get_years(all_cars) {

    //In tnis we push all the unique model name
    years=[]

    //Iterate over each car and get its model
    for (let i = 0; i < all_cars.length; i++) {
        const year = all_cars[i].car_year;
        years.push(year)
    }
    return years.sort()
    
}
//pass the inventory to the function
years = get_years(inventory)
console.log(years)

module.exports = get_years