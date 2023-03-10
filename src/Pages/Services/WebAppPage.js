import Wrapper from "./wr-WebAppPage";
import Navbar from "../../Components/Navigation/Navbar";
import Sidebar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import { Parallax } from "react-parallax";
import { motion, useInView } from "framer-motion";
import { closeSubmenu } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { useRef, useEffect } from "react";

const leftVariants1 = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};
const rightVariants1 = {
  hidden: { x: 1500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2.5 },
  },
};
const leftVariants2 = {
  hidden: { y: -150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 1.5 },
  },
};
const rightVariants2 = {
  hidden: { y: -150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 2 },
  },
};
const leftVariants3 = {
  hidden: { y: -250, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 2.5 },
  },
};
const rightVariants3 = {
  hidden: { y: -250, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 3 },
  },
};
const leftVariants4 = {
  hidden: { y: -350, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 3 },
  },
};
const rightVariants4 = {
  hidden: { y: -350, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 3.5 },
  },
};

const WebAppPage = () => {
  const ref = useRef(null);

  const dispatch = useDispatch();

  const image1 =
    "https://media.istockphoto.com/id/1221468639/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=Y556Rao4a4bnaBx_EX1ZGGseGwLeIzzJJA52qj0I4dc=";
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <SubMenu />

      <Parallax
        className="huge-parallax"
        bgImage={image1}
        strength={450}
        blur={{ min: -1, max: 3 }}
      >
        <div
          className="content"
          onMouseOver={() => {
            dispatch(closeSubmenu());
          }}
        >
          <div className="header">
            <p>Web-????????????????????</p>
          </div>
          <div className="about">
            <p>
              Web-???????????????????? ??? ????????????-?????????????????? ????????????????????, ?? ?????????????? ????????????
              ?????????????????????????????? ?? ??????-???????????????? ?????? ???????????? ????????????????. ????????????
              ??????-???????????????????? ???????????????????????? ?????????? ???????????????? ?? ????????????????, ????????????????
              ???????????? ????????????????????????????, ??????????????????????????????, ???? ??????????????, ??????????
              ?????????????????????? ???????????????????? ???? ????????. ?????????? ???? ?????????????????????? ????????????
              ?????????????? ???????????????? ?????? ????????, ?????? ?????????????? ???? ?????????????? ???? ????????????????????
              ???????????????????????? ?????????????? ????????????????????????, ?????????????? ??????-???????????????????? ????????????????
              ?????????????????????????????????? ????????????????.
            </p>
          </div>
        </div>
      </Parallax>

      <div className="line">
        <motion.div
          className="left"
          variants={leftVariants1}
          initial="hidden"
          animate="visible"
        >
          <span>frontend ????????????????????</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants1}
          initial="hidden"
          animate="visible"
        >
          <p>
            ?????????????????????????????? ?????????? ???????????????????? ?????? ?????????????????????? ??????????????,
            ???????????????????????????????? ?????????????????? ?? ?????????????????? ?? ?????? ????????????????????. ??????????????
            ??????-???????????????????? ?????? ?????????????? ?????????? ???? ?????????? ??????????????, ?? ?????????? ????????????
            ?????? ?????????????????????? ???????????????? ???????????????????? ???????????? ???? ??????????????????.
          </p>
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          className="left"
          variants={leftVariants2}
          initial="hidden"
          animate="visible"
        >
          <span>frontend + backend ????????????????????</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants2}
          initial="hidden"
          animate="visible"
        >
          <p>
            ???????????????????? ?? ??????-?????????????????????? backend ?? frontend - ???????? ????
            ?????????????????????? ?????????????? ?????????????????????? ???????????????????? ????????????????????. ?????? ??????????????,
            ???????????? ?????????????????? ??????????????, ???????????????????????? ????????????????????.
          </p>
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          className="left"
          variants={leftVariants3}
          initial="hidden"
          animate="visible"
        >
          <span>frontend + backend ?? ?????????????????? ?? ???????? ????????????</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants3}
          initial="hidden"
          animate="visible"
        >
          <p>
            ?????????? ?????????????? web-???????????????????? ???????????????????? ???????? ????????????, ??????????????
            ?????????????????? ?????????????? ?? ?????????????????????????? ???????? ???????????? ??????????????????????????,
            ???????????????? ???????????????????????????? ???????????????????? ?? ???????????????????????????? ????????????, ????????????????
            ??????-???????????????????? ?????????? ?????????? ?? ????????????????????.
          </p>
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          className="left"
          variants={leftVariants4}
          initial="hidden"
          animate="visible"
        >
          <span>?????????? ???????????????????? ?? ??????????????????</span>
        </motion.div>
        <motion.div
          ref={ref}
          className="right"
          variants={rightVariants4}
          initial="hidden"
          animate="visible"
        >
          <p>
            {" "}
            ?????????????????????? ????????, ???????????????????? web-???????????????????? ?????????? ???????????????? ????????????,
            ?????? ??????????????. ?????? ???????????????????? ?????????????????? ?????????????????? ?????????????? ?? ??????????
            ?????????????????????? ?????????????? ????????????????????????????. ?????????? ?????????? ???????????? ???? ????????????
            ???????????????????? ????????????, ?????????? ?????????????????????? ?? ??????????????????.
          </p>
        </motion.div>
      </div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="content"></div>
    </Wrapper>
  );
};

export default WebAppPage;
