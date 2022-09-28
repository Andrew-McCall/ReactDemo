import { Component } from "react";

class Clicker extends Component{

    constructor(){
        super();

        this.AddOne = (e) => {
            e.preventDefault()
            this.setState({clicks: this.state.clicks + 1})
        }

        this.state = {clicks: 1};

        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate")
        return (nextState != this.state);
    }

    render() {
        return(
            <div>

                <h1>{this.state.clicks}</h1>
                <button onClick={this.AddOne}>Click</button>

            </div>
        )
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

}

export default Clicker;