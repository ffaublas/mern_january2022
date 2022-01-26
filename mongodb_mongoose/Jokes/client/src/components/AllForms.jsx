import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link 
} from "react-router-dom";


const AllForms = () => {

    let [allJokes, setAllJokes] = useState ([]);

    useEffect(()=>{
        axios.get("http://localhost:8001/api/jokes/")
            .then(res=>{
                console.log("response when GEtting All Comedians", res)
                setAllJokes(res.data.results)
            })
            .catch(err=>console.log("error in submitting post request",err))
    },[])

    return (
        <div>
            <h3>Test</h3>
            {allJokes.map((allObj, i)=> {
                return(
                    <div key={i} style = {{border: "1px solid black"}}>
                        <h4>{allObj.firstName} {allObj.lastName}</h4>
                        <p>Number of belts: {allObj.numBelts}</p>
                        <p>Id: {allObj._id}</p>
                        <p><Link to={`/jokes/${allObj._id}`} className = "btn btn-info">Details</Link> </p>
                    </div>
                )
            })}
        </div>
    );
};

export default AllForms;


