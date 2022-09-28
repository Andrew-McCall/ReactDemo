import { useState, useEffect } from "react";

var variableExample = 0;

const Clicker = () => {

    const [count, setCount] = useState(0);
    /// Every ReRender - useEffect(func)
    useEffect( () => {
        console.log("ReRender")
    } )

    /// First Render - useEffect(func, [])
    useEffect( () => {
        console.log("First Render")
    }, [] )

    /// Every Change - useEffect(func, var)
    useEffect( () => {
        console.log("Every Change")
    },  [variableExample])
    

    const AddOne = (e) => {
        setCount(count+1)
        variableExample++;
        console.log(count)
    }

    return(<div>

        <p> Count: {count}</p>
        <button onClick={AddOne}> Add One </button>

    </div>)

}

export default Clicker;