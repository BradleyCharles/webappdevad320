import "../css/style.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Main_showcase from "../components/Main_showcase.js";
import Aside from "../components/Aside.js";
import Navigation from "../components/Navigation.js";

export default function home() {
  return (
    <div className="drawings">
      <Header />
      <Navigation />
      <div className="wrapper">
        <Main_showcase header="drawings" />
        <Aside />
        
      </div>
      <Footer />
    </div>
  );
}
