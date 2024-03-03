import React from "react";

const DecreaseOne = ({ buttonState, handleDecrease }) => {
  return (
    <div className="Previous">
      <button onClick={handleDecrease}>Previous</button>
    </div>
  );
};

const IncreaseOne = ({ buttonState, handleIncrease }) => {
  return (
    <div className="Next">
      <button onClick={handleIncrease}>Next</button>
    </div>
  );
};

export { IncreaseOne, DecreaseOne };
