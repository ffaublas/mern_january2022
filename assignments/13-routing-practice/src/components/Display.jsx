import React from 'react';
import { useParams } from "react-router";


const Display = () => {
    const { id, borderStyle="solid", fontsize=12 } = useParams();
    
    console.log(id)

    return (
        <div>
            { isNaN(id)?
                <h1 style={{background: "red" , color: "blue"}}>hello</h1>:
                <h1>The number is: {id}</h1>
        }
        </div>

    );
};

export default Display;