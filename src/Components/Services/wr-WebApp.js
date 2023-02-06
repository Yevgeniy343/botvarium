import styled from "styled-components";

const Wrapper = styled.div`
  img {
    width: 100%;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr;
  }
  .codeEditor {
    /* position: absolute;
    top: 300px; */
    width: 90%;
    height: 200px;
    background-color: var(--gridSubcardBackground);
    color: var(--theme-ui-colors-black10);
    padding: 1rem;
    border-radius: 10px;
    opacity: 0.8;
  }
  @media (min-width: 768px) {
    .content {
      display: grid;
      grid-template-columns: 1fr auto;
    }
    .codeEditor {
      position: absolute;
      top: 300px;
      width: 300px;
      height: 170px;
      background-color: var(--gridSubcardBackground);
      color: var(--theme-ui-colors-black10);
      padding: 1rem;
      border-radius: 10px;
      opacity: 0.7;
    }
  }

  @media (min-width: 992px) {
  }
`;

export default Wrapper;
