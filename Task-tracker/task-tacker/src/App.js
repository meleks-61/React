import React, {useState} from 'react';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import Tasklist from './components/Tasklist';
import {initialState} from "./store/initialStates";
import './App.css';


function App() {
  const[showTask, setTask] =useState(initialState)

  //Create a Task

  //Delete Task

  const onDelete =(deletedId) =>setTask((showTask.filter((item)=> item.id!==deletedId)))

  //Toggle Done


  //toggle show and tide

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <CreateTask/>
      <Tasklist  elmn={showTask} onDelete ={onDelete}/>
    
    </div>
  );
}

export default App;
