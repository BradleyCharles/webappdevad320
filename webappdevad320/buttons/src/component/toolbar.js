import React from "react";

const CustomToolbar = ({message, children}) => {

  const beep = () => {
  
    alert(message);
  };

  return (
      <button onClick={beep}>
        {children}
      </button>
  );
};

export { CustomToolbar };
