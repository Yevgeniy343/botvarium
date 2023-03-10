import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 30%;
    height: 30%;
  }
  .tooltip {
    background-color: var(--theme-ui-colors-green05);
    color: var(--theme-ui-colors-green70);
    font-weight: 700;
    transition: var(--transition2);
  }
`;

function Icon() {
  return (
    <Wrapper id="dj" data-tooltip-content="Django">
      <motion.svg
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        xmlns="http://www.w3.org/2000/svg"
        width="256"
        height="326"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 326"
      >
        <g fill="#2BA977">
          <path d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193C33.873 251.316 0 222.245 0 166.412c0-53.795 35.93-88.708 91.608-88.708 8.64 0 15.222.68 23.176 2.717V0zm1.867 124.427c-6.24-2.038-11.382-2.717-17.965-2.717-26.947 0-42.512 16.437-42.512 45.243 0 28.046 14.88 43.532 42.17 43.532 5.896 0 10.696-.332 18.307-1.351v-84.707z"></path>
          <path d="M255.187 84.26v122.263c0 42.105-3.154 62.353-12.411 79.81-8.64 16.783-20.022 27.366-43.541 39.055l-49.438-23.297c23.519-10.93 34.901-20.588 42.17-35.327 7.61-15.072 10.01-32.529 10.01-78.445V84.261h53.21zM196.608 0h53.278v54.135h-53.278V0z"></path>
        </g>
      </motion.svg>
    </Wrapper>
  );
}

export default Icon;
