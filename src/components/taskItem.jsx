import React, { useState } from "react";
import EditTask from "./editTask";
import ActionBar from "./actionBar";
import ViewTask from "./viewTask";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [showActions, setShowActions] = useState(false);
  const [showViewTask, setShowViewTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);

  const handleEdit = (updatedTask) => {
    updateTask(task.id, updatedTask);
    setShowEditTask(false);
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

  const openEditTask = () => {
    setShowEditTask(true);
  };

  const closeEditTask = () => {
    setShowEditTask(false);
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
          onEdit={openEditTask}
          onView={openViewTask}
        />
      )}

      {showViewTask && <ViewTask task={task} onClose={closeViewTask} />}

      {showEditTask && (
        <EditTask task={task} onClose={closeEditTask} onSave={handleEdit} />
      )}
    </div>
  );
};

export default TaskItem;
