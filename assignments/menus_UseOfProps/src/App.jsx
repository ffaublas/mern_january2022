import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Menu dish = {"Calamari"} price = {12.99} likes = {2}></Menu>
      <p>Description: This is just plain gross at the thought of it all </p>
      <hr />
      <Menu dish = {"Escargo"}price = {54.99} likes = {2}></Menu>
      <p>Description: Who decided that this is a delicacy? </p>      
      <hr />
      <Menu dish = {"Duck Confeit"} price = {38.99} likes = {2}></Menu>
      <p>Description: Saturated in sodium.  Very salty. </p>
      <hr />
      <Menu dish = {"Bolognese"} price = {27.99} likes = {2}></Menu>
      <p>Description: Best served with Beyond Meat for Vegans </p>
      <hr />

    </div>
  );
}

export default App;
