import "./App.css";
import Counter from "./components/Counter.js";
import {
  IncreaseOnce,
  IncreaseTwice,
  IncreaseDelayed,
  IncreaseTwiceCorrect,
} from "./components/Buttons.js";

export default function App() {
  return (
    <div>
      <IncreaseOnce />
      <IncreaseTwice />
      <IncreaseDelayed />
      <IncreaseTwiceCorrect />
      <Counter />
    </div>
  );
}
