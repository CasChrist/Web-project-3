import React from 'react';

const ShareTask = ({ taskID }) => {
  const handleShare = () => {
    alert(`Task ${taskID} shared!`);
  };

  return (
    <button onClick={handleShare}>Share</button>
  );
};

export default ShareTask;