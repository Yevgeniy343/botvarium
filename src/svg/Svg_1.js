import React from "react";
import { motion, useAnimationControls } from "framer-motion";
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
      duration: 5,
      ease: "easeInOut",
    },
  },
};

function Icon() {
  const controls = useAnimationControls();
  const handler = () => {
    controls.start("visible");
    setTimeout(() => {
      controls.set("hidden");
    }, 6000);
    // controls.start({
    //   // opacity: 1,
    //   pathLength: 1,
    //   transition: {
    //     duration: 10,
    //     ease: "easeInOut",
    //   },
    // });
  };
  return (
    <Wrapper>
      <svg
        // className="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="735"
        height="244"
        fill="none"
        viewBox="0 0 735 244"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          // animate="visible"
          animate={controls}
          stroke="#85B874"
          strokeLinecap="round"
          strokeWidth="3"
          d="M2 31c.957-8.611 14.744-16.368 21.222-19.778C45.306-.4 76.112-.63 99 8.444 128.465 20.127 145.894 46.92 152.333 77c6.876 32.123 3.282 65.863 10.889 97.889 6.088 25.627 21.234 45.478 46.667 53.889 41.61 13.761 89.973 15.53 133.222 10.333 30.524-3.668 60.668-12.265 89.889-21.555 33.314-10.592 66.578-21.629 99.556-33.223 36.463-12.819 72.399-27.484 109.666-37.889C672.395 138.021 701.908 134.919 733 133"
        ></motion.path>
      </svg>
      <button onClick={handler}>123</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .icon {
  }

  svg path {
  }
`;
export default Icon;
