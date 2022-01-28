
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link 
} from "react-router-dom";

const EditAuthor = () => {

    //get the route param info containing the id of the object we want to edit
    const { id } = useParams();

    //state variable to save the info i get back from api about one author (or one object)
    let [authorInfo, setAuthorInfo] = useState({
        title:"",
    })

    useEffect(()=>{
        //make an axios call to get information from the backend about one author using the api endpoint to get one author
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res=>{
            console.log("response is this-->", res)
            setAuthorInfo(res.data.result)

        })
        .catch(err=> console.log(err))
    },[id])

    //initialize useHistory so we can redirect after the update of the form
    const history = useHistory();

    //changehandler that will be called each time the form info is being changed
    const changeHandler = (e)=>{
        console.log("changed in form detected!!")
        if(e.target.type === "checkbox"){
            setAuthorInfo({
                ...authorInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setAuthorInfo({
                ...authorInfo,
                [e.target.name]: e.target.value
            })

        }
    }
    


    const updateAuthorSubmitHandler = (e)=>{
        console.log("testing handler")
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/update/${id}`, authorInfo)
            .then(res=>{
                console.log("res after put request-->", res)
                history.push("/")
            })
            .catch(err=>console.log(err))

    }

    return (
        <div>
            <h4>Edit Author Info</h4>
            <form onSubmit = {updateAuthorSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Author</label>
                    <input type="text" name="Author" id="" className="form-control" value={authorInfo.Author} onChange={changeHandler}/>
                </div>
                <Link to = "/" className='btn btn-secondary' >Cancel</Link>
                <input type="submit" value="Submit" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default EditAuthor;