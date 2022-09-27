import { useState } from "react";

const Clicker = () => {

    // count getter
    // setCount is the setter
    // useSate(x) - X is the defualt value
    const [count, setCount] = useState(0);

    const AddOne = (e) => {
        setCount(count+1)
        console.log(count)
    }

    return(<div>

        <p> Count: {count}</p>
        <button onClick={AddOne}> Add One </button>

    </div>)

}

export default Clicker;