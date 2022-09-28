import Message from "./message";

import {useParams} from "react-router-dom"

const TestPage = () => {

    const {id} = useParams();

    return(
    <div>

        <h1>Test Page</h1>
        <Message isGreeting={(id%2 === 0)} name={id}/>

    </div>
    )
}

export default TestPage;