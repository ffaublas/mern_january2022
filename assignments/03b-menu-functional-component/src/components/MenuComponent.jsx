import React from "react";
const Menu = (props) => {
    return (
        <div>
            <h1>{props.dish}</h1>
            <p>Price: ${props.price}</p>
            <p>Likes: {props.likes}</p>
            <p>{props.children}</p>
        </div>

    );
}

export default Menu;