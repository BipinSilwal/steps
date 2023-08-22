import React from 'react';

const Button = ({ handlePrevious, handleNext, color }) => {
  return (
    <>
      <button style={{ background: `${color}` }} onClick={handlePrevious}>
        Previous
      </button>
      <button style={{ background: `${color}` }} onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default Button;
