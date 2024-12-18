import React, { useState } from "react";
import EditTask from "./EditTask";
import ActionBar from "./actionBar";
import ViewTask from "./viewTask";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showViewTask, setShowViewTask] = useState(false);

  const handleEdit = (updatedTask) => {
    updateTask(task.id, updatedTask);
    setIsEditing(false);
  };

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  const openViewTask = () => {
    setShowViewTask(true);
  };

  const closeViewTask = () => {
    setShowViewTask(false);
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
        <ActionBar
          taskID={task.id}
          onEdit={() => setIsEditing(true)}
          onView={openViewTask}
        />
      )}

      {showViewTask && (
        <ViewTask task={task} onClose={closeViewTask} />
      )}
    </div>
  );
};

export default TaskItem;
