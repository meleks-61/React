import {useState} from "react";
import "./CreateTask.css";

function CreateTask({onCreate}) {
    const[text,setText]=useState("")
    const[day,setDay]=useState("")
    const handleTextChange =(e) =>setText(e.target.value)
    const handleDayChange =(e) =>setDay(e.target.value)
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!day || !text){
            alert("please fill both fields")
        }else{

            onCreate({text,day,isDone:false});
            setText("");
            setDay("");
        }
       
    }
    

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="Enter a task name"
          onChange={handleTextChange}
          value={text}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Enter a day and time"
          onChange={handleDayChange}
          value={day}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block  bg-success
      " />
    </form>
  );
}
export default CreateTask;
