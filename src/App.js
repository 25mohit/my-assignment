import { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { TodoModal } from './components/todoModal/TodoModal';

function App() {

  const [showAddTodo, setShowAddTodo] = useState(false)

  return (
    <div className="App">
        <Header showTodo= { setShowAddTodo } currentState={ showAddTodo }/>
        {showAddTodo && <TodoModal showTodo={ setShowAddTodo }/>}
        <Home />
    </div>
  );
}

export default App;
