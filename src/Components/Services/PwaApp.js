import Wrapper from "./wr-WebApp";
import img from "../../assets/imgs/undraw_progressive_app_m9ms.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SvgPwa from "../../svg/SvgPwa";

const pathVariants = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const PwaApp = () => {
  const refCodeEditor = useRef();
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: [
      "PWA или Progressive Web Application – технология, которая позволяет Вашим клиентам установить сайт на смартфон как приложение. Теперь не нужно разрабатывать отдельно сайт, приложение под iOS и Android. Достаточно иметь и поддерживать только сайт",
    ],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 1,
  });
  return (
    <Wrapper>
      <motion.div
        className="content"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      >
        <div className="codeEditor" ref={refCodeEditor}>
          <span>{text}</span>
        </div>
        <div className="div">
          <button className="btn" onClick={() => navigate("/pwa-app")}>
            Узнать подробнее
          </button>
        </div>

        <div className="image">
          {/* <img src={img} alt="web" /> */}
          <SvgPwa />
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default PwaApp;
