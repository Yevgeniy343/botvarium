import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;

  .left-block {
    padding: 0 0.5rem;
    margin: 0 0.5rem;
  }
  .direction {
    p {
      text-indent: 0;
    }
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    margin: 0 0.5rem;
  }
  .direction-item {
    letter-spacing: 0.07rem;
    font-size: 1rem;
    display: flex;
    width: max-content;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0.5rem;
    border: 2px solid var(--base0E);
    background-color: var(--clr-primary-11);
    border-radius: 20px;
    padding: 0.6rem 0.6rem;
    opacity: 0.9;
    cursor: pointer;
    svg {
      display: none;
      font-size: 1.7rem;
      margin-right: 0.5rem;
    }
    :hover {
      box-shadow: var(--box-shadow-active);
      transition: var(--transition);

      svg {
        color: var(--bs-blue);
      }
    }
    :active {
      box-shadow: var(--box-shadow);
    }
  }
  .active {
    border: 2px solid var(--theme-ui-colors-green50);
    box-shadow: var(--box-shadow-active);
    svg {
      color: var(--bs-blue);
    }
  }
  @media (min-width: 720px) {
  }

  @media (min-width: 992px) {
    .left-block {
      margin-left: 3rem;
    }
    .direction-item {
      padding: 0.3rem 0.4rem;

      svg {
        display: block;
      }
    }
  }

  @media (min-width: 1140px) {
    grid-template-columns: 3fr 1fr;
    .left-block {
      height: 60vh;
      margin-left: 3rem;
    }
    .direction {
      height: 80%;
      margin-right: 3rem;
    }
    .direction-item {
      min-width: max-content;
      width: 90%;
      height: max-content;
      margin: 0;
      padding: 1rem 1rem;
      border-radius: 10px;
      justify-content: start;
    }
  }

  @media (min-width: 1320px) {
    grid-template-columns: 4fr 1fr;
    .left-block {
      margin-left: 3rem;
    }
    .direction {
      margin-right: 3rem;
    }
  }
`;
export default Wrapper;
