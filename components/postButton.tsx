import React from 'react';
import { FaPlus } from 'react-icons/fa';

const PlusButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="plus-button" onClick={onClick}>
      <FaPlus />
    </button>
  );
};

export default PlusButton;
