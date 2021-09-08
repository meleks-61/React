import React, { useState } from "react";
import { TiPen } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import "./createTask.css";

function CreateTask({onCreate}) {
  const [text, setText] = useState("");
  const handleTextChange =(e) =>setText(e.target.value)
  const onClick= (e) =>{
      if(!text){
          alert("Please fill field")
      }else{
      e.preventDefault();
      onCreate({text,isDone:false})
      setText("")
  }
}

  
  return (
    <div className="add-task">
      <div className="add-input">
        <TiPen className="pen" />
        <input
          type="text"
          id="task"
          value={text}
          name="task"
          placeholder="Add item"
          onChange={handleTextChange}
        />
        <FaPlus className="plus" onClick={onClick} />
      </div>
    </div>
  );
}
export default CreateTask;
