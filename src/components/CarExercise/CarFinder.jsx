const CarFinder = ({setCars, Cars}) => {

    const CarFinderer = (e) => {
        e.preventDefault();
        setCars(Cars.filter( (car) => (car.brand.toLowerCase().startsWith(e.target.value.toLowerCase()) || car.model.toLowerCase().startsWith(e.target.value.toLowerCase() || car.year.toLowerCase().startsWith(e.target.value.toLowerCase() || car.colour.toLowerCase().startsWith(e.target.value.toLowerCase()))))) )
    }

    return(<>Search: <input onChange={CarFinderer}/></>)
}

export default CarFinder;