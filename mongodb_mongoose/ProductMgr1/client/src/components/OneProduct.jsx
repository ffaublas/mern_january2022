import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OneProduct = () => {
    const { id } = useParams();

    const history = useHistory();//to redirect after deleting a product

    const [productDetails, setProductDetails] = useState({})

    // const [productDetails, setProductDetails] = useState({
    //     title:"",
    //     price:0,
    //     description:"",
    //     isNewToMarket: false
    // })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log("response when making request for one product", res)
            //save res.data.results into state
            setProductDetails(res.data.result)
        })
        .catch(err=> console.log(err))
    }, [id])

    const deleteProduct = ()=>{
        console.log("deleting!!!")
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res=>{
                console.log("response when deleting", res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }
    

    return (
        <div>
            <h4>Details about {productDetails.title}</h4>
            <p>Price of products: {productDetails.price}</p>
            <p>ID: {id}</p>
            <p>New to the Market?: {productDetails.isNewToMarket? "This Product is new to the market": "This is an existing product"}</p>
            <button onClick = {deleteProduct} className="btn btn-danger">Delete Product</button>
        </div>
    );
};


export default OneProduct;