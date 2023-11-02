import "./App.scss";
import Lautaro from "./Components/lautaro/Lautaro";
import Navbar from "./Components/navbar/Navbar";
import Parrallax from "./Components/parrallax/Parrallax";
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
      <section>Portafolio1</section>
      <section>Portafolio2</section>
      <section>Portafolio3</section>
      <section id="Contact">Contacto</section>
      {/* <Test /> */}
    </>
  );
}

export default App;
