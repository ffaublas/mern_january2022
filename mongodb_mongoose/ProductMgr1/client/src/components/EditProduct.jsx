
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const EditProduct = () => {

    //get the route param info containing the id of the object we want to edit
    const { id } = useParams();

    //state variable to save the info i get back from api about one product (or one object)
    let [productInfo, setProductInfo] = useState({
        title:"",
        price:"",
        description:0,
        isNewToMarket: false
    })

    useEffect(()=>{
        //make an axios call to get information from the backend about one product using the api endpoint to get one product
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log("response is this-->", res)
            setProductInfo(res.data.result)

        })
        .catch(err=> console.log(err))
    },[])

    //initialize useHistory so we can redirect after the update of the form
    const history = useHistory();

    //changehandler that will be called each time the form info is being changed
    const changeHandler = (e)=>{
        console.log("changed in form detected!!")
        if(e.target.type === "checkbox"){
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.value
            })

        }
    }
    


    const updateProductSubmitHandler = (e)=>{
        console.log("helllo clarisse")
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`, productInfo)
            .then(res=>{
                console.log("res after put request-->", res)
                history.push("/")
            })
            .catch(err=>console.log(err))

    }

    return (
        <div>
            <h4>Edit Product Title Below</h4>
            <form onSubmit = {updateProductSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" id="" className="form-control" value={productInfo.title} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="number" name="price" id="" className="form-control" value={productInfo.price} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" id="" className="form-control" value={productInfo.description} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is this Product new to the Market?</label>
                    <input type="checkbox" name="isNewToMarket" id="" className="form-checkbox" checked={productInfo.isNewToMarket} onChange={changeHandler} />
                </div>
                <input type="submit" value="Update Product Title!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default EditProduct;