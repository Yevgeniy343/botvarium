import Navbar from "../../Components/Navigation/Navbar";
import Wrapper from "./wr-Services";
import { Keyframes } from "styled-components";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const ServicesPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "end", margin: "2rem" }}>
        <h3>Services page</h3>
      </div>
      <div className="svg">
        {/* variants={svgVariants} initial="hidden" animate="visible" */}
        <motion.svg>
          <motion.path
            id="lineAB"
            d="M 100 350 l 200 -00"
            stroke="red"
            stroke-width="3"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      </div>
    </Wrapper>
  );
};

export default ServicesPage;
