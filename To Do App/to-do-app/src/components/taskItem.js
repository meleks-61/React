import React from "react";
import {BiCheckbox} from "react-icons/bi";
import {FiCheck} from "react-icons/fi";
import {TiTimes} from "react-icons/ti";
import "./taskItem.css"







const TaskItem=({item,toggleDone,onDelete,color}) =>{



   

    return(
        <div className="task">
        <div className="taskitem"  style={{background:color}}  >
                 {!item.isDone?
                
                <BiCheckbox className="kutu" onClick={()=>toggleDone(item.id)}  style={{ color:"lightgrey",cursor:"pointer"}}/>
                :
                <FiCheck className="tic"onClick={()=>toggleDone(item.id)} style={{ color:"purple",cursor:"pointer"}} />
              }

            <p className={`${item.isDone ? "overline": ""}`} style={ { color:"purple"} }>
           
              {item.text} 
              


            </p>
            <TiTimes className="times" onClick={()=>onDelete(item.id)} style={ !item.isDone ?{ color:"lightgrey",cursor:"pointer"} : {color:"purple",cursor:"pointer"}}/>



        </div>
        </div>




    )
}
export default TaskItem;