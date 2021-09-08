import React from "react";
import {BiCheckbox} from "react-icons/bi";
import {FiCheck} from "react-icons/fi";
import "./taskItem.css"



const TaskItem=({item,toggleDone}) =>{

    return(
        <div className={`taskitem ${item.isDone? "done": ""}`}  >
            <h5>
                {!item.isDone?
                
              <BiCheckbox className="kutu" onClick={()=>toggleDone(item.id)} />
              :
              <FiCheck className="tic"onClick={()=>toggleDone(item.id)}/>
            }
              {item.text} 


            </h5>



        </div>




    )
}
export default TaskItem;