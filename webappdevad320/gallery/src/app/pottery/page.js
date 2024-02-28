import "../../css/style.css";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Main_gallery from "../../components/Main_gallery.js";
import Aside from "../../components/Aside.js"
import Navigation from "../../components/Navigation.js";


export default function pottery() {

  //redirect('/contact');

  return (
      <div className="pottery">
        <Header />
        <Navigation />
        <div className="wrapper">
          <Main_gallery header="pottery"/>
          <Aside />
        </div>
        <Footer />
      </div>
  );
}
