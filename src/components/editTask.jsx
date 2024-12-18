import React, { useState } from 'react';

const EditTask = ({ task, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    const updatedTask = { ...task, title, description };
    onEdit(updatedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default EditTask;