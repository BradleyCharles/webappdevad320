// IncreaseOnce Component:
// This component renders a button that increments a counter by one each time it is clicked.

import { useState } from "react";

const IncreaseOnce = () => {
  // State variable to track the button click count
  const [buttonOne, setButtonOne] = useState(0);

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          {/* Button triggers the increment of the counter by one */}
          <button onClick={() => setButtonOne((count) => count + 1)}>
            IncreaseOnce: {buttonOne}
          </button>
        </div>
      </div>
    </div>
  );
};

// IncreaseDelayed Component:
// This component renders a button that increments a counter by one, but with a delay of 1000 milliseconds.

const IncreaseDelayed = () => {
  // State variable to track the button click count
  const [buttonTwo, setButtonTwo] = useState(0);

  // Function to handle button click with a delayed increment
  const handleClick = () => {
    setTimeout(() => {
      setButtonTwo((count) => count + 1);
    }, 1000);
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          {/* Button triggers the delayed increment of the counter by one */}
          <button onClick={handleClick}>IncreaseDelayed: {buttonTwo}</button>
        </div>
      </div>
    </div>
  );
};

// IncreaseTwice Component:
// This component renders a button that incorrectly increments the counter by two with a single click.

const IncreaseTwice = () => {
  // State variable to track the button click count
  const [buttonThree, setButtonThree] = useState(0);

  // Function to handle button click with incorrect double increment
  const handleClick = () => {
    // Incorrectly increments the counter by two with a single click
    setButtonThree(buttonThree + 1);
    setButtonThree(buttonThree + 1);
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          {/* Button triggers the incorrect double increment of the counter by two */}
          <button onClick={handleClick}>IncreaseTwice: {buttonThree}</button>
        </div>
      </div>
    </div>
  );
};

// IncreaseTwiceCorrect Component:
// This component renders a button that correctly increments the counter by two with two separate calls.

const IncreaseTwiceCorrect = () => {
  // State variable to track the button click count
  const [buttonFour, setButtonFour] = useState(0);

  // Function to handle button click with correct double increment
  const handleClick = () => {
    // Correctly increments the counter by two with two separate calls
    setButtonFour((setButtonFour) => setButtonFour + 1);
    setButtonFour((setButtonFour) => setButtonFour + 1);
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          {/* Button triggers the correct double increment of the counter by two */}
          <button onClick={handleClick}>
            IncreaseTwiceCorrect: {buttonFour}
          </button>
        </div>
      </div>
    </div>
  );
};

// Exporting the components for use in other parts of the application
export { IncreaseOnce, IncreaseTwice, IncreaseTwiceCorrect, IncreaseDelayed };
