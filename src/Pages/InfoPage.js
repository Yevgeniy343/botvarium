import Navbar from "../Components/Navigation/Navbar";
import Sidebar from "../Components/Navigation/Sidebar";
import SubMenu from "../Components/Navigation/SubMenu";
import { motion } from "framer-motion";

import Svg1 from "../svg/Svg_1";
import Svg2 from "../svg/Svg_2";
import { useState } from "react";
import SvgMessenger from "../svg/SvgMessenger";
import styled from "styled-components";

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

  return (
    <div>
      <Navbar />
      <Sidebar />
      <SubMenu />
      {/* <div className="line">
        <Svg1 />
        <Svg2 />
      </div>
      <div className="animate">
        <button onClick={() => setToggle(!toggle)}>animate</button>
      </div> */}
      <Wrapper>
        <SvgMessenger />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default InfoPage;
