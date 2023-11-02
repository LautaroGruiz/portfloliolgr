import "./App.scss";
import Contact from "./Components/contact/Contact";
import Lautaro from "./Components/lautaro/Lautaro";
import Navbar from "./Components/navbar/Navbar";
import Parrallax from "./Components/parrallax/Parrallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";
// import Test from "./Components/test/Test";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Lautaro />
      </section>
      <section id="Services">
        <Parrallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parrallax tpe="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </>
  );
}

export default App;
