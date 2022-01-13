// import logo from './logo.svg';
import './App.css';
import RosterId from './components/RosterId';

function App() {

  return (
    <div className="App">
      <h1>Student Roster</h1>
      {/* Information you pass down to a component is called props */}
      <RosterId price = {15.99} dish = {"Spicy Salmon Roll"} ></RosterId>
      <hr />
      <RosterId price = {12.99} dish = {"Squash"}></RosterId>
      <hr />
      <RosterId price = {8.99} dish = {"Crab Ragoon"}></RosterId>
      <hr />
      <RosterId price = {20.99} dish = {"Momo"}></RosterId>
      <hr />

    </div>
  );
}

export default App;

