import React from 'react';

const CustomButton = () => {
  const beep = () => {
    alert('BEEP');
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          <button
            onClick={beep}
          >
            BEEP
          </button>
        </div>
      </div>
    </div>
  );
};

export { CustomButton };
