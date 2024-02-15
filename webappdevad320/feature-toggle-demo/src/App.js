import FeatureToggle from './FeatureToggle.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Features!</p>
    <FeatureToggle isEnabled={true} featureName='Feature #1' />
    <FeatureToggle isEnabled={true} featureName='Feature #2' />
    <FeatureToggle isEnabled={false} featureName='Feature #3' />
    <FeatureToggle isEnabled={true} featureName='Feature #4' />
    <FeatureToggle isEnabled={true} featureName='Feature #5' />
    </div>
  );
}

export default App;
