import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;

  /* grid-gap: 1rem; */
  .left-block {
    /* height: 50vh; */
    padding: 0 0.5rem;
    margin: 0 0.5rem;
    /* overflow-y: auto; */

    /* ::-webkit-scrollbar {
      width: 5px;
      height: 13px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--base0E);
      border-radius: 10px;
    } */
  }
  .direction {
    p {
      text-indent: 0;
    }
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    margin: 0 2rem;
  }
  .direction-item {
    font-size: 0.9rem;
    display: flex;
    width: max-content;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0.5rem;
    border: 2px solid var(--base0E);
    background-color: var(--clr-primary-11);
    border-radius: 20px;
    padding: 0.6rem 0.6rem;
    cursor: pointer;
    svg {
      display: none;
      font-size: 1.5rem;
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
    }
    .direction {
      height: 80%;
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
  }
`;
export default Wrapper;
