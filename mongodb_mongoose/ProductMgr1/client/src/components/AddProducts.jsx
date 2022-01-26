import React, {useState} from 'react';
import axios from 'axios';

const AddProducts = () => {

    //state variables for each info collected from form

    let [title, setTitle] = useState("")
    let [price, setPrice] = useState(0)
    let [description, setDescription] = useState("")

    const createSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(title, description, price)

        //put the info from form into an object
        let formInfoObj = {title, description, price};

        axios.post("http://localhost:8000/api/products/new", formInfoObj)
            .then(res=>{
                console.log("response after posting", res)
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }

    return (
        <div>
            <form onSubmit = {createSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input onChange = {(e)=>{setTitle(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input onChange = {(e)=>{setPrice(e.target.value)}} type="number" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange = {(e)=>{setDescription(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                
                <input type="submit" value="Create!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default AddProducts;