import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 40%;
    height: 40%;
  }
`;

function Icon() {
  return (
    <Wrapper>
      <motion.svg
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        xmlns="http://www.w3.org/2000/svg"
        width="2183"
        height="2500"
        fill="none"
        viewBox="0 0 124 141.53"
      >
        <path
          fill="#1b73ba"
          d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
        ></path>
        <path
          fill="#1c88c7"
          d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
        ></path>
        <path
          fill="#fff"
          d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
        ></path>
      </motion.svg>
    </Wrapper>
  );
}

export default Icon;
