import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App container">
      <h1>React application to store and modify a list of tasks.</h1>
      <TodoList/>
    </div>
  );
}

export default App;
