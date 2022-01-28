import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddProducts = (props) => {

    //state variables for each info collected from form

    let [title, setTitle] = useState("")
    let [price, setPrice] = useState(null)
    let [description, setDescription] = useState("")
    let [isNewToMarket, setIsNewToMarket] = useState(false)

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(title, price, description, isNewToMarket)

        //put the info from form into an object
        let formInfoObj = {title, price, description, isNewToMarket};

        axios.post("http://localhost:8000/api/products/new", formInfoObj)
            .then(res=>{
                console.log("response after posting", res)

                                //if the res.data.results key is there, then form validations were valid
                //if the res.data.error key is there, then form was not filled out properly 
                if(res.data.error){ //validation errors happened
                    //res.data.error.errors contains an object that has my validation error messages for each input
                    setFormErrors(res.data.error.errors)
                }else{
                    props.setNewProductAdded(!props.newProductAdded)
                    setTitle("");
                    setPrice(null);
                    setDescription("");
                    setIsNewToMarket(false)
                    history.push("/")
                }
            })
            .catch(err=>console.log("error in submitting post request",err))

    }

    return (
        <div>
            <form onSubmit = {createSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input onChange = {(e)=>{setTitle("e.target.value")}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input onChange = {(e)=>{setPrice(e.target.value)}} type="number" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange = {(e)=>{setDescription(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">isNewToMarket</label>
                    <input onChange = {(e)=>{setIsNewToMarket(e.target.checked)}} type="checkbox" name="" id="" className="form-checkbox" />
                    <p className="text-danger">{formErrors.isNewToMarket?.message}</p>
                </div>
                
                <input type="submit" value="Create!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default AddProducts;