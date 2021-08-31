import React from 'react';
import {FaTimes} from "react-icons/fa";
import "./task.css"



 function Task({task,onDelete,toggleDone}) {
  return (
    <div className ={`task ${task.isDone ? "done" : ""}`}  onDoubleClick={()=>toggleDone(task.id)}>
        <h3 >
            {task.text}
            <FaTimes onClick={() => onDelete(task.id)} style={{color:"red",cursor:"pointer"}}
            />
        </h3>
        <p>{task.day}</p>
      
    </div>
  )
}
export default Task;



