import styled from "styled-components";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 75%;
    height: 75%;
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
    <Wrapper id="angular" data-tooltip-content="Angular">
      <Tooltip anchorId="angular" className="tooltip" />
      <motion.svg
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="139"
        viewBox="0 0 512 139"
      >
        <g fill="none" fillRule="evenodd">
          <g fill="#B52E31">
            <path
              d="M.6 71.8v-63h8.1l38.5 50.7V8.8h7.7v63h-8.1L8.3 20.6v51.2H.6zM117.6 69.3c-5.1 1.9-10.6 2.9-16.4 2.9C78.4 72.2 67 61.3 67 39.4c0-20.7 11-31.1 33-31.1 6.3 0 12.2.9 17.6 2.6v7c-5.4-2.1-11-3.1-16.7-3.1-17.2 0-25.8 8.2-25.8 24.4 0 17.5 8.5 26.2 25.4 26.2 2.7 0 5.7-.4 9-1.1V43.2h8.1v26.1zM130.6 47.5V8.8h8.1v38.7c0 12.1 6 18.2 18.1 18.2 12 0 18.1-6.1 18.1-18.2V8.8h8.1v38.7c0 16.5-8.7 24.8-26.2 24.8s-26.2-8.3-26.2-24.8zM205.6 8.8v56.4h33v6.6h-41.1v-63h8.1zM250.3 71.8h-8.5L273.1.5l31.3 71.3h-9L287.3 52h-20.8l2.2-6.6h15.9l-11.8-28.5-22.5 54.9zM313.1 71.8v-63H340c12 0 18 5 18 15.1 0 8.2-5.9 14.3-17.6 18.2L362 71.8h-10.7l-20-28.3v-5.3c12-1.9 18.1-6.5 18.1-13.9 0-5.8-3.3-8.7-10-8.7h-18v56.2h-8.3z"
              transform="translate(150 31)"
            ></path>
          </g>
          <path
            fill="#E23237"
            d="M0 23L64.5 0l66.2 22.6-10.7 85.3-55.5 30.7-54.6-30.3L0 23z"
          ></path>
          <path
            fill="#B52E31"
            d="M130.7 22.6L64.5 0v138.6l55.5-30.7 10.7-85.3z"
          ></path>
          <path
            fill="#FFF"
            d="M64.6 16.2l-40.2 89.4 15-.3 8.1-20.2H83.4l8.8 20.4 14.3.3-41.9-89.6zm.1 28.7l13.6 28.4H52.8l11.9-28.4z"
          ></path>
        </g>
      </motion.svg>
    </Wrapper>
  );
}

export default Icon;
