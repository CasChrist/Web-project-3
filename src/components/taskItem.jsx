import React, { useState } from "react";
import EditTask from "./EditTask";
import ActionBar from "./actionBar";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const handleEdit = (updatedTask) => {
    updateTask(task.id, updatedTask);
    setIsEditing(false);
  };

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  return (
    <div className="tasks-elem-container">
      <div
        className="outline tasks-elem-container-shape"
        data-id={task.id}
        onClick={toggleActions}
      >
        <div className="tasks-elem-container-text">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
        <button
          className="tasks-elem__delete outline"
          onClick={() => deleteTask(task.id)}
        >
          X
        </button>
      </div>

      {showActions && (
        <ActionBar taskID={task.id} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
};

export default TaskItem;
