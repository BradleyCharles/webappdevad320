import "./App.css";
import {
  IncreaseOnce,
  IncreaseTwice,
  IncreaseDelayed,
  IncreaseTwiceCorrect,
} from "./components/Buttons.js";

function App() {
  return (
    <div>
      <br />
      <IncreaseOnce />
      <br />
      <IncreaseDelayed />
      <br />
      <IncreaseTwice />
      <br />
      <IncreaseTwiceCorrect />
    </div>
  );
}

export default App;
