import React from "react";
import ReactDOM from "react-dom";
class Conter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 100,
            name: "Ravish",


        };


        console.log("Conter constructor");

       
        

    }

    componentDidMount(){
        console.log("Conter componentDidMount");
    }


    render() {
        return (
            <div>
                <h1>Conter- {this.state.counter}</h1>

                <button onClick={(event) => {
                    this.setState({ counter: this.state.counter + 1 });

                }}>Add By 1</button>

                <br />
                <br />
                <br />
                <br />
                <br />


                <input type="text" onChange={(e) => {
                    this.setState({ name: e.target.value })
                }} />
                <br />
                <br />
                <br />
                <h1>Name-{this.state.name}</h1>
            </div>
        );
    }
}

export default Conter;