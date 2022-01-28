import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link 
} from "react-router-dom";

const OneAuthor = () => {
    const { id } = useParams();

    const history = useHistory();//to redirect after deleting an author

    const [authorDetails, setAuthorDetails] = useState({})
    let [deleted, setDeleted] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res=>{
            console.log("response when making request for one author", res)
            //save res.data.results into state
            setAuthorDetails(res.data.result)
        })
        .catch(err=> console.log(err))
    }, [deleted])

    const deleteAuthor = (id)=>{
        console.log("deleting!!!")
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then(res=>{
                console.log("response when deleting", res)
                setDeleted(!deleted)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div style = {{border: "1px solid black"}}>
                    <p>{authorDetails.Author}</p>
                    <button onClick = { ()=> deleteAuthor(authorDetails._id)} className="btn btn-danger">Delete</button>
            
        </div>
    );
};


export default OneAuthor;