import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 70%;
    height: 70%;
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
        width="467.36"
        height="155.8"
        x="0"
        y="0"
        viewBox="0 0 467.357 155.798"
      >
        <g transform="translate(-166.326 -222.113)">
          <path
            fill="#636466"
            d="M421.64 272.27c0 3.619-2.973 6.849-6.85 6.849-2.973 0-5.557.776-7.754 2.456-2.455 1.552-4.394 3.748-5.944 6.203-3.102 4.136-4.651 9.046-5.298 10.854v24.554c0 3.748-3.23 6.85-7.107 6.85-3.748 0-6.849-3.102-6.849-6.85V272.27c0-3.748 3.101-6.72 6.849-6.72 3.877 0 7.107 2.973 7.107 6.72v.905c.775-.905 1.809-1.938 2.714-2.585 4.265-2.842 9.821-5.169 16.282-5.04 3.877 0 6.85 2.973 6.85 6.72zM417.85 297.73c.13-17.575 13.828-32.307 31.531-32.307 16.8 0 30.11 12.535 31.145 29.98v.646c0 .259 0 .904-.129 1.163-.389 3.102-3.102 5.17-6.721 5.17h-41.094c.646 2.973 2.067 6.332 4.394 8.529 2.714 3.102 7.883 5.426 12.405 5.814 4.652.387 10.209-.775 13.44-3.23 2.713-2.844 8.012-2.455 9.692-.389 1.68 1.811 2.972 5.688 0 8.4-6.333 5.814-13.957 8.529-23.133 8.529-17.702-.127-31.4-14.73-31.53-32.305zm14.086-6.332h36.571c-1.292-5.169-7.883-12.793-19.126-13.698-10.983.516-16.411 8.4-17.445 13.698zM546.36 323.06c0 3.748-3.102 6.979-6.979 6.979-3.489 0-6.202-2.455-6.849-5.557-4.91 3.359-11.113 5.557-17.575 5.557-17.445 0-31.402-14.732-31.402-32.178 0-17.705 13.957-32.437 31.402-32.437 6.333 0 12.535 2.067 17.316 5.427v-24.294c0-3.748 3.102-6.979 7.107-6.979 3.877 0 6.979 3.231 6.979 6.979v76.503zm-31.402-43.55c-4.652 0-8.917 1.938-12.146 5.298-3.231 3.231-5.17 7.882-5.17 13.052 0 4.91 1.938 9.562 5.17 12.793 3.229 3.361 7.494 5.299 12.146 5.299 4.781 0 8.917-1.938 12.147-5.299 3.23-3.23 5.169-7.883 5.169-12.793 0-5.17-1.938-9.821-5.169-13.052-3.23-3.36-7.366-5.298-12.147-5.298zM570.95 249.27c0 3.877-2.972 7.107-6.979 7.107-3.877 0-6.978-3.23-6.978-7.107v-2.714a6.95 6.95 0 016.978-6.979c4.007 0 6.979 3.102 6.979 6.979v2.714zm0 23.39v50.399c0 3.877-2.972 6.979-6.979 6.979a6.95 6.95 0 01-6.978-6.979V272.66c0-4.135 3.101-7.108 6.978-7.108 4.008 0 6.979 2.973 6.979 7.108zM579.83 311.55c2.326-3.1 6.85-3.488 9.692-1.033 3.36 2.844 9.176 5.814 14.215 5.686 3.489 0 6.72-1.162 8.788-2.455 1.809-1.551 2.325-2.842 2.325-3.877 0-.646-.129-.904-.387-1.293-.13-.387-.646-.904-1.681-1.549-1.809-1.293-5.686-2.715-10.338-3.619h-.129c-4.007-.775-7.884-1.809-11.243-3.361-3.489-1.679-6.591-4.005-8.917-7.494-1.421-2.326-2.196-5.169-2.196-8.141 0-5.945 3.36-10.985 7.624-14.216 4.523-3.101 9.951-4.781 15.896-4.781 8.916 0 15.248 4.265 19.384 7.107 3.102 2.068 4.006 6.333 2.067 9.562-2.067 3.102-6.332 4.007-9.562 1.81-4.135-2.713-7.754-4.782-11.889-4.782-3.231 0-6.074 1.034-7.754 2.326-1.68 1.164-2.067 2.327-2.067 2.973 0 .516 0 .646.258 1.033.13.258.517.775 1.422 1.292 1.681 1.163 5.04 2.326 9.434 3.102l.129.13h.13c4.265.774 8.271 1.938 12.018 3.747 3.489 1.551 6.979 4.006 9.176 7.624 1.551 2.584 2.455 5.557 2.455 8.529 0 6.332-3.489 11.631-8.142 14.99-4.652 3.23-10.468 5.17-16.8 5.17-10.079-.129-17.833-4.781-23.002-8.916-2.844-2.326-3.231-6.721-.906-9.564z"
          ></path>
          <path
            fill="#a41e11"
            d="M334.77 339.54c-9.078 4.732-56.106 24.068-66.118 29.287-10.012 5.221-15.574 5.17-23.483 1.389s-57.955-23.996-66.97-28.305c-4.506-2.154-6.875-3.971-6.875-5.688v-17.195s65.153-14.184 75.672-17.957c10.518-3.774 14.167-3.91 23.118-.631 8.952 3.279 62.474 12.936 71.321 16.176l-.004 16.951c.001 1.7-2.04 3.565-6.661 5.973z"
          ></path>
          <path
            fill="#d82c20"
            d="M334.77 322.34c-9.078 4.73-56.106 24.068-66.118 29.287-10.012 5.221-15.574 5.17-23.483 1.389-7.91-3.779-57.955-23.998-66.97-28.305-9.015-4.309-9.204-7.275-.348-10.742 8.855-3.469 58.626-22.996 69.146-26.77 10.518-3.772 14.167-3.91 23.118-.63 8.952 3.279 55.699 21.886 64.545 25.126 8.848 3.243 9.188 5.913.11 10.645z"
          ></path>
          <path
            fill="#a41e11"
            d="M334.77 311.5c-9.078 4.732-56.106 24.068-66.118 29.289-10.012 5.219-15.574 5.168-23.483 1.387-7.91-3.779-57.955-23.996-66.97-28.305-4.506-2.154-6.875-3.969-6.875-5.686v-17.197s65.153-14.183 75.672-17.957c10.518-3.773 14.167-3.91 23.118-.631 8.952 3.279 62.474 12.934 71.321 16.175l-.004 16.953c.001 1.699-2.04 3.564-6.661 5.972z"
          ></path>
          <path
            fill="#d82c20"
            d="M334.77 294.3c-9.078 4.732-56.106 24.068-66.118 29.289-10.012 5.219-15.574 5.168-23.483 1.387-7.91-3.779-57.955-23.997-66.97-28.305s-9.204-7.274-.348-10.743c8.855-3.467 58.626-22.995 69.146-26.768 10.518-3.773 14.167-3.91 23.118-.631 8.952 3.279 55.699 21.885 64.545 25.126 8.848 3.242 9.188 5.913.11 10.645z"
          ></path>
          <path
            fill="#a41e11"
            d="M334.77 282.42c-9.078 4.732-56.106 24.069-66.118 29.29-10.012 5.219-15.574 5.168-23.483 1.387-7.91-3.779-57.955-23.997-66.97-28.305-4.506-2.154-6.875-3.97-6.875-5.686v-17.197s65.153-14.183 75.672-17.956c10.518-3.774 14.167-3.91 23.118-.631 8.952 3.279 62.474 12.934 71.321 16.175l-.004 16.952c.001 1.698-2.04 3.563-6.661 5.971z"
          ></path>
          <path
            fill="#d82c20"
            d="M334.77 265.22c-9.078 4.732-56.106 24.069-66.118 29.289-10.012 5.219-15.574 5.168-23.483 1.388s-57.955-23.997-66.97-28.305-9.204-7.275-.348-10.743c8.855-3.468 58.626-22.994 69.146-26.768 10.518-3.774 14.167-3.91 23.118-.63 8.952 3.279 55.699 21.885 64.545 25.126 8.848 3.24 9.188 5.912.11 10.643z"
          ></path>
          <path
            fill="#FFF"
            d="M278.67 248.66L263.93 250.19 260.63 258.13 255.3 249.27 238.28 247.74 250.98 243.16 247.17 236.13 259.06 240.78 270.27 237.11 267.24 244.38z"
          ></path>
          <path
            fill="#FFF"
            d="M259.75 287.18L232.24 275.77 271.66 269.72z"
          ></path>
          <ellipse
            cx="221.61"
            cy="261.24"
            fill="#FFF"
            rx="21.069"
            ry="8.167"
          ></ellipse>
          <path
            fill="#7a0c00"
            d="M296.09 250.83L319.42 260.05 296.11 269.26z"
          ></path>
          <path
            fill="#ad2115"
            d="M270.28 261.04L296.09 250.83 296.11 269.26 293.58 270.25z"
          ></path>
        </g>
      </motion.svg>
    </Wrapper>
  );
}

export default Icon;
