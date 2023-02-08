import styled from "styled-components";

const Wrapper = styled.div`
  p {
    font-weight: 900;
    color: var(--theme-ui-colors-green70);
    font-family: "Source Code Pro", monospace;
    text-indent: 1rem;
  }
  span {
    font-weight: 600;
    color: var(--theme-ui-colors-purple50);
  }
  .content {
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
    font-size: 3rem;
    margin: 3rem;
    p {
      color: var(--theme-ui-colors-purple50);
    }
  }

  .about {
    display: none;
    font-size: 1.2rem;
    margin: 2rem;
    p {
      font-weight: 900;
      color: var(--theme-ui-colors-green70);
      font-family: "Source Code Pro", monospace;
    }
  }
  .line {
    margin: 2rem 1rem;
    min-height: 100px;
    display: grid;
    grid-template-columns: 1fr;
  }
  .left {
    border: 2px solid var(--theme-ui-colors-purple50);
    box-shadow: var(--box-shadow2);
    border-radius: 10px;
    padding: 1rem;
  }
  .right {
    border: 2px solid var(--theme-ui-colors-purple50);
    box-shadow: var(--box-shadow2);
    margin: 1rem;
    border-radius: 10px;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .header {
      font-size: 4rem;
    }
    .about {
      display: block;
    }
    .content {
      height: 450px;
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: end;
    }
    .line {
      margin: 1rem 5rem;
      min-height: 100px;
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
    .left {
      border: 2px solid var(--theme-ui-colors-purple50);
      box-shadow: var(--box-shadow2);
      border-radius: 10px;
      padding: 1rem;
      min-height: 100px;
    }
    .right {
      border: 2px solid var(--theme-ui-colors-purple50);
      box-shadow: var(--box-shadow2);
      margin: 0;
      margin-left: 1rem;
      border-radius: 10px;
      padding: 1rem;
      min-height: 100px;
    }
  }

  @media (min-width: 992px) {
    .header {
      font-size: 5rem;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1400px) {
  }
`;

export default Wrapper;
