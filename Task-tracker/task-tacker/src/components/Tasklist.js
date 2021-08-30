import React from 'react'

import Task from './Task';


 function Tasklist({elmn,onDelete}) {
     

  return (
    <div>
        {elmn.map((item) => (
            <Task key={item.id} task={item} onDelete={onDelete}/>
            
            // 
        ))



        }
      
    </div>
  )
}
export default Tasklist;
