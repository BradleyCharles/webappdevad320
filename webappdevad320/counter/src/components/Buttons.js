import { useState } from "react";

const IncreaseOnce = () => {
  const [buttonOne, setButtonOne] = useState(0);

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          <button onClick={() => setButtonOne((count) => count + 1)}>
            IncreaseOnce: {buttonOne}
          </button>
        </div>
      </div>
    </div>
  );
};

const IncreaseDelayed = () => {
  const [buttonTwo, setButtonTwo] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setButtonTwo((count) => count + 1);
    }, 1000);
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          <button onClick={handleClick}>IncreaseDelayed: {buttonTwo}</button>
        </div>
      </div>
    </div>
  );
};

const IncreaseTwice = () => {
  const [buttonThree, setButtonThree] = useState(0);

  const handleClick = () => {
    setButtonThree(buttonThree + 1);
    setButtonThree(buttonThree + 1);
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          <button onClick={handleClick}>IncreaseTwice: {buttonThree}</button>
        </div>
      </div>
    </div>
  );
};

const IncreaseTwiceCorrect = () => {
  const [buttonFour, setButtonFour] = useState(0);

  const handleClick = () => {
    setButtonFour((setButtonFour) => setButtonFour + 1);
    setButtonFour((setButtonFour) => setButtonFour + 1);
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          <button onClick={handleClick}>
            IncreaseTwiceCorrect: {buttonFour}
          </button>
        </div>
      </div>
    </div>
  );
};

export { IncreaseOnce, IncreaseTwice, IncreaseTwiceCorrect, IncreaseDelayed };
