import Wrapper from "./wr-MpLine1";
import logo from "../../assets/imgs/botvarium-low-resolution-logo-color-on-transparent-background.png";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";
import { motion } from "framer-motion";

const MpLine1 = () => {
  const dispatch = useDispatch();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },

    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Wrapper
      onMouseOver={() => {
        dispatch(closeSubmenu());
      }}
    >
      <div className="container">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        {/* <motion.svg initial="hidden" animate="visible">
          <motion.path
            variants={draw}
            d="M 130 110 C 120 140, 180 140, 170 110"
            stroke="black"
            fill="transparent"
          />
        </motion.svg> */}
        <div className="about">
          <p>Разработка личных кабинетов</p>
          <p>Визуализация данных</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default MpLine1;
