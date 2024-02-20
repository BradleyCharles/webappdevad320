import "../../css/style.css";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Main from "../../components/Main.js";
import Aside from "../../components/Aside.js"
import Navigation from "../../components/Navigation.js";


export default function Home() {

  //redirect('/contact');

  return (
      <div className="home">
        <Header />
        <Navigation page="home"/>
        <div className="wrapper">
          <Main />
          <Aside />
        </div>
        <Footer />
      </div>
  );
}
