// importing React and component so that we can create React Compononet 
import React, { Component } from 'react';
    
    
class RosterId extends Component {
    constructor(props){
        super(props);

        this.state = {
            // position: "On"
            Age: this.props.Age
        };
    }
    render() {
        let ageIdentifier = () =>{
            this.setState({Age: this.state.Age+1});
        }
        // console.log("logging this.props", this.props)
        // let {dish, price} = this.props

        return <div>
            <h1>{this.props.Name}</h1>
            
            <p>HairColor: {this.props.HairColor} </p>
            {this.props.children}
            <p>Age: {this.state.Age}</p>
            <button onClick = {ageIdentifier}>Birthday Button</button>

        </div>;
    }
}
    
export default RosterId;
// <!-- export the class so that it is importable from other files  -->


