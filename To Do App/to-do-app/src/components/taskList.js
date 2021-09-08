import React from 'react';
import TaskItem from './taskItem';

const TaskList = ({showTask,toggleDone}) => {
  return (
    <div className="taskList">
        {showTask.map((item)=>(
            <TaskItem key={item.id} item={item} toggleDone={toggleDone} />
        ))}
      
    </div>
  )
}

export default TaskList;
