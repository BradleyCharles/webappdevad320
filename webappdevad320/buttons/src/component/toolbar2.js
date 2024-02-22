import React from "react";

const CustomToolbar2 = () => {
  const array = [
    { message: "Downloading! 1", children: "Download #1" },
    { message: "Downloading! 2", children: "Download #2" },
    { message: "Downloading! 3", children: "Download #3" },
    {},
  ];

  const beep = (message) => {
    alert(message);
  };

  const buttons = (
    <div>
      {array.map((button) => (
        <button
          key={button.children}
          onClick={() => beep(button.message || "Default message")}
        >
          {button.children || "Default Button"}
        </button>
      ))}
    </div>
  );

  return buttons;
};

export { CustomToolbar2 };
