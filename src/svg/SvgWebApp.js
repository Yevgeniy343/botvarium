import styled from "styled-components";
import { motion } from "framer-motion";

const variants1 = {
  hidden: { y: 0, opacity: 1 },
  visible: {
    y: -300,
    opacity: 0,
    transition: { duration: 3, repeat: Infinity },
  },
};
const variants2 = {
  hidden: { y: 0, opacity: 1 },
  visible: {
    y: -300,
    opacity: 0,
    transition: { duration: 3.7, delay: 0.7, repeat: Infinity },
  },
};

function Icon() {
  return (
    <Wrapper>
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="860.131"
        height="551.741"
        data-name="Layer 1"
        viewBox="0 0 860.131 551.741"
      >
        <path
          fill="#e6e6e6"
          d="M804 487.5H586.652a29.859 29.859 0 01-29.826-29.825V114.832a29.86 29.86 0 0129.826-29.826H804a29.86 29.86 0 0129.826 29.826v342.843A29.859 29.859 0 01804 487.5z"
        ></path>
        <path
          fill="#fff"
          d="M807.605 102.803H586.242a9.348 9.348 0 00-9.337 9.337v347.313a9.351 9.351 0 009.337 9.337h221.363a9.348 9.348 0 009.337-9.337V112.14a9.348 9.348 0 00-9.337-9.337z"
        ></path>
        <path
          fill="#e6e6e6"
          d="M591.965 85.006a2.284 2.284 0 012.281-2.282h15.516a2.282 2.282 0 110 4.563h-15.516a2.284 2.284 0 01-2.281-2.281zM617.52 85.006a2.284 2.284 0 012.282-2.282h15.515a2.282 2.282 0 110 4.563h-15.515a2.284 2.284 0 01-2.282-2.281zM770.851 85.006a2.284 2.284 0 012.282-2.282h15.515a2.282 2.282 0 010 4.563h-15.515a2.284 2.284 0 01-2.282-2.281z"
        ></path>
        <path
          fill="#f2f2f2"
          d="M727.599 461.634c0 2.4-.046 4.792-.155 7.156H586.242a9.351 9.351 0 01-9.337-9.337V284.637A179.29 179.29 0 01727.6 461.634z"
        ></path>
        <rect
          width="61.339"
          height="14.092"
          x="665.804"
          y="192.056"
          fill="#00aa57"
          rx="4.339"
        ></rect>
        <rect
          width="128.277"
          height="14.092"
          x="632.335"
          y="220.241"
          fill="#e6e6e6"
          rx="4.339"
        ></rect>
        <rect
          width="128.277"
          height="14.092"
          x="632.335"
          y="248.426"
          fill="#e6e6e6"
          rx="4.339"
        ></rect>
        <path
          fill="#ccc"
          d="M735.793 445.054a3.348 3.348 0 01-2.426-5.803l.23-.912-.092-.219a8.99 8.99 0 00-16.584.062c-2.712 6.532-6.166 13.076-7.016 19.984a26.597 26.597 0 00.467 9.147 106.635 106.635 0 01-9.7-44.289 102.923 102.923 0 01.638-11.482q.53-4.688 1.468-9.31a107.87 107.87 0 0121.391-45.717 28.707 28.707 0 0011.94-12.388 21.898 21.898 0 001.991-5.984 27.23 27.23 0 01-1.753.162l-.553.03-.068.002a3.317 3.317 0 01-2.724-5.404l.753-.926c.381-.476.772-.943 1.153-1.42a1.651 1.651 0 00.124-.143c.438-.543.877-1.076 1.315-1.62a9.592 9.592 0 00-3.144-3.04c-4.393-2.572-10.453-.79-13.626 3.183-3.183 3.974-3.783 9.548-2.678 14.512a38.439 38.439 0 005.317 11.854c-.238.305-.486.6-.724.905a108.567 108.567 0 00-11.332 17.952 45.132 45.132 0 00-2.694-20.963c-2.58-6.221-7.413-11.461-11.67-16.84-5.114-6.46-15.599-3.641-16.5 4.549l-.025.238q.948.535 1.857 1.135a4.541 4.541 0 01-1.831 8.264l-.093.015a45.184 45.184 0 001.191 6.756 46.523 46.523 0 0023.164 29.157c.372.19.734.381 1.105.562a110.815 110.815 0 00-5.964 28.071 105.104 105.104 0 00.076 16.97l-.029-.2a27.773 27.773 0 00-9.48-16.036c-7.297-5.993-17.605-8.2-25.476-13.018a5.212 5.212 0 00-7.983 5.07l.032.211a30.508 30.508 0 013.42 1.648q.95.536 1.857 1.136a4.541 4.541 0 01-1.83 8.264l-.093.015-.19.028a45.224 45.224 0 008.318 13.026 46.564 46.564 0 0033.77 14.817h.009a110.783 110.783 0 007.442 21.725h26.584c.096-.295.181-.6.267-.896a30.205 30.205 0 01-7.356-.438c1.972-2.42 3.945-4.86 5.917-7.28a1.652 1.652 0 00.124-.143c1-1.238 2.01-2.468 3.011-3.706v-.002a44.244 44.244 0 00-1.296-11.27zm-30.443-59.887l.014-.019-.014.038zm-5.888 53.084l-.229-.515c.01-.371.01-.743 0-1.124 0-.105-.019-.21-.019-.315.086.658.162 1.315.257 1.973z"
        ></path>
        <path
          fill="#cacaca"
          d="M796.54 133.466H597.307a1.65 1.65 0 010-3.298H796.54a1.65 1.65 0 010 3.298z"
        ></path>
        <ellipse
          cx="607.937"
          cy="120.446"
          fill="#3f3d56"
          rx="4.846"
          ry="4.954"
        ></ellipse>
        <ellipse
          cx="624.678"
          cy="120.446"
          fill="#3f3d56"
          rx="4.846"
          ry="4.954"
        ></ellipse>
        <ellipse
          cx="641.42"
          cy="120.446"
          fill="#3f3d56"
          rx="4.846"
          ry="4.954"
        ></ellipse>
        <path
          fill="#3f3d56"
          d="M788.752 117.406h-10.845a.821.821 0 000 1.642h10.845a.821.821 0 000-1.642zM788.752 120.489h-10.845a.821.821 0 000 1.642h10.845a.821.821 0 000-1.642zM788.752 123.567h-10.845a.821.821 0 000 1.642h10.845a.821.821 0 000-1.642z"
        ></path>
        <path
          fill="#e6e6e6"
          d="M465.498 284.768h-115.51a6.163 6.163 0 00-6.153 6.17v182.471h127.833V290.937a6.166 6.166 0 00-6.17-6.17zm-57.366 103.678a13.704 13.704 0 01-13.64-13.64V353.76a13.64 13.64 0 0127.28 0v21.046a13.704 13.704 0 01-13.64 13.64z"
        ></path>
        <path
          fill="#ccc"
          d="M343.438 467.573v17.605a3.449 3.449 0 003.442 3.441h121.743a3.459 3.459 0 003.442-3.441v-17.605z"
        ></path>
        <path
          fill="#e6e6e6"
          d="M656.773 0h-493.76a16.029 16.029 0 00-16.004 16.003v333.191a16.018 16.018 0 0016.003 16.003h493.76a16.018 16.018 0 0016.004-16.003V16.003A16.029 16.029 0 00656.773 0z"
        ></path>
        <path
          fill="#fff"
          d="M652.651 11.559H167.138a8.577 8.577 0 00-8.559 8.576v324.933a8.573 8.573 0 008.559 8.558H652.65a8.573 8.573 0 008.558-8.558V20.135a8.577 8.577 0 00-8.558-8.576z"
        ></path>
        <path
          fill="#00aa57"
          d="M661.21 20.135v324.933a8.573 8.573 0 01-8.559 8.558H481.448a210.092 210.092 0 01-45.834-61.67q-1.121-2.242-2.135-4.537a208.227 208.227 0 01-18.505-71.225 127.478 127.478 0 01-.302-4.555 201.49 201.49 0 01-.338-11.868 209.128 209.128 0 0114.75-77.416 143.41 143.41 0 011.85-4.555A210.666 210.666 0 01531.197 11.559h121.454a8.577 8.577 0 018.558 8.576z"
        ></path>
        <path
          fill="#cacaca"
          d="M628.245 56.327H173.952a1.807 1.807 0 010-3.613h454.293a1.807 1.807 0 010 3.613z"
        ></path>
        <ellipse
          cx="204.876"
          cy="32.666"
          fill="#3f3d56"
          rx="10.588"
          ry="10.823"
        ></ellipse>
        <ellipse
          cx="241.452"
          cy="32.666"
          fill="#3f3d56"
          rx="10.588"
          ry="10.823"
        ></ellipse>
        <ellipse
          cx="278.027"
          cy="32.666"
          fill="#3f3d56"
          rx="10.588"
          ry="10.823"
        ></ellipse>
        <path
          fill="#3f3d56"
          d="M606.224 24.526h-25.981a1.968 1.968 0 000 3.934h25.98a1.968 1.968 0 000-3.934zM606.224 31.91h-25.981a1.968 1.968 0 000 3.935h25.98a1.968 1.968 0 000-3.935zM606.224 39.285h-25.981a1.968 1.968 0 000 3.934h25.98a1.968 1.968 0 000-3.934z"
        ></path>
        <rect
          width="72.207"
          height="15.441"
          x="245.183"
          y="161.871"
          fill="#00aa57"
          rx="4.339"
        ></rect>
        <rect
          width="145.55"
          height="15.441"
          x="208.512"
          y="192.752"
          fill="#e6e6e6"
          rx="4.339"
        ></rect>
        <rect
          width="145.55"
          height="15.441"
          x="208.512"
          y="223.633"
          fill="#e6e6e6"
          rx="4.339"
        ></rect>
        <path
          fill="#00aa57"
          d="M220.392 334.997a53.05 53.05 0 01-3.345 18.63h-49.91a8.573 8.573 0 01-8.558-8.56v-62.772a52.716 52.716 0 018.434-.676 53.375 53.375 0 0153.379 53.378z"
        ></path>
        <path
          d="M661.654 122.355V117.8h-76.349V65.008h-4.537V117.8h-87.505V65.008h-4.537V117.8h-57.792a143.333 143.333 0 00-1.85 4.555h59.642v89.284h-74.054c.07 1.53.178 3.043.302 4.555h73.752v71.225h-55.247q1.014 2.295 2.135 4.537h53.112v59.873h4.537v-59.873h87.505v59.873h4.537v-59.873h76.35v-4.537h-76.35a71.225 71.225 0 0171.225-71.225h5.124v-4.555h-76.349v-89.284zm-80.886 165.064h-87.505v-71.225h87.505zm0-75.78h-87.505v-1.78a87.505 87.505 0 0187.505-87.504z"
          opacity="0.2"
        ></path>
        <path
          fill="#2f2e41"
          d="M600.182 319.916a4.755 4.755 0 01-3.446-8.242l.325-1.295-.129-.31c-4.377-10.439-19.213-10.367-23.553.087-3.852 9.278-8.757 18.572-9.964 28.381a37.774 37.774 0 00.663 12.992 151.444 151.444 0 01-13.777-62.9 146.174 146.174 0 01.907-16.307q.751-6.658 2.084-13.222a153.2 153.2 0 0130.38-64.93 40.77 40.77 0 0016.957-17.592 31.1 31.1 0 002.829-8.498c-.826.108-1.665.176-2.49.23l-.785.04-.097.005a4.71 4.71 0 01-3.87-7.675l1.07-1.315c.542-.677 1.097-1.34 1.638-2.017a2.346 2.346 0 00.176-.203c.623-.771 1.245-1.529 1.868-2.3a13.622 13.622 0 00-4.466-4.317c-6.239-3.654-14.846-1.123-19.352 4.52-4.52 5.643-5.372 13.56-3.803 20.61 1.34 6.036 4.263 11.57 7.552 16.835-.339.433-.69.852-1.029 1.285a154.188 154.188 0 00-16.093 25.496 64.098 64.098 0 00-3.827-29.772c-3.663-8.836-10.528-16.278-16.574-23.917-7.262-9.175-22.153-5.17-23.433 6.46l-.036.338q1.347.76 2.637 1.613a6.45 6.45 0 01-2.6 11.737l-.132.02a64.174 64.174 0 001.692 9.595 66.072 66.072 0 0032.898 41.41c.527.27 1.042.541 1.57.799a157.38 157.38 0 00-8.472 39.867 149.27 149.27 0 00.108 24.101l-.04-.284a39.444 39.444 0 00-13.465-22.775c-10.362-8.512-25.002-11.647-36.18-18.489-5.382-3.293-12.278.963-11.339 7.202l.046.298a43.328 43.328 0 014.858 2.341q1.347.76 2.637 1.613a6.45 6.45 0 01-2.6 11.737l-.131.02c-.095.014-.176.028-.271.041a64.227 64.227 0 0011.814 18.5 66.131 66.131 0 0047.96 21.043h.013a157.336 157.336 0 0010.57 30.854h37.755c.136-.42.258-.852.38-1.272a42.897 42.897 0 01-10.448-.622c2.801-3.438 5.603-6.902 8.404-10.34a2.344 2.344 0 00.176-.202c1.42-1.76 2.855-3.505 4.276-5.264v-.003a62.836 62.836 0 00-1.84-16.007zm-43.236-85.052l.02-.027-.02.054zm-8.363 75.39l-.325-.73c.014-.528.014-1.056 0-1.597 0-.15-.027-.298-.027-.447.122.934.23 1.867.365 2.801z"
        ></path>
        <path
          fill="#e6e6e6"
          d="M263.977 231.612v-50.744a29.369 29.369 0 00-29.37-29.368H127.102a29.369 29.369 0 00-29.369 29.368V459.25a29.369 29.369 0 0029.369 29.37h107.507a29.369 29.369 0 0029.369-29.37V267.733a1.852 1.852 0 001.852-1.853v-32.415a1.852 1.852 0 00-1.852-1.852z"
        ></path>
        <path
          fill="#fff"
          d="M257.726 181.07v277.98a21.919 21.919 0 01-21.69 21.92 1.926 1.926 0 01-.24.01h-108.03a21.932 21.932 0 01-21.93-21.93V181.07a21.932 21.932 0 0121.93-21.93h13.11a10.427 10.427 0 009.65 14.36h61.59a10.435 10.435 0 009.64-14.36h14.04a21.932 21.932 0 0121.93 21.93z"
        ></path>
        <path
          fill="#f2f2f2"
          d="M236.306 472.4q0 4.32-.27 8.57a1.926 1.926 0 01-.24.01h-108.03a21.932 21.932 0 01-21.93-21.93V335.17a137.388 137.388 0 01130.47 137.23z"
        ></path>
        <path
          fill="#e6e6e6"
          d="M98.326 260a2.503 2.503 0 01-2.5-2.5v-17a2.5 2.5 0 015 0v17a2.503 2.503 0 01-2.5 2.5z"
        ></path>
        <rect
          width="35.207"
          height="15.441"
          x="164.178"
          y="246.426"
          fill="#00aa57"
          rx="4.339"
        ></rect>
        <rect
          width="108.55"
          height="15.441"
          x="127.507"
          y="277.307"
          fill="#e6e6e6"
          rx="4.339"
        ></rect>
        <rect
          width="108.55"
          height="15.441"
          x="127.507"
          y="308.188"
          fill="#e6e6e6"
          rx="4.339"
        ></rect>
        <path
          fill="#ccc"
          d="M207.687 465.16a2.231 2.231 0 01-1.618-3.867l.153-.607-.06-.146a5.992 5.992 0 00-11.053.04c-1.808 4.355-4.11 8.716-4.676 13.32a17.726 17.726 0 00.311 6.096 71.068 71.068 0 01-6.465-29.517 68.595 68.595 0 01.426-7.652q.352-3.125.978-6.205a71.891 71.891 0 0114.257-30.47 19.132 19.132 0 007.957-8.255 14.595 14.595 0 001.327-3.988c-.387.051-.781.083-1.169.108l-.368.02-.045.001a2.21 2.21 0 01-1.816-3.601q.25-.309.502-.617c.254-.318.515-.63.768-.947a1.1 1.1 0 00.083-.095c.292-.362.584-.718.876-1.08a6.392 6.392 0 00-2.095-2.025c-2.928-1.715-6.967-.527-9.081 2.12-2.121 2.649-2.521 6.364-1.785 9.672a25.618 25.618 0 003.544 7.9c-.159.204-.324.4-.483.604a72.355 72.355 0 00-7.552 11.964 30.079 30.079 0 00-1.796-13.971c-1.719-4.147-4.94-7.639-7.777-11.223a6.174 6.174 0 00-10.997 3.031l-.017.159q.632.356 1.238.757a3.027 3.027 0 01-1.22 5.507l-.062.01a30.115 30.115 0 00.794 4.502 31.006 31.006 0 0015.438 19.433c.247.127.489.254.736.374a73.853 73.853 0 00-3.975 18.709 70.049 70.049 0 00.05 11.31l-.018-.134a18.51 18.51 0 00-6.32-10.687c-4.862-3.995-11.732-5.466-16.977-8.676a3.474 3.474 0 00-5.32 3.379l.02.14a20.333 20.333 0 012.28 1.099q.633.356 1.238.757a3.027 3.027 0 01-1.22 5.507l-.062.01-.127.02a30.14 30.14 0 005.544 8.68 31.033 31.033 0 0022.506 9.875h.006a73.831 73.831 0 004.96 14.479h17.718c.063-.197.12-.4.177-.597a20.13 20.13 0 01-4.902-.292c1.314-1.613 2.629-3.239 3.943-4.852a1.1 1.1 0 00.083-.095c.667-.826 1.34-1.645 2.007-2.47v-.001a29.487 29.487 0 00-.864-7.512zm-20.29-39.911l.01-.013-.01.025zm-3.924 35.378l-.152-.343a14.67 14.67 0 000-.75c0-.07-.013-.14-.013-.209.057.438.108.876.171 1.315z"
        ></path>
        <path
          fill="#e6e6e6"
          d="M97.826 227a2.503 2.503 0 01-2.5-2.5v-17a2.5 2.5 0 015 0v17a2.503 2.503 0 01-2.5 2.5z"
        ></path>
        <path
          fill="#fff"
          d="M164.326 162a2.503 2.503 0 012.5-2.5h17a2.5 2.5 0 010 5h-17a2.503 2.503 0 01-2.5-2.5z"
        ></path>
        <path
          fill="#e6e6e6"
          d="M98.326 289a2.503 2.503 0 01-2.5-2.5v-17a2.5 2.5 0 015 0v17a2.503 2.503 0 01-2.5 2.5z"
        ></path>
        <circle cx="193.326" cy="162" r="2.5" fill="#fff"></circle>
        <path
          fill="#cacaca"
          d="M858.94 488.613l-857.75.307a1.19 1.19 0 010-2.381l857.75-.308a1.19 1.19 0 010 2.382z"
        ></path>
        <path
          fill="#2f2e41"
          d="M366.773 226.106l-4.511.967a25.975 25.975 0 00-.702-5.602 16.821 16.821 0 01-2.54 6.294l-25.876 5.526-24.844-26.218c-.038-13.108 7.242-23.07 20.294-23.07.787 0 1.602.038 2.426.113a27.604 27.604 0 0131.602 21.697c9.25 9.109 5.895 14.464 4.151 20.293z"
        ></path>
        <path
          fill="#ffb6b6"
          d="M379.495 532.711L388.881 532.711 393.347 496.506 379.493 496.507 379.495 532.711z"
        ></path>
        <path
          fill="#2f2e41"
          d="M377.167 528.08l14.838-.885v6.357l14.107 9.743a3.97 3.97 0 01-2.257 7.238H386.19l-3.044-6.288-1.19 6.288h-6.66z"
        ></path>
        <path
          fill="#ffb6b6"
          d="M269.531 522.494L277.695 527.126 299.445 497.841 287.396 491.005 269.531 522.494z"
        ></path>
        <path
          fill="#2f2e41"
          d="M269.791 517.318l13.342 6.552-3.137 5.53 7.462 15.434a3.97 3.97 0 01-5.535 5.183l-15.364-8.718.455-6.972-4.137 4.883-5.793-3.287z"
        ></path>
        <path
          fill="#ffb6b6"
          d="M414.19 232.449a8.313 8.313 0 00-6.7 10.844l-14.363 12.431 5.426 10.571 20.037-17.84a8.358 8.358 0 00-4.4-16.006z"
        ></path>
        <path
          fill="#2f2e41"
          d="M399.726 275.2c-4.791 7.256-15.53 14.264-31.465 20.476a6.84 6.84 0 01-5.499-.18c-6.014-2.736-9.868-12.911-10.23-13.898l-11.648-15.713c-.207-.229-5.653-6.41-5.03-12.488a8.877 8.877 0 013.822-6.362c8.818-6.536 28.579 16.165 31.143 19.184l12.897-7.858 9.397-4.193 7.586-9.23 10.682 10.92-9.607 15.283a18.418 18.418 0 01-2.048 4.058zM366.228 303.04S393.826 347 388.826 352s-12.78 6.313-12.78 6.313L358.826 336z"
        ></path>
        <path
          fill="#2f2e41"
          d="M341.826 243l13.008 8.8a33.552 33.552 0 0113.071 38.275l-3.661 11.13z"
        ></path>
        <path
          fill="#2f2e41"
          d="M318.826 363L317.087 369.057 311.153 442.098 281.507 497.348 295.656 507.454 336.083 454.899 352.073 402.716 377.184 518.235 396.05 516.887 382.947 356.722 358.084 311.639 318.826 363z"
        ></path>
        <path
          fill="#00aa57"
          d="M339.614 245.213l18.104 14.795a24.655 24.655 0 018.184 12.603 24.655 24.655 0 01.865 6.901l-.54 32.127 16.6 44.36s-45 17-51 2 7.787-112.786 7.787-112.786z"
        ></path>
        <path
          fill="#2f2e41"
          d="M345.029 365.786c-22.48 0-27.959.17-28.314.098l-.355-.072V352.29L321.826 328c-.639-7.541-2.135-17.485-2-26 .49-30.775-1.023-60.837-1.023-60.837l11.898-10.983 5.406 3.518 10.026 10.026c11.654 28.681 20.902 55.683 20.96 57.418l.733 29.858-3 12c-13.571 9.58-1.17 22.786-19.797 22.786z"
        ></path>
        <path
          d="M323.846 267.973L321.113 285.031 339.614 292.662 323.846 267.973z"
          opacity="0.2"
        ></path>
        <circle cx="342.484" cy="208.867" r="18.114" fill="#ffb6b6"></circle>
        <path
          d="M312.133 300.773a33.272 33.272 0 0039.94 8.073l3.941-1.951z"
          opacity="0.2"
        ></path>
        <path
          fill="#ffb6b6"
          d="M375.164 296.603a8.313 8.313 0 00-12.741.385l-18.289-5.134-5.83 10.353 25.929 6.888a8.358 8.358 0 0010.93-12.492z"
        ></path>
        <path
          fill="#2f2e41"
          d="M331.52 308.093c-8.695 0-20.46-5.098-34.427-14.972a6.839 6.839 0 01-2.88-4.687c-1.03-6.527 5.336-15.35 5.96-16.196l6.693-18.379c.077-.298 2.233-8.25 7.648-11.08a8.877 8.877 0 017.415-.315c10.314 3.755 2.26 32.756 1.155 36.559l13.664 6.431 8.677 5.531 11.884 1.243-3.227 14.932-18.047.406a18.418 18.418 0 01-4.515.527zM364.205 196.95c-1.45 1.887-6.446 3.555-12.38 4.9.01-.122.01-.246.01-.369a25.974 25.974 0 00-.701-5.602 16.821 16.821 0 01-2.54 6.294c-.095.142-.19.284-.294.427-5.09 1.004-10.474 1.782-14.692 2.303 2.9 10.445 14.019 19.014 12.815 25.364l-32.578 6.654a25.54 25.54 0 00-.625-7.867 16.934 16.934 0 01-4.72 8.957l-2.768.569-.825-4.066c-7.147-17.166 2.815-34.74 19.137-43.829a19.84 19.84 0 0112.569-8.436l4.066-.834a19.934 19.934 0 0123.526 15.535z"
        ></path>
        <path
          fill="#f2f2f2"
          d="M442.027 525.336l.482-10.831a34.983 34.983 0 0116.317-4.13c-7.837 6.406-6.857 18.758-12.17 27.374a21.043 21.043 0 01-15.431 9.724l-6.559 4.015a35.26 35.26 0 017.432-28.573 34.06 34.06 0 016.26-5.816c1.57 4.142 3.67 8.237 3.67 8.237z"
        ></path>
        <path
          fill="#cacaca"
          d="M457.927 551.741H229.545a1.19 1.19 0 010-2.381h228.382a1.19 1.19 0 110 2.381z"
        ></path>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .icon {
    position: absolute;
    left: 400px;
    top: 200px;
    width: 400px;
  }
  @media (min-width: 768px) {
    .icon {
      position: absolute;
      left: 420px;
      top: 200px;
      width: 400px;
    }
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
      left: 420px;
      top: 270px;
      width: 450px;
    }
  }
  @media (min-width: 1320px) {
    .icon {
      position: absolute;
      left: 450px;
      top: 300px;
      width: 600px;
    }
  }
`;

export default Icon;
