import styled from "styled-components";

const Wrapper = styled.div`
  .image {
    display: none;
  }
  img {
    width: 100%;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .codeEditor {
    display: flex;
    width: 90%;
    height: 200px;
    background-color: var(--gridSubcardBackground);
    color: var(--theme-ui-colors-black10);
    padding: 1rem;
    border-radius: 10px;
    opacity: 1;
    justify-content: start;
    box-shadow: var(--dark-shadow);
    margin-right: 0.5rem;

    p {
    }
    span {
      text-indent: 1rem;
      font-weight: 700;
      color: var(--theme-ui-colors-green40);
      font-family: "Source Code Pro", monospace;
    }
  }

  .btn {
    height: 35px;
    margin: 1rem 0;
    width: max-content;
    padding: 0.5rem 1.5rem;
    background-color: var(--theme-ui-colors-green40);
    font-size: 1.2rem;
    transition: var(--transition);
    color: var(--theme-ui-colors-yellow80);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    :hover {
      border-radius: 30px;
    }
  }

  @media (min-width: 768px) {
    .image {
      display: block;
    }
    .code-side {
      /* display: grid;
      grid-template-rows: 1fr 1fr; */
    }
    .content {
      display: grid;
      grid-template-columns: 1fr auto;
    }
    .codeEditor {
      position: absolute;
      top: 300px;
      width: 380px;
      height: 220px;
      background-color: var(--gridSubcardBackground);
      color: var(--theme-ui-colors-black10);
      padding: 1rem;
      border-radius: 10px;
      opacity: 0.7;
      span {
        text-indent: 1rem;
        font-weight: 900;
        color: var(--theme-ui-colors-green40);
        font-family: "Source Code Pro", monospace;
      }
    }

    .btn {
      position: relative;
      top: 250px;
    }
  }

  @media (min-width: 992px) {
    img {
      width: 80%;
      float: right;
    }
    .codeEditor {
      margin-top: 3rem;
      /* top: 350px; */
      width: 350px;
      height: 250px;
    }
    .btn {
      margin-top: 4rem;
    }
  }
  @media (min-width: 1140px) {
    img {
      width: 90%;
      float: right;
    }
    .codeEditor {
      margin-top: 5rem;
    }
    .btn {
      top: 270px;
    }
  }
  @media (min-width: 1400px) {
    img {
      width: 80%;
      float: right;
    }
    .codeEditor {
      width: 380px;
    }
    .btn {
    }
  }
`;

export default Wrapper;
