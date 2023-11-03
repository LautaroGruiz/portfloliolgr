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
      <section id="Inicio">
        <Navbar />
        <Lautaro />
      </section>
      <section>
        <Parrallax type="services" />
      </section>
      <section id="Servicios">
        <Services />
      </section>
      <section id="Portafolio">
        <Parrallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contacto">
        <Contact />
      </section>
      {/* <Test /> */}
    </>
  );
}

export default App;
