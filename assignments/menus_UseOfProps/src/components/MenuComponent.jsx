import React, {useState} from 'react';

const Menu = (props) =>{

    // creating a state variable to stroe the likes so that the likes can change. Only things in state can change.
    let [likesCount, setlikesCount] = useState(0) //the first word in the array is the variable name; the second word in the array represents the serter for that variable 

    let likeHandler = ()=>{
        setlikesCount(likesCount+1)
        // console.log('liking this course');
        // alert('high five')
    }
    return(
        <div>
            <h1>{props.dish}</h1>
            <p>${props.price}</p>
            <p>Likes {likesCount}</p>
            {props.children}
            <button onClick ={likeHandler} >Like</button>
        </div>
    )
}

export default Menu;