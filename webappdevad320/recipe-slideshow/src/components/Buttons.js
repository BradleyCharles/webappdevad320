import React from "react";

const DecreaseOne = ({ handleDecrease }) => {
  return (
    <div className="Previous">
      <button onClick={handleDecrease}>Previous</button>
    </div>
  );
};

const IncreaseOne = ({ handleIncrease }) => {
  return (
    <div className="Next">
      <button onClick={handleIncrease}>Next</button>
    </div>
  );
};

export { IncreaseOne, DecreaseOne };
