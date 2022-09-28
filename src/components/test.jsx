import Message from "./message";
import axios from "axios"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const TestPage = () => {

    const {id} = useParams();

    const [fact, setFact] = useState("Loading!");

    useEffect( () => {
        // fetch("https://catfact.ninja/fact").then(res => {
        //     res.json().then(data => {
        //         setFact(data.fact)
        //     })
        // })
        axios.get("https://catfact.ninja/fact").then(res => {
            setFact(res.data.fact)
        })
    }, [])

    return(
        <div>

            <h1>Test Page</h1>
            <Message isGreeting={(id%2 === 0)} name={id}/>
            <h3>{fact}</h3>

        </div>
    )
}

export default TestPage;