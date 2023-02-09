import Wrapper from "./wr-WebApp";
import img from "../../assets/imgs/undraw_Personal_site_re_c4bp.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
const Clients = () => {
  const refCodeEditor = useRef();
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: [
      "Веб-приложения сейчас используются ежедневно, и уже являются обязательным атрибутом любой компании и бизнеса. Они делают любое общение с клиентом интерактивным и уведичивают монетизацию любого бизнесс-процесса многократно. ",
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
        <div>
          <button
            className="btn"
            type="button"
            onClick={() => navigate("/clients-pa")}
          >
            Узнать подробнее
          </button>
        </div>

        <div className="image">
          <img src={img} alt="web" />
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Clients;
