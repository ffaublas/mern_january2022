import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';

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
        <h1>Product Manager Part 1</h1>
        <Switch>
          <Route exact path= "/">
            <AddProducts />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
