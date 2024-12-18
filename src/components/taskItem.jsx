import React from 'react';
import EditTask from './EditTask';
import ShareTask from './ShareTask';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleEdit = (updatedTask) => {
    updateTask(task.id, updatedTask);
  };

  return (
    <div className="tasks-elem" data-id={task.id}>
      <div className="tasks-elem-text">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <button className="tasks-elem__delete outline" onClick={() => deleteTask(task.id)}>X</button>
      <EditTask task={task} onEdit={handleEdit} />
      <ShareTask taskID={task.id} />
    </div>
  );
};

export default TaskItem;