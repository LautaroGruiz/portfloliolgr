import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Resto Code",
    img: "src/Image/RestoCode.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam laboreamet reiciendis sapiente modi quae cumque impedit incidunt",
  },
  {
    id: 2,
    title: "TaTeTi",
    img: "src/Image/TaTeTi.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam laboreamet reiciendis sapiente modi quae cumque impedit incidunt",
  },
  {
    id: 3,
    title: "Explosive Road",
    img: "src/Image/ExplosiveRoad.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam laboreamet reiciendis sapiente modi quae cumque impedit incidunt",
  },
  {
    id: 4,
    title: "Prodigy Pc",
    img: "src/Image/ProdigyPc.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam laboreamet reiciendis sapiente modi quae cumque impedit incidunt",
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
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Ver web</button>
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
