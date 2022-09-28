import Message from "./message";
import axios from "axios"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const TestPage = () => {

    const {id} = useParams();

    const [facts, setFacts] = useState([]);

    useEffect( () => {
        AddFact();
    }, [])

    const AddFact = () => {
        // fetch("https://catfact.ninja/fact").then(res=> {
        //     res.json().then(data => {
        //         setFacts([...facts, data.fact])
        //     })
        // })
        axios.get("https://catfact.ninja/fact").then(res => {
            setFacts([...facts, res.data.fact])
        })
    }

    return(
        <div>

            <h1>Test Page</h1>
            <Message isGreeting={(id%2 === 0)} name={id}/><br/>
            <button onClick={AddFact}> Get Fact </button>
            {(facts.length > 0)? <ol>{facts.map( (f, i) => <li key={i}>{f}</li>)}</ol> : <h3>Press the Button</h3>}
            {/* { (condition)? true : false } */}

        </div>
    )
}

export default TestPage;