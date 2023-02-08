import styled from "styled-components";

const Wrapper = styled.div`
  .content {
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
  }
  .container {
    height: 100vh;
  }

  .header {
    font-family: "Source Code Pro", monospace;
    font-weight: 900;
    font-size: 5rem;
    margin: 3rem;
  }

  .about {
    font-size: 1.2rem;
    margin: 2rem;
    p {
      font-weight: 900;

      color: var(--theme-ui-colors-green70);
      font-family: "Source Code Pro", monospace;
    }
  }
  .line {
    margin: 1rem;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 1px solid gray;
  }
  .left {
    border: 1px solid gray;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1400px) {
  }
`;

export default Wrapper;
