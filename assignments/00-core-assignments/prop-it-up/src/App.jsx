// import logo from './logo.svg';
import './App.css';
import RosterId from './components/RosterId';

function App() {

  return (
    <div className="App">
      <h1>Thursday's Comedian Roster</h1>
      {/* Information you pass down to a component is called props */}
      <RosterId Name = {'Williams, Robin'} Age = {45} HairColor = {"Brown"} ></RosterId>
      <hr />
      <RosterId Name = {'Hart, Kevin'} Age = {38} HairColor = {"Black"}></RosterId>
      <hr />
      <RosterId Name = {'Pryor, Richard'} Age = {60} HairColor = {"White"}></RosterId>
      <hr />
      <RosterId Name = {'Rock, Chris'} Age = {29} HairColor = {"Blonde"}></RosterId>
      <hr />

    </div>
  );
}

export default App;

