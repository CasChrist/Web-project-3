import React from 'react';

const ShareTask = ({ taskID }) => {
  const handleShare = () => {
    alert(`Task ${taskID} shared!`);
  };

  return (
    <button onClick={handleShare}><img src="./src/assets/share.svg" alt="share"/></button>
  );
};

export default ShareTask;