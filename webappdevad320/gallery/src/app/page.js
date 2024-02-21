import "../css/style.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Main from "../components/Main.js";
import Aside from "../components/Aside.js";
import Navigation from "../components/Navigation.js";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navigation />
      <div className="wrapper">
        <Main header="Welcome"/>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default Home; 