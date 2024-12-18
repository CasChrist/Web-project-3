import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="tasks">
      {tasks.length === 0 ? (
        <p className="tasks-none">No tasks</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))
      )}
    </div>
  );
};

export default TaskList;