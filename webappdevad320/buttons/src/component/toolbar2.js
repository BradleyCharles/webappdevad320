import React from "react";

const CustomToolbar2 = ({ m, c }) => {
  const array = [
    { message: "Downloading! 1", children: "Download File 1" },
    { message: "Downloading! 2", children: "Download File 2" },
    { message: "Downloading! 3", children: "Download File 3" },
    {},
  ];

  const arrayMessage = array[m].message;
  const arrayChildren = array[c].children;

  const beep = () => {
    alert(arrayMessage);
  };

  return <button onClick={beep}>{arrayChildren}</button>;
};

export { CustomToolbar2 }; 
