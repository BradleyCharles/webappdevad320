import MessageSender from "./MessageSender.js";

const Counter = () => {
  const beep = () => {
    alert("BEEP");
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="Button">
          <button onClick={beep}>Counter</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
