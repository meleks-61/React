import React, {useState} from 'react';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import Tasklist from './components/Tasklist';
import {initialState} from "./store/initialStates";
import './App.css';


function App() {
  const[showTask, setTask] =useState(initialState)
  const[taskBarShowed, setTaskBarShowed] =useState(false);

  //Create a Task

  
  const onCreate =(task) =>{
    const id =Date.now()
    const NewTask ={id,...task}
    setTask((prevState) =>[...prevState,NewTask])
  }

  //Delete Task

  const onDelete =(deletedId) =>setTask((showTask.filter((item)=> item.id!==deletedId)))

  //Toggle Done
  const toggleDone =(id)=>{
    setTask(showTask.map((task) => 
      task.id===id ?{...task,isDone: !task.isDone}: task
    
    )
    )

  }


  //toggle show and hide
  const toggleShow =()=> setTaskBarShowed((prev)=>(!prev))

  return (
    <div className="container">
      <Header title="Task Tracker" taskBarShowed={taskBarShowed} toggleShow={toggleShow}/>

      {taskBarShowed ?  <CreateTask onCreate={onCreate}/>
        :"" 
         

      }
     
      { showTask.length>0 ?
         <Tasklist  elmn={showTask} onDelete ={onDelete} toggleDone={toggleDone}/>
         :
         <p>No Task to Show</p>

      }
     
    
    </div>
  );
}

export default App;
