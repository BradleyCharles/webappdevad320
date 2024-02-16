import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ContentA from "./components/ContentA.js";
import ContentB from "./components/ContentB.js";
import { CustomButton } from "./components/SharedComponents.js";

export default function App() {
  return (
    <div>
      <Header />
      <ContentA />
      <CustomButton />
      <ContentB />
      <CustomButton />
      <Footer />
    </div>
  );
}
