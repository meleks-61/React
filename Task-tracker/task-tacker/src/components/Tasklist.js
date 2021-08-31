import React from 'react'

import Task from './Task';


 function Tasklist({elmn,onDelete,toggleDone}) {
     

  return (
    <div className="taskList">
        {elmn.map((item) => (
            <Task key={item.id} task={item} onDelete={onDelete} toggleDone={toggleDone}/>
            
            // 
        ))



        }
      
    </div>
  )
}
export default Tasklist;
