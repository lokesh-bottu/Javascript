
function get_no_of_cars(all_cars) {

    //In tnis we push all the unique model name
    years=[]

    //Iterate over each car and get its model
    for (let i = 0; i < all_cars.length; i++) {
        const year = all_cars[i].car_year;
        years.push(year)
    }
    let count = 0
    for(let i=0;i<years.length;i++) {
        if(years[i] > 2000) {
            count++
        }
    }
    return count
    
    
}


module.exports = get_no_of_cars