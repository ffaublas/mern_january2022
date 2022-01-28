// When you need to variable components to share  variable information between one another(or speak to each other) like "AllProducts" and "AddProducts" = you will need to converge them through their parent (In this case, it is App.js)
// App.js will then share the necessary information to them regarding when a form is submitted.
import './App.css';
import React, { useState } from 'react';
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
  let [newProductAdded, setNewProductAdded] = useState(false)

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager Part 2</h1>
        {/* <Link to = "/new" className='btn btn-secondary' >Add New Product</Link> */}
        <Switch>
          <Route exact path= "/">
            <AddProducts newProductAdded={newProductAdded} setNewProductAdded= {setNewProductAdded}
            ></AddProducts>
            <hr />
            <AllProducts newProductAdded={newProductAdded} ></AllProducts>
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
