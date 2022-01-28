
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


// const [products, setProducts] = useState([])
// const [loaded, setLoaded] = useState(false)

//   useEffect (() =>{
//     axios.get("http://localhost:8000/api/products/")
//       .then(res=>{
//         console.log("response when getting all titles-->", res)
//         setProducts(res.data)
//         setLoaded(true)
        
//   }); 
// }, [])

function App() {

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager Part 2</h1>
        <Switch>
          <Route exact path= "/">
            <AddProducts />
            <hr />
            <AllProducts />
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
