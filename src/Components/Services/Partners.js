import Wrapper from "./wr-WebApp";
import img from "../../assets/imgs/undraw_Selecting_team_re_ndkb.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SvgPartners from "../../svg/SvgPartners";

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

const Partners = () => {
  const refCodeEditor = useRef();
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: [
      "  Личный кабинет партнероов позволяет автоматизировать бизнес-процессы, наладить взаимодействие с партнерами, получать и предоставлять своевременно информацию.",
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
          <button className="btn" onClick={() => navigate("/partners-pa")}>
            Узнать подробнее
          </button>
        </div>

        <div className="image">
          {/* <img src={img} alt="web" /> */}
          <SvgPartners />
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Partners;
