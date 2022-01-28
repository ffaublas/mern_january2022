// In this version - all Authors will show up on Port 3000; To add a author, need a new "create" button to  bring to a form (in /new created on lines 33-36)
// To redirect to Port 3000 (or homepage) after creating a new author = > add 1) Use History; 2) initialize useHistory & 3) history.push("/") into "Add author" file 
//Now go to homepage to add a create button to take us to /new - do this below (while in App.js - line 26 )
import './App.css';
// import React, { useState } from 'react';
import AddAuthor from './components/AddAuthor';
import AllAuthors from './components/AllAuthors';
import OneAuthor from './components/OneAuthor';
import EditAuthor from './components/EditAuthor';


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
        <h1>Favorite Authors</h1>
        
        <Switch>
        
          <Route exact path= "/">
          <Link to = "/new" >Add an Author</Link>
            <hr />
            <AllAuthors />
          </Route>

          <Route exact path= "/new">
          <Link to = "/" >Home</Link>
            <AddAuthor />
            <hr />
          </Route>

          <Route exact path= "/author/:id">
            <OneAuthor />
          </Route>

          <Route exact path= "/author/edit/:id">
          <Link to = "/" >Home</Link>
            <EditAuthor />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
