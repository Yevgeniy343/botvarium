import React from "react";
import styled from "styled-components";
// import Co from "../../MDX/page.mdx";

import SyntaxHighlighter from "react-syntax-highlighter";
// import { style } from "react-syntax-highlighter/dist/esm/styles/{hljs|prism}";
import { atelierSeasideLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ codeString }) => {
  return (
    <Wrapper>
      <SyntaxHighlighter language="javascript" style={atelierSeasideLight}>
        {codeString}
      </SyntaxHighlighter>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 95%;
  border-radius: 5px;
  font-weight: 900;

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default Code;
