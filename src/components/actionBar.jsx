import React from "react";
import ShareTask from "./ShareTask";

const ActionBar = ({ taskID, onEdit }) => {
  return (
    <div className="tasks-elem-container__actions">
      <ShareTask taskID={taskID} />
      <button
        className="tasks-elem-container__actions-details"
        onClick={() => alert(`Details for task ID: ${taskID}`)}
      >
        i
      </button>
      <button className="tasks-elem-container__actions-edit" onClick={onEdit}>
        <img src="./src/assets/edit.svg" alt="Edit" />
      </button>
    </div>
  );
};

export default ActionBar;
