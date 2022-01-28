// In this version - all Products will show up on Port 3000; To add a product, need a new "create" button to  bring to a form (in /new created on lines 33-36)
// To redirect to Port 3000 (or homepage) after creating a new product = > add 1) Use History; 2) initialize useHistory & 3) history.push("/") into "Add Product" file 
//Now go to homepage to add a create button to take us to /new - do this below (while in App.js - line 26 )
import './App.css';
// import React, { useState } from 'react';
import AddProducts from './components/AddProducts';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';


import {
  BrowserRouter, //tells the application we can enable routing
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager Part 2</h1>
        <Link to = "/new" className='btn btn-secondary' >Add a Product</Link>
        <Switch>
          <Route exact path= "/">
            <hr />
            <AllProducts />   
          </Route>

          <Route exact path= "/new">
            <AddProducts />
            <hr />
          </Route>

          <Route exact path= "/products/:id">
            <OneProduct />
          </Route>

          <Route exact path= "/products/edit/:id">
            <EditProduct />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
