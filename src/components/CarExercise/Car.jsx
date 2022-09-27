import { useState } from "react";

const Cars = [
    {brand:"BMW", model:"Panda", colour:"Hot Pink", year:"2022"},
    {brand:"Nissan", model:"Micra", colour:"Blue", year:"2001"},
    {brand:"Nissan", model:"Leaf", colour:"White", year:"2021"},
]

const Car = () => {

    const [output, setOutput] = useState(Cars)

    const CarFilterer = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setOutput(Cars.filter( (car) => (car.brand.toLowerCase().startsWith(e.target.value.toLowerCase()) || car.model.toLowerCase().startsWith(e.target.value.toLowerCase() || car.year.toLowerCase().startsWith(e.target.value.toLowerCase() || car.colour.toLowerCase().startsWith(e.target.value.toLowerCase()))))) )
    }

    return (
        <div>
            Search: <input onChange={CarFilterer}/>
            <ul>
                {output.map( (car, index) => <li key={index}>{car.brand}, {car.model}, {car.colour}, {car.year}</li> )}
            </ul>
        </div>
    )

}

export default Car;