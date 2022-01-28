// Need to add:
// HOme
// Cancel
import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import {
    Link 
} from "react-router-dom";

const AddAuthor = (props) => {
    // const { id } = useParams();
    //state variables for each info collected from form

    let [Author, setAuthor] = useState("")


    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(Author)

        let formInfoObj = {Author};


        axios.post("http://localhost:8000/api/author/new", formInfoObj)
            .then(res=>{
                console.log("response after posting", res)

                                //if the res.data.results key is there, then form validations were valid
                //if the res.data.error key is there, then form was not filled out properly 
                if(res.data.error){ //validation errors happened
                    //res.data.error.errors contains an object that has my validation error messages for each input
                    setFormErrors(res.data.error.errors)
                }else{
                    // props.setNewProductAdded(!props.newProductAdded)
                    history.push("/")
                }
            })
            .catch(err=>console.log("error in submitting post request",err))

    }

    return (
        <div>
            <form onSubmit = {createSubmitHandler}>
                <div className="form-group">
                    <p>Add a new Author:</p>
                    <label htmlFor="">Name:</label>
                    <input onChange = { (e) => { setAuthor(e.target.value)} } type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.Author?.message}</p>
                </div>
                
                <Link to = "/" className='btn btn-secondary' >Cancel</Link>
                <input type="submit" value="Submit" className="btn btn-success mt-3" />
            </form>
            
                
                
            
        </div>
    );
};

export default AddAuthor;