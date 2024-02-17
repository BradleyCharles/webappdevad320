import FeatureToggle from "./FeatureToggle.js";
import "./App.css";

function App() {
  return ( //Returns the imported component FeatureToggle with the values of isEnabled and featureName
    <div className="App">
      <div className="Features">  
        <p>Features!</p>
        <FeatureToggle isEnabled={true} featureName="Feature #1" />
        <FeatureToggle isEnabled={true} featureName="Feature #2" />
        <FeatureToggle isEnabled={false} featureName="Feature #3" />
        <FeatureToggle isEnabled={true} featureName="Feature #4" />
        <FeatureToggle isEnabled={true} featureName="Feature #5" />
      </div>
    </div>
  );
}


export default App;