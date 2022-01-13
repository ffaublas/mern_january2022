// import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {

  return (
    <div className="App">
      <h1>Dojo Diner - The finest food for Javascript Developers</h1>
      {/* Information you pass down to a component is called props */}
      <MenuItem price = {15.99} dish = {"Spicy Salmon Roll"} likes = {2} >
        <p>It's really spicy</p>
        <em>Allergies info: shellfish</em>
      </MenuItem>
      <hr />
      <MenuItem price = {12.99} dish = {"Squash"} likes = {3}>
        <p>It's squashy</p>
      </MenuItem>
      <hr />
      <MenuItem price = {8.99} dish = {"Crab Ragoon"} likes = {0}>
        <p>Nobody eats crab</p>
      </MenuItem>
      <hr />
      <MenuItem price = {20.99} dish = {"Momo"} likes = {5} >
        <p>From the last airbender</p>
      </MenuItem>
      <hr />

    </div>
  );
}

export default App;

