import React from "react";
import styled from "styled-components";
// import Co from "../../MDX/page.mdx";

import SyntaxHighlighter from "react-syntax-highlighter";

import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = () => {
  const codeString = `
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log("Server running at");
});
  `;

  return (
    <Wrapper>
      <div className="editor">
        <div className="code">
          <SyntaxHighlighter language="javascript" style={vs}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem;
  width: min-content;
  height: min-content;
  align-self: center;
  box-shadow: var(--box-shadow-active);

  .editor {
    border-radius: 5px;
    /* background-color: var(--codeEditor); */
    padding: 1rem;
  }
  .code {
    /* color: var(--theme-ui-colors-black10); */
    /* margin: 0.6rem; */
  }

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
