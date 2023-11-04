import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { restoCode } from "../../Image/RestoCode.png";
import { tateti } from "../../Image/TaTeTi.png";
import { explosiveroad } from "../../Image/ExplosiveRoad.png";
import { prodigy } from "../../Image/ProdigyPc.png";

const items = [
  {
    id: 1,
    title: "Resto Code",
    img: { restoCode },
    desc: "Proyecto de aplicación web centrada en la experiencia de un Bar/Restobar, ofreciendo a los clientes la posibilidad de realizar reservas para sus visitas. Además, los administradores cuentan con acceso adicional, lo que les permite gestionar eficazmente el funcionamiento del establecimiento, como la gestión de menús, horarios y reservas. ",
    link: "https://restocode.netlify.app",
  },
  {
    id: 2,
    title: "TaTeTi",
    img: { tateti },
    desc: "El juego clásico de Tateti, conocido también como Tres en Línea, es un juego de estrategia donde dos jugadores se enfrentan en un tablero de 3x3.  Es un juego sencillo pero desafiante que requiere planificación y anticipación para ganar a tu oponente",
    link: "https://tatetibylgr.netlify.app",
  },
  {
    id: 3,
    title: "Explosive Road",
    img: { explosiveroad },
    desc: "Videojuego en 2D con múltiples niveles, en el que al desviarte del camino designado, comienzas de nuevo y pierdes una vida. Además, cuentas con un cronómetro que registra tu tiempo récord y te desafía a superarlo en cada intento.",
    link: "https://explosiveroad.netlify.app",
  },
  {
    id: 4,
    title: "Prodigy Pc",
    img: { prodigy },
    desc: "Proyecto de comercio electrónico en línea especializado en periféricos de PC, con una cuenta de administrador que permite la creación, edición y eliminación de productos. Además, podrás filtrar los productos según tus preferencias.",
    link: "https://prodigypc.netlify.app/index.html",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link}>Ver web</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Proyectos destacados</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
