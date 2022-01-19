import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <h1>Welcome</h1>
          </Route>
          <Route exact path = "/:id/">
            <Display></Display>
          </Route>
        </Switch>
      </div>
    
    </BrowserRouter>
  );
}

export default App;