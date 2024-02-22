import { CustomToolbar } from "./component/toolbar.js";
import { CustomToolbar2 } from "./component/toolbar2.js";
import "./App.css";

function App() {
  return (
    //Returns the imported component FeatureToggle with the values of isEnabled and featureName
    <div className="App">
      <div className="button">
        <CustomToolbar message="Message #1" children={"Child #1"} />
        <CustomToolbar message="Message #2" children="Child #2" />
        <CustomToolbar message="Message #3" children="Child #3" />
        <CustomToolbar2 />
      </div>
    </div>
  );
}

export default App;
