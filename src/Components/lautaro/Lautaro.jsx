import "./Lautaro.scss";
import { motion } from "framer-motion";
import lautaroFoto from "../../Image/LautaroFoto.png"
import scroll from "../../Image/scroll.png"


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const downloadPDF = () => {
  // Ruta o URL de tu archivo PDF
  const pdfURL = "/src/public/Gonzalez Ruiz Lautaro CV.pdf";

  // Crea un elemento "a" para simular un enlace de descarga
  const downloadLink = document.createElement("a");
  downloadLink.href = pdfURL;
  downloadLink.download = "Gonzalez Ruiz Lautaro CV.pdf"; // Nombre del archivo descargado
  downloadLink.click();
};

const scrollToSection = () => {
  const section = document.getElementById("Contacto");
  section.scrollIntoView({ behavior: "smooth" });
};

const Lautaro = () => {
  return (
    <div className="lautaro">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>LAUTARO GONZALEZ RUIZ</motion.h1>
          <motion.h2 variants={textVariants}>
            Desarrollador & Diseñador Web creativo y entusiasta, especializado
            en experiencia de usuario e interfaces web.
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={downloadPDF}>
              Curriculum vitae
            </motion.button>
            <motion.button variants={textVariants} onClick={scrollToSection}>
              Contáctame
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
          />
        </motion.div>
      </div>
      <motion.div
        className="slindingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front-End Developer
      </motion.div>
      <div className="imageContainer">
        <img src={lautaroFoto} alt="" />
      </div>
    </div>
  );
};

export default Lautaro;
