const CarOutput = ({Cars}) => {

    return(
        <ul>
            {Cars.map( (car, index) => <li key={index}>{car.brand}, {car.model}, {car.colour}, {car.year}</li> )}
        </ul>
    )
    

}

export default CarOutput;