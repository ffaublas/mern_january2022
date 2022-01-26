import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const OneForm = () => {
    const { id } = useParams();

    const [jokeDetails, setJokeDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8001/api/jokes/${id}`)
            .then(res=>{
                console.log("response when making request for one joke/comedian", res)
                //save res.data.results into state
                setJokeDetails(res.data.results)
            })
            .catch(err=> console.log(err))
    }, [id])
    

    return (
        <div>
            <h4>Details about {jokeDetails.firstName} {jokeDetails.lastName}</h4>
            <p>Number of belts: {jokeDetails.numBelts}</p>
            <p>Id: {id}</p>
            <p>Veteran status: {jokeDetails.isVeteran? "Is a Veteran": "Not a Veteran"}</p>
        </div>
    );
};


export default OneForm;