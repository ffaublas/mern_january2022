// importing React and component so that we can create React Compononet 
import React, { Component } from 'react';
    
    
class RosterId extends Component {
    render() {
        // console.log("logging this.props", this.props)
        // let {dish, price} = this.props

        return <div>
            <h1>{this.props.Name}</h1>
            <p>Age: {this.props.Age}</p>
            <p>HairColor: {this.props.HairColor} </p>

        </div>;
    }
}
    
export default RosterId;
// <!-- export the class so that it is importable from other files  -->


