// importing React and component so that we can create React Compononet 
import React, { Component } from 'react';
    
    
class MenuItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            // position: "On"
            likes: this.props.likes
        };
    }



    render() {
        // console.log("logging this.props", this.props)
        // let {dish, price} = this.props

        let clickHandler = () =>{
                console.log('This message will self destruct');
                // ^ alert("let's get those likes") ^
                this.setState({likes: this.state.likes+1});
                // ^when  the button is clicked, increase the state variable for likes ^
        }

        return <div>
            <h1>{this.props.dish}</h1>
            <p>Price: {this.props.price}</p>
            {this.props.children}
            <p>Number of likes: {this.state.likes}</p>
            <button onClick = {clickHandler}>Like {this.props.dish}</button>

        </div>
    }
}
    
export default MenuItem;
// <!-- export the class so that it is importable from other files  -->


