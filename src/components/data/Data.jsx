import Message from "../message"
import data from "./data.json"

const Cars = [
    {brand:"BMW", model:"Panda", colour:"Hot Pink", year:"2022"},
    {brand:"Nissan", model:"Micra", colour:"Blue", year:"2001"},
    {brand:"Nissan", model:"Leaf", colour:"White", year:"2021"},
]

const Data = () => {

    if (data){
        return (<div>
            <p>{data.name}</p>
            
            {(data.name === "Andrew McCall") ? <p>Very Cool</p>:<p>Not Very Cool</p>}

            <ul>
            {Cars.map((c,i) => <li key={i} >{c.brand},{c.model}</li>)}
            </ul>
    
            {Cars.map((c,i) => <Message key={i} isGreeting={true} name={c.model}/>)}
    
        </div>)
    }else{
        return (<div>

                {Cars.map((c,i) => <Message key={i} isGreeting={true} name={c.model}/>)}

            </div>)
    }
    

}

export default Data;