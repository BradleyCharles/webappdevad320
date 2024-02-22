import React from "react";

const CustomButton = () => {

  const beep1 = () => {
    alert("BEEP1");
  };

  const beep2 = (e) => {
    alert("BEEP2");
    e.stopPropagation()
  };


  return (
    <button className= 'large' onClick={beep1}>
      <button onClick={beep2}>
        BEEP
      </button>
    </button>
  );
};

export { CustomButton };
