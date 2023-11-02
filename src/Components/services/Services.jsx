import "./Services.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Me concentro en ayudarte a que tu
          <br /> empresa crezca y avance.
        </p>
        <hr />
      </motion.div>
      <motion.div className="tittleContainer" variants={variants}>
        <div className="tittle">
          <img src="src\Image\people.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Soluciones</motion.b>{" "}
            unicas
          </h1>
        </div>
        <div className="tittle">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Para tu</motion.b>{" "}
            negocio.
          </h1>
          <button>¿Qué hacemos?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Marca</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            placeat, eius debitis sequi reprehenderit deserunt quo nesciunt
            
          </p>
          <button>Ir</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Marca</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            placeat, eius debitis sequi reprehenderit deserunt quo nesciunt
            
          </p>
          <button>Ir</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Marca</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            placeat, eius debitis sequi reprehenderit deserunt quo nesciunt
            
          </p>
          <button>Ir</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Marca</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            placeat, eius debitis sequi reprehenderit deserunt quo nesciunt
            
          </p>
          <button>Ir</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
