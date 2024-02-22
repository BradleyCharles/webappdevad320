import { CustomToolbar } from "./component/toolbar.js";
import { CustomToolbar2 } from "./component/toolbar2.js";
import "./App.css";

function App() {
  const array = [
    { message: "Downloading! 1", children: "Download File 1" },
    { message: "Downloading! 2", children: "Download File 2" },
    { message: "Downloading! 3", children: "Download File 3" },
    {},
  ];

  
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

  return (
    //Returns the imported component FeatureToggle with the values of isEnabled and featureName
    <div className="App">
      <div className="button">
        <CustomToolbar message="Message #1" children={"Child #1"} />
        <CustomToolbar message="Message #2" children="Child #2" />
        <CustomToolbar message="Message #3" children="Child #3" />
        <br />
        <CustomToolbar2 m={0} c={0} />
        <CustomToolbar2 m={1} c={1} />
        <CustomToolbar2 m={2} c={2} />
        <CustomToolbar2 m={3} c={3} />
      </div>
    </div>
  );
}

export default App;
