import { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { TodoModal } from './components/todoModal/TodoModal';
import { TiInfo } from 'react-icons/ti'
import { InfoModal } from './components/infoModal/InfoModal';

function App() {

  const [showAddTodo, setShowAddTodo] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="App">
        <Header showTodo= { setShowAddTodo } currentState={ showAddTodo }/>
        {showAddTodo && <TodoModal showTodo={ setShowAddTodo }/>}
        <Home />
        {/* <div></div> */}
        {showInfo && <InfoModal setShowInfo={ setShowInfo}/>}
        <TiInfo id='info-icon' onClick={() => setShowInfo(true)}/>
    </div>
  );
}

export default App;
