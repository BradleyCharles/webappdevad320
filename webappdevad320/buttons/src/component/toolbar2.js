import React from "react";

const CustomToolbar2 = () => {
  const array = [
    { message: "Downloading! 1", children: "Download File 1" },
    { message: "Downloading! 2", children: "Download File 2" },
    { message: "Downloading! 3", children: "Download File 3" },
  ];

  const beep = (message) => {
    alert(message);
  };

  const buttons = (
    <div>
      {array.map((button) => (
        <button key={button.children} onClick={() => beep(button.message)}>
          {button.children}
        </button>
      ))}
    </div>
  );

  return buttons;
};

export { CustomToolbar2 };
