import { CustomToolbar } from "./component/toolbar.js";
import { CustomToolbar2 } from "./component/toolbar2.js";
import { CustomButton } from "./component/toolbar1.js";
import "./App.css";

function App() {
  return (
    //Returns the imported component FeatureToggle with the values of isEnabled and featureName
    <div className="App">
      <div className="button">
        <div className="left">
          <p>In-Class Activity: Nested Button Clicks</p>
          <CustomButton />
        </div>
        <div className="center">
          <p>In-Class Activity: Custom Alert Buttons in React</p>
          <CustomToolbar message="Message #1" children="Children #1" />
          <CustomToolbar message="Message #2" children="Children #2" />
          <CustomToolbar message="Message #3" children="Children #3" />
        </div>
        <div className="right">
          <p>In-Class Activity: Dynamic Alert Buttons with Props</p>
          <CustomToolbar2 />
        </div>
      </div>
    </div>
  );
}

export default App;
