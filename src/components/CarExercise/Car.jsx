import { useState } from "react";
import CarFinder from "./CarFinder";
import CarOutput from "./CarOutput";

const Cars = [
    {brand:"BMW", model:"Panda", colour:"Hot Pink", year:"2022"},
    {brand:"Nissan", model:"Micra", colour:"Blue", year:"2001"},
    {brand:"Nissan", model:"Leaf", colour:"White", year:"2021"},
]

const Car = () => {

    const [output, setOutput] = useState(Cars)
    
    return (
        <div>
            <CarFinder setCars={setOutput} Cars={Cars}/>
            <CarOutput Cars={output}/>
        </div>
    )

}

export default Car;