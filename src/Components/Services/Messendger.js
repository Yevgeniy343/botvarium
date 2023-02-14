import Wrapper from "./wr-WebApp";
import img from "../../assets/imgs/undraw_Chatting_re_j55r.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SvgMessenger from "../../svg/SvgMessenger";

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

const Messenger = () => {
  const refCodeEditor = useRef();
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: [
      "Все больше набирают популярность мессенджеры, потому что они позволяют обмениваться визуальной информацией в реальном времени. Мы занимаемся разработкой мессенджеров, которые можно использовать внутри своей компании, для взаимодействия с коллегами и клиентами.",
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
          <button className="btn" onClick={() => navigate("/messenger")}>
            Узнать подробнее
          </button>
        </div>
        <div className="image">
          {/* <img src={img} alt="web" /> */}
          <SvgMessenger />
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Messenger;
