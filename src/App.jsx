import "./App.scss";
import Lautaro from "./Components/lautaro/Lautaro";
import Navbar from "./Components/navbar/Navbar";
// import Test from "./Components/test/Test";

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Lautaro />
      </section>
      <section id="Services">Services</section>
      <section id="Portfolio">Portfolio</section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </>
  );
}

export default App;
