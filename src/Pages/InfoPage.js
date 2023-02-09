import Navbar from "../Components/Navigation/Navbar";
import Sidebar from "../Components/Navigation/Sidebar";
import SubMenu from "../Components/Navigation/SubMenu";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Svg1 from "../svg/Svg_1";
import Svg2 from "../svg/Svg_2";
import { useState } from "react";
import { animated, useSpring, Controller } from "@react-spring/web";

const pathVariants = {
  hidden: {
    // opacity: 0,
    pathLength: 0,
  },
  visible: {
    // opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const InfoPage = () => {
  const [toggle, setToggle] = useState(false);

  const props = useSpring({
    from: { opacity: 0, y: 200 },
    to: {
      opacity: 1,
      y: 0,
      delay: 2000,
    },
    config: { duration: 5000 },
    onStart: () => console.log("the spring has started"),
  });

  const animations = new Controller({ opacity: toggle ? 1 : 0 });

  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <SubMenu />
      <div className="line">
        <Svg1 />
        <animated.div style={animations.spting}>
          <Svg2 />
        </animated.div>
      </div>
      <div className="animate">
        <button onClick={() => setToggle(!toggle)}>animate</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    padding: 1rem;
    cursor: pointer;
  }
  .animate {
    position: absolute;
    left: 200px;
  }
  .line {
  }
`;

export default InfoPage;
