import "../../css/style.css";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Main_contact from "../../components/Main_contact.js";
import Aside from "../../components/Aside.js";
import Navigation from "../../components/Navigation.js";

export default function Home() {
  return (
    <div className="contact">
      <Header />
      <Navigation />
      <div className="wrapper">
        <Main_contact header="Contact Me!" />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}
