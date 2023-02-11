import styled from "styled-components";
import { motion } from "framer-motion";

const variants1 = {
  hidden: { y: 200, opacity: 1 },
  visible: {
    y: 0,
    opacity: 0.5,
    transition: { duration: 3, repeat: Infinity },
  },
};
const variants2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 3, repeat: Infinity },
  },
};

function Icon() {
  return (
    <Wrapper>
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="826.681"
        height="573.951"
        data-name="Layer 1"
        viewBox="0 0 826.681 573.951"
      >
        <circle
          cx="93.108"
          cy="55.964"
          r="4.354"
          fill="#fff"
          data-name="Ellipse 182"
        ></circle>
        <circle
          cx="109.633"
          cy="55.964"
          r="4.354"
          fill="#fff"
          data-name="Ellipse 183"
        ></circle>
        <circle
          cx="126.158"
          cy="55.964"
          r="4.354"
          fill="#fff"
          data-name="Ellipse 184"
        ></circle>
        <path
          fill="#fff"
          d="M82.529 66.193H635.428V69.26599999999999H82.529z"
          data-name="Rectangle 266"
        ></path>
        <path
          fill="#e6e6e6"
          d="M0.271 0.36H635.9019999999999V407.446H0.271z"
          data-name="Rectangle 246"
        ></path>
        <path
          fill="#b45af2"
          d="M0 0H635.631V27.004H0z"
          data-name="Rectangle 264"
        ></path>
        <motion.path
          variants={variants1}
          initial="hidden"
          animate="visible"
          fill="#fff"
          d="M18.972 48.785H618.252V203.97H18.972z"
          data-name="Rectangle 247"
        ></motion.path>
        <path
          fill="#fff"
          d="M19.351 229.471H618.631V384.656H19.351z"
          data-name="Rectangle 259"
        ></path>
        <g fill="#e6e6e6" data-name="Group 31">
          <path
            d="M221.34 83.115H545.671V97.57H221.34z"
            data-name="Rectangle 250"
          ></path>
          <path
            d="M221.34 119.252H336.979V133.707H221.34z"
            data-name="Rectangle 251"
          ></path>
          <path
            d="M221.34 155.389H451.71500000000003V169.84400000000002H221.34z"
            data-name="Rectangle 252"
          ></path>
        </g>
        <motion.path
          variants={variants2}
          initial="hidden"
          animate="visible"
          fill="#00aa57"
          d="M383.606 469.293a53.91 53.91 0 01-8.813 29.627 52.688 52.688 0 01-3.965 5.325 54.427 54.427 0 01-11.617 10.322q-1.773 1.175-3.645 2.2a53.739 53.739 0 01-21.057 6.485 52.65 52.65 0 01-5.11.242 53.985 53.985 0 01-13.989-1.829 51.938 51.938 0 01-7.567-2.627q-1.879-.812-3.673-1.765a53.393 53.393 0 01-8.165-5.289q-1.783-1.388-3.438-2.926a54.2 54.2 0 1191.04-39.764z"
          data-name="Path 952"
          transform="translate(-186.66 -163.024)"
        ></motion.path>
        <g fill="#fff" data-name="Group 32">
          <path
            d="M139.42 280.966H146.065V331.558H139.42z"
            data-name="Rectangle 273"
          ></path>
          <path
            d="M117.446 302.94H168.038V309.585H117.446z"
            data-name="Rectangle 274"
          ></path>
        </g>
        <g fill="#e6e6e6" data-name="Group 33">
          <path
            d="M213.209 263.801H537.54V278.256H213.209z"
            data-name="Rectangle 250-2"
          ></path>
          <path
            d="M213.209 299.938H328.848V314.393H213.209z"
            data-name="Rectangle 251-2"
          ></path>
          <path
            d="M213.209 336.075H443.584V350.53H213.209z"
            data-name="Rectangle 252-2"
          ></path>
        </g>
        <circle
          cx="42.039"
          cy="13.433"
          r="4.467"
          fill="#fff"
          data-name="Ellipse 194"
        ></circle>
        <circle
          cx="58.995"
          cy="13.433"
          r="4.467"
          fill="#fff"
          data-name="Ellipse 195"
        ></circle>
        <circle
          cx="25.039"
          cy="13.433"
          r="4.467"
          fill="#fff"
          data-name="Ellipse 246"
        ></circle>
        <motion.path
          variants={variants1}
          initial="hidden"
          animate="visible"
          fill="#3f3d56"
          d="M175.238 169.971a92.633 92.633 0 00-14.78-6.22l-.65-7.19-26.36-2.84-3.35 9.19-9.46 3.55a4.605 4.605 0 00-.96.5h-.01a4.687 4.687 0 00-2 3.12 4.792 4.792 0 00.07 1.88l.5 2.05c.72.43 1.46.84 2.2 1.23l.47.24c1.08.56 2.18 1.09 3.31 1.58.23.1.48.2.71.3.02.01.03.01.05.02.53.22 1.06.43 1.6.63a52.557 52.557 0 005.42 1.74 55.736 55.736 0 0014.37 1.88c1.77 0 3.52-.08 5.25-.25a55.514 55.514 0 0011.64-2.35c.01 0 .02-.01.03-.01a54.634 54.634 0 006.99-2.77c.01-.01.03-.01.04-.02.51-.24 1-.5 1.5-.75l.24-.12c.4-.21.8-.42 1.2-.64 1-.55 1.98-1.13 2.95-1.75.27-.16.53-.33.8-.51.38-.25.76-.51 1.13-.78-.93-.6-1.9-1.17-2.9-1.71z"
        ></motion.path>
        <motion.path
          variants={variants1}
          initial="hidden"
          animate="visible"
          fill="#3f3d56"
          d="M125.768 174.401l-1.65-7.45h-4.31a1.031 1.031 0 00-.13.01h-.01a9.34 9.34 0 00-4.34 1.5 9.612 9.612 0 00-2.32 2.08c1.28.97 2.61 1.87 3.98 2.73l.06.03c.39.24.79.48 1.19.71.72.43 1.46.84 2.2 1.23l.47.24c1.08.56 2.18 1.09 3.31 1.58.23.1.48.2.71.3.02.01.03.01.05.02.53.22 1.06.43 1.6.63z"
        ></motion.path>
        <motion.circle
          variants={variants1}
          initial="hidden"
          animate="visible"
          cx="145.594"
          cy="130.191"
          r="18.985"
          fill="#ffb8b8"
        ></motion.circle>
        <motion.path
          variants={variants1}
          initial="hidden"
          animate="visible"
          fill="#2f2e41"
          d="M132.848 120.944c1.965 2.326 5.29 2.982 8.359 3.251a78.73 78.73 0 0021.38-1.746c.434 4.212-.75 8.754 1.73 12.219a56.723 56.723 0 002.016-12.86 12.308 12.308 0 00-.713-5.507 5.065 5.065 0 00-4.315-3.18 10.815 10.815 0 014.824-2.063l-6.028-3.03 1.548-1.589-10.913-.668 3.16-2.008a68.541 68.541 0 00-14.359-.453c-2.224.164-4.549.477-6.35 1.765s-2.844 3.85-1.725 5.742a8.336 8.336 0 00-6.353 5.04 13.458 13.458 0 00-.483 6.47 45.854 45.854 0 002.405 10.17z"
        ></motion.path>
        <motion.path
          variants={variants1}
          initial="hidden"
          animate="visible"
          fill="#3f3d56"
          d="M198.978 109.611a55.71 55.71 0 10-96.27 52.92c.5.63 1.02 1.26 1.55 1.87.04.04.07.08.11.12a54.035 54.035 0 004.15 4.28c.38.35.78.71 1.18 1.05.76.68 1.54 1.33 2.35 1.95.32.25.63.5.96.74 1.28.97 2.61 1.87 3.98 2.73l.06.03c.39.24.79.48 1.19.71.72.43 1.46.84 2.2 1.23l.47.24c1.08.56 2.18 1.09 3.31 1.58.23.1.48.2.71.3.02.01.03.01.05.02.53.22 1.06.43 1.6.63a52.557 52.557 0 005.42 1.74 55.736 55.736 0 0014.37 1.88c1.77 0 3.52-.08 5.25-.25a55.514 55.514 0 0011.64-2.35c.01 0 .02-.01.03-.01a54.634 54.634 0 006.99-2.77c.01-.01.03-.01.04-.02.51-.24 1-.5 1.5-.75l.24-.12c.4-.21.8-.42 1.2-.64 1-.55 1.98-1.13 2.95-1.75.27-.16.53-.33.8-.51.38-.25.76-.51 1.13-.78.49-.34.98-.69 1.46-1.05.15-.11.31-.22.46-.34a55.69 55.69 0 0018.92-62.68zm-20.76 60.25c-.33.26-.67.51-1.01.74-.33.25-.66.49-1 .71-.29.21-.58.41-.88.6l-.09.06c-.22.15-.44.29-.66.43q-1.245.78-2.52 1.5l-.27.15c-.38.21-.76.41-1.14.61-.05.03-.11.05-.16.08l-.06.03c-.48.25-.97.49-1.46.72a49.05 49.05 0 01-5.83 2.36c-.26.09-.52.18-.78.26a52.454 52.454 0 01-11.02 2.24c-1.64.15-3.3.23-4.97.23a51.95 51.95 0 01-13.59-1.78 49.382 49.382 0 01-6.67-2.26c-.11-.05-.23-.09-.34-.14-.12-.05-.23-.09-.34-.14-.12-.05-.23-.1-.35-.16-.94-.41-1.87-.86-2.78-1.33l-.44-.23c-1.11-.58-2.2-1.2-3.26-1.86-.31-.19-.63-.39-.93-.6-.08-.05-.15-.1-.23-.15-.71-.47-1.42-.96-2.11-1.47-.47-.35-.94-.7-1.4-1.06-.77-.58-1.51-1.2-2.23-1.84-.38-.32-.75-.67-1.11-1a50.81 50.81 0 01-4.02-4.16c-.42-.48-.83-.96-1.22-1.46a3.807 3.807 0 01-.25-.31 52.66 52.66 0 1173.12 9.23z"
        ></motion.path>
        <path
          fill="#fff"
          d="M673.068 376.971a55.71 55.71 0 10-96.27 52.92c.5.63 1.02 1.26 1.55 1.87.04.04.07.08.11.12a54.137 54.137 0 004.15 4.28 40 40 0 001.18 1.05c.76.68 1.54 1.33 2.35 1.95a54.775 54.775 0 004.94 3.47l.06.03c1.11.69 2.24 1.33 3.39 1.94l.47.24c1.08.56 2.18 1.09 3.31 1.58.23.1.48.2.71.3.02.01.03.01.05.02a54.116 54.116 0 007.02 2.37 55.732 55.732 0 0014.37 1.88c1.77 0 3.52-.08 5.25-.25a55.508 55.508 0 0011.64-2.35c.01 0 .02-.01.03-.01a54.606 54.606 0 006.99-2.77c.01-.01.03-.01.04-.02.51-.24 1-.5 1.5-.75l.24-.12c.4-.21.8-.42 1.2-.64 1-.55 1.98-1.13 2.95-1.75.27-.16.53-.33.8-.51.88-.58 1.75-1.2 2.59-1.83.15-.11.31-.22.46-.34a55.692 55.692 0 0018.92-62.68z"
        ></path>
        <circle
          cx="638.842"
          cy="409.897"
          r="8.349"
          fill="#2f2e41"
          data-name="Ellipse 188"
        ></circle>
        <path
          fill="#2f2e41"
          d="M827.827 564.802a8.35 8.35 0 017.35 12.312 8.347 8.347 0 10-13.868-9.172 8.33 8.33 0 016.52-3.14z"
          data-name="Path 969"
          transform="translate(-186.66 -163.024)"
        ></path>
        <circle
          cx="623.24"
          cy="385.353"
          r="24.526"
          fill="#2f2e41"
          data-name="Ellipse 189"
        ></circle>
        <path
          fill="#2f2e41"
          d="M790.65 533.16a24.522 24.522 0 0133.99-2.572c-.2-.191-.4-.383-.607-.568a24.526 24.526 0 00-32.73 36.535l.14.125c.208.185.422.36.635.537a24.522 24.522 0 01-1.427-34.057z"
          data-name="Path 970"
          transform="translate(-186.66 -163.024)"
        ></path>
        <circle
          cx="623.032"
          cy="393.875"
          r="15.796"
          fill="#a0616a"
          data-name="Ellipse 190"
        ></circle>
        <path
          fill="#00aa57"
          d="M651.298 435.031v5.3c-.97.62-1.95 1.2-2.95 1.75-.4.22-.8.43-1.2.64l-.24.12c-.5.25-.99.51-1.5.75-.01.01-.03.01-.04.02a54.606 54.606 0 01-6.99 2.77c-.01 0-.02.01-.03.01a55.508 55.508 0 01-11.64 2.35c-1.73.17-3.48.25-5.25.25a55.732 55.732 0 01-14.37-1.88 54.116 54.116 0 01-7.02-2.37c-.02-.01-.03-.01-.05-.02-.23-.1-.48-.2-.71-.3-1.13-.49-2.23-1.02-3.31-1.58l-.47-.24c-1.15-.61-2.28-1.25-3.39-1.94l-.06-.03a54.775 54.775 0 01-4.94-3.47 39.88 39.88 0 01-2.35-1.95 40 40 0 01-1.18-1.05 54.137 54.137 0 01-4.15-4.28 20.23 20.23 0 01.76-3.07l.01-.01a4.489 4.489 0 01.21-.5 3.988 3.988 0 01.19-.42c1.79-3.35 5.03-4.18 9.05-4.36 2.27-.1 4.78.01 7.43-.02 1.4-.01 2.85-.06 4.3-.19 9.15-.83 7.49-6.23 7.9-9.14.41-2.82 2.95-.38 3.12-.22l.01.01a32.271 32.271 0 0016.6 2.91 32.3 32.3 0 012.94-.22c2.58-.03 2.02.71 1.13 1.32a11.183 11.183 0 01-1.35.76s-.41 2.5-.83 6.24c-.4 3.58 6.46 5.26 7.03 5.39a.06.06 0 00.04.01 13.773 13.773 0 017.61.2h.01a9.018 9.018 0 015.68 6.46z"
        ></path>
        <path
          fill="#2f2e41"
          d="M600.168 441.461c0 .74-.02 1.45-.05 2.12-.01.4-.03.79-.05 1.16-.02-.01-.03-.01-.05-.02-.23-.1-.48-.2-.71-.3-1.13-.49-2.23-1.02-3.31-1.58l-.47-.24c-1.15-.61-2.28-1.25-3.39-1.94.03-.35.08-.7.13-1.05.11-.77.2-1.55.26-2.32a32.184 32.184 0 00-2.85-15.76v-.01c-.2-.4-.32-.62-.32-.62s2.91-2.5 7.06 0a2.498 2.498 0 01.69.6c2.5 2.95 3.18 12.87 3.06 19.96zM645.578 440.101c-.04 1.12-.1 2.29-.17 3.48v.01c-.01.01-.03.01-.04.02a54.606 54.606 0 01-6.99 2.77c-.01 0-.02.01-.03.01l-.11-2.81-.01-.37-.53-13.68a2.295 2.295 0 012.29-2.4h5.07c.25 0 .43.51.55 1.43v.01a86.661 86.661 0 01-.03 11.53z"
        ></path>
        <path
          fill="#2f2e41"
          d="M796.181 537.154v15.8h3.658l4.655-4.988-.623 4.988h16.17l-1-4.988 2 4.988h2.578v-15.8z"
          data-name="Path 975"
          transform="translate(-186.66 -163.024)"
        ></path>
        <ellipse
          cx="607.028"
          cy="390.55"
          fill="#a0616a"
          data-name="Ellipse 191"
          rx="1.247"
          ry="2.286"
        ></ellipse>
        <ellipse
          cx="639.037"
          cy="390.55"
          fill="#a0616a"
          data-name="Ellipse 192"
          rx="1.247"
          ry="2.286"
        ></ellipse>
        <path
          fill="#00aa57"
          d="M654.688 437.991c-.84.63-1.71 1.25-2.59 1.83-.27.18-.53.35-.8.51-.97.62-1.95 1.2-2.95 1.75-.4.22-.8.43-1.2.64v-11.02s1.6 1.28 4.15 3.41c.32.27.65.55 1 .85.74.62 1.54 1.3 2.39 2.03z"
        ></path>
        <path
          fill="#3f3d56"
          d="M673.068 376.971a55.71 55.71 0 10-96.27 52.92c.5.63 1.02 1.26 1.55 1.87.04.04.07.08.11.12a54.137 54.137 0 004.15 4.28 40 40 0 001.18 1.05c.76.68 1.54 1.33 2.35 1.95a54.775 54.775 0 004.94 3.47l.06.03c1.11.69 2.24 1.33 3.39 1.94l.47.24c1.08.56 2.18 1.09 3.31 1.58.23.1.48.2.71.3.02.01.03.01.05.02a54.116 54.116 0 007.02 2.37 55.732 55.732 0 0014.37 1.88c1.77 0 3.52-.08 5.25-.25a55.508 55.508 0 0011.64-2.35c.01 0 .02-.01.03-.01a54.606 54.606 0 006.99-2.77c.01-.01.03-.01.04-.02.51-.24 1-.5 1.5-.75l.24-.12c.4-.21.8-.42 1.2-.64 1-.55 1.98-1.13 2.95-1.75.27-.16.53-.33.8-.51.88-.58 1.75-1.2 2.59-1.83.15-.11.31-.22.46-.34a55.692 55.692 0 0018.92-62.68zm-20.76 60.25c-.33.26-.67.51-1.01.74-.33.25-.66.49-1 .71-.29.21-.58.41-.88.6-.25.17-.5.33-.75.49q-1.245.78-2.52 1.5l-.27.15c-.38.21-.76.41-1.14.61-.05.03-.11.05-.16.08l-.06.03c-.48.25-.97.49-1.46.72a49.028 49.028 0 01-5.83 2.36c-.26.09-.52.18-.78.26a52.456 52.456 0 01-11.02 2.24c-1.64.15-3.3.23-4.97.23a51.952 51.952 0 01-13.59-1.78 49.391 49.391 0 01-6.67-2.26c-.23-.09-.46-.19-.68-.28-.12-.05-.23-.1-.35-.16-.94-.41-1.87-.86-2.78-1.33l-.44-.23c-1.11-.58-2.2-1.2-3.26-1.86-.39-.24-.78-.49-1.16-.75a53.71 53.71 0 01-3.51-2.53c-.77-.58-1.51-1.2-2.23-1.84-.38-.32-.75-.67-1.11-1a50.883 50.883 0 01-4.02-4.16c-.42-.48-.83-.96-1.22-1.46a3.8 3.8 0 01-.25-.31 52.66 52.66 0 1173.12 9.23z"
        ></path>
        <path
          fill="#ffb8b8"
          d="M669.931 372.603a10.056 10.056 0 005.277-14.488l23.36-27.043-18.415-2.397-19.36 26.048a10.11 10.11 0 009.138 17.88zM801.595 378.318a10.056 10.056 0 00-2.362-15.238l7.425-34.955-17.288 6.78-4.4 32.154a10.11 10.11 0 0016.625 11.259z"
        ></path>
        <path
          fill="#ffb8b8"
          d="M717.931 560.49L705.671 560.489 699.839 513.201 717.933 513.202 717.931 560.49z"
        ></path>
        <path
          fill="#2f2e41"
          d="M721.058 572.374l-39.53-.001v-.5a15.386 15.386 0 0115.386-15.387l24.144.001z"
        ></path>
        <path
          fill="#ffb8b8"
          d="M777.931 560.49L765.671 560.489 759.839 513.201 777.933 513.202 777.931 560.49z"
        ></path>
        <path
          fill="#2f2e41"
          d="M781.058 572.374l-39.53-.001v-.5a15.386 15.386 0 0115.386-15.387l24.144.001zM719.208 535.798l-17.354-.695a4.514 4.514 0 01-4.318-4.633l4.89-160.38.319-.115c30.416-11.003 55.578-10.17 76.926 2.54l.238.143 2.93 156.202a4.5 4.5 0 01-4.5 4.585h-14.634a4.51 4.51 0 01-4.416-3.632l-19.935-101.409a1.5 1.5 0 00-2.96.11l-12.539 103.33a4.526 4.526 0 01-4.469 3.957l-.178-.003z"
        ></path>
        <circle cx="736.092" cy="204.882" r="24.561" fill="#ffb8b8"></circle>
        <path
          fill="#3f3d56"
          d="M678.232 353.081a4.506 4.506 0 01-2.091-1.685l-4.746-7.102a4.515 4.515 0 01.12-5.17l19.131-25.967 11.986-57.511a14.497 14.497 0 1127.017 10.52l-5.665 36.601a46.374 46.374 0 01-16.024 28.441l-25.185 21.135a4.505 4.505 0 01-3.528 1.007 4.455 4.455 0 01-1.015-.269zM800.547 355.687a4.506 4.506 0 01-2.683.116l-8.255-2.195a4.515 4.515 0 01-3.326-3.959l-2.797-32.133-29.001-51.089a14.497 14.497 0 1127.23-9.954l19.931 31.217a46.373 46.373 0 016.764 31.936l-4.94 32.504a4.505 4.505 0 01-1.983 3.088 4.455 4.455 0 01-.94.47z"
        ></path>
        <path
          fill="#3f3d56"
          d="M709.227 248.5a41.822 41.822 0 0133.537-13.56q.616.038 1.227.086a41.734 41.734 0 0130.16 16.646 42.362 42.362 0 017.525 34.145 132.361 132.361 0 003.497 67.876l6.589 20.459a4.499 4.499 0 01-4.042 5.872l-33.685 1.81-8.62-14.889v15.353l-40.941 2.201a4.068 4.068 0 01-.243.007 4.5 4.5 0 01-4.484-4.861l4.627-57.382-5.804-38.973a42.09 42.09 0 0110.657-34.79z"
        ></path>
        <path
          fill="#2f2e41"
          d="M753.162 228.33c-2.274 1.308-11.263 2.175-11.903-.37l-.014-.055c-.445-1.864-.075-3.81.053-5.723s-.06-4.013-1.362-5.42c-2.428-2.62-6.748-1.231-10.259-1.894a8.664 8.664 0 01-6.74-9.253c.05-.397.129-.795.217-1.193a6.673 6.673 0 00-6.927-8.081c-3.548.203-7.378 1.278-10.314-1.35-2.27-2.033-2.824-7.323-1.826-10.202 1.676-4.838 12.414-7.37 17.102-8.763a40.62 40.62 0 0134.43 5.65c2.961 2.086 5.727 4.709 6.989 8.105s.653 7.68-2.193 9.922a18.332 18.332 0 014.246 17.806c-1.405 4.53-8.114 8.872-11.5 10.82z"
        ></path>
        <path
          fill="#ccc"
          d="M825.681 573.951h-213a1 1 0 010-2h213a1 1 0 010 2z"
        ></path>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .icon {
    position: absolute;
    left: 450px;
    top: 200px;
    width: 450px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .icon {
      position: absolute;
      left: 450px;
      top: 250px;
      width: 500px;
    }
  }
  @media (min-width: 1140px) {
    .icon {
      position: absolute;
      left: 430px;
      top: 250px;
      width: 450px;
    }
  }
  @media (min-width: 1320px) {
    .icon {
      position: absolute;
      left: 500px;
      top: 280px;
      width: 550px;
    }
  }
`;

export default Icon;