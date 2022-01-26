import logo from './logo.svg';
import './App.css';
import NewForm from './components/NewForm';
import AllForms from './components/AllForms';
import OneForm from './components/OneForm';

import {
  BrowserRouter, //tells the application we can enable routing
  Switch,
  Route,
  Link 
} from "react-router-dom";


/*
when form submits, send post request using axios with teh form info to create something new
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Belt Review</h1>
        <Switch>
          <Route exact path= "/">
            <NewForm></NewForm>
            <hr />
            <AllForms />
          </Route>

          <Route exact path = "/jokes/:id">
            <OneForm />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
