const Element = () => {

    const isGreeting = true;

    const lisht = [3, 5, 2, 1, 6,3, 3,3,3,3]

    const nameGen = () => {
        const first = "Andrew";
        const last = "Mccall";

        return <h2> {first + " " + last} </h2>
    }

    if (isGreeting){
        return (<div>
            <h1>Hello World,</h1>
            {nameGen()}
            {lisht.map( (value, index) => <p key={index}>{value}</p> )}
        </div>);
    }else{
        return (<div>
            <h1>Goodbye,</h1>
            <h2>{nameGen()}</h2>
            <p>Nice seeing you!</p>
        </div>);
    }
    
} 

export default Element;