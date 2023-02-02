import styled from "styled-components";

const Wrapper = styled.main`
  margin: 1rem;
  .icon {
    font-size: 2.2rem;
    margin-right: 1rem;
  }
  .left-block {
    display: none;
  }
  .direction {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .direction-item {
    width: 80%;
    border: 1px solid var(--base0E);
    box-shadow: var(--box-shadow);
    display: flex;
    padding: 1rem 1rem;
    margin: 0.5rem;
    border-radius: 10px;
    align-items: center;
    cursor: pointer;

    :hover {
      box-shadow: var(--box-shadow-active);
      svg {
        color: var(--bs-blue);
      }
    }
    :active {
      box-shadow: var(--box-shadow);
    }
  }
  .active {
    border: 2px solid var(--bs-blue);
    box-shadow: var(--box-shadow-active);
    svg {
      color: var(--bs-blue);
    }
  }

  @media (min-width: 720px) {
    height: 500px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    .left-block {
      display: block;
      height: 95%;
      overflow-y: auto;
      padding-right: 2rem;
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1140px) {
    .direction {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .direction-item {
      height: 100px;
    }
  }
`;
export default Wrapper;
