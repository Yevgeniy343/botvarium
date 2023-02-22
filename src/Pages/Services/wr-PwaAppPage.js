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
    font-size: 2.5rem;
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
  .blank {
    cursor: pointer;
  }
  .phones {
    margin: 2rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ios {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .ios-about {
      margin: 1rem;
    }
  }
  .android {
    justify-content: center;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    .android-about {
      margin: 1rem;
    }
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
    .phones {
      display: flex;
      flex-direction: row;
    }
    .ios {
      margin-right: 5rem;
    }
    .android {
      margin-top: 0;
    }
  }
  @media (min-width: 992px) {
    .header {
      font-size: 5rem;
    }
    .ios {
      margin-right: 10rem;
    }
  }
  @media (min-width: 1140px) {
    .ios {
      margin-right: 15rem;
    }
  }
  @media (min-width: 1400px) {
    .ios {
      margin-right: 20rem;
    }
  }
`;

export default Wrapper;
