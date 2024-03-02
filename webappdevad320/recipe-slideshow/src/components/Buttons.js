import React from "react";

const IncreaseOne = ({ buttonState, handleIncrease }) => {
  return (
    <div className="Button">
      <button onClick={handleIncrease}>IncreaseOnce: {buttonState}</button>
    </div>
  );
};

const DecreaseOne = ({ buttonState, handleDecrease }) => {
  return (
    <div className="Button">
      <button onClick={handleDecrease}>DecreaseOnce: {buttonState}</button>
    </div>
  );
};

export { IncreaseOne, DecreaseOne };
