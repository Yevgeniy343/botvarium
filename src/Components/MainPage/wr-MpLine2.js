import styled from "styled-components";

const Wrapper = styled.main`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px gray solid;
  .left-block {
    display: none;
    p {
      font-size: 1.5rem;
      color: var(--bs-blue);
    }
  }
  .direction {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
    }
  }
  .direction-item {
    width: 20rem;
    border: 1px solid var(--base0E);
    box-shadow: var(--box-shadow);
    color: var(--clr-grey-3);
    display: flex;
    padding: 0.5rem 1rem;
    border-radius: 10px 10px;
    transition: var(--transition);
    margin: 0.5rem;
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

    p {
      font-size: 1rem;
      max-width: 17rem;
    }
    svg {
      font-size: 2.2rem;
      margin-right: 1rem;
    }
  }
  .active {
    border: 2px solid var(--bs-blue);
    box-shadow: var(--box-shadow-active);
    svg {
      color: var(--bs-blue);
    }
    p {
      color: var(--bs-blue);
    }
  }

  @media (min-width: 720px) {
    grid-template-columns: 3fr 2fr;
    .left-block {
      display: block;
    }
  }
  .direction {
    margin-top: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 4fr 2fr;
  }
`;
export default Wrapper;
