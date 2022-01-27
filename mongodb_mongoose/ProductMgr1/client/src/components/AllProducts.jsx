import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
    Link 
} from "react-router-dom";

const AllProducts = () => {

    let [allProducts, setAllProducts] = useState([])
    let [deleted, setDeleted] = useState(false)


    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                console.log("response when getting all titles-->", res)
                setAllProducts(res.data.result)
                //response.data.results we want to save into state (this represents the array of title objects)
                
            })
            .catch(err=> {console.log("ERROR", err)})
    },[deleted])


    const deleteProduct = (productId)=>{
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res=>{
                console.log("res when deleting->", res)
                setDeleted(!deleted)
            })
            .catch(err=> console.log("ERROR", err))
    }

    return (
        <div>
            <h3>All the Product Titles</h3>
            {allProducts.map((productObj, i)=>{
                return(
                    <div key={i} style = {{border: "1px solid black"}}>
                        <h4><Link to={`/products/${productObj._id}`}>{productObj.title}</Link></h4>
                        <p>Price: {productObj.price}</p>
                        <p>Id: {productObj._id}</p>
                        <p>
                            <Link to={`/products/${productObj._id}`} className = "btn btn-info" >Details</Link> | &nbsp; 
                            <Link to={`/products/edit/${productObj._id}`} className = "btn btn-warning" >Edit</Link> | &nbsp;
                            <button onClick = {()=>deleteProduct(productObj._id)} className="btn btn-danger">Delete Title</button>
                        </p>
                        

                    </div>
                )
            })}
        </div>
    );
};

export default AllProducts;