// import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent'

function App() {
  return (
    <div className="App">
      <Menu dish={"Calamari"} price={15.99} likes={3}>
        <p>Description: It's fried squid with basil</p>
      </Menu>
      <hr />
      <Menu dish={"Vegan Chicken Cutlet"} price={22.99} likes={9}>
        <p>Description: The only way I would ever go back to eating chicken</p>
      </Menu>
      <hr />
      <Menu dish={"Vegan Burger"} price={18.99} likes={16}>
        <p>Description: The healthier way to eat a burger</p>
      </Menu>
    </div>
  );
}

export default App;
