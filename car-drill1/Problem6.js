
function get_bmw_audi(all_cars) {

    const result = []
    for(let i=0;i<all_cars.length;i++)
    {
        if(all_cars[i].car_make === 'BMW' || all_cars[i].car_make === 'Audi' )
        {
            result.push(all_cars[i])
        }
    }
    return result;
}

module.exports = get_bmw_audi
