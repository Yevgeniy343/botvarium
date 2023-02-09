import styled from "styled-components";

const Wrapper = styled.div`
  p {
    text-indent: 0;
  }
  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
    transition: var(--transition2);
    transform: scale(0);
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem;
  }
  .sidebar-wrapper.show {
    visibility: visible;
    z-index: 2;
    transform: scale(1);
  }
  .sidebar {
    width: 100vw;
    height: 100vh;
    max-width: var(--fixed-width);
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
    position: absolute;
    top: 0;
    padding: 4rem 2rem;
  }
  .links-area {
    margin: 2rem 0;
  }
  .page {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .sidebar-links {
  }
  .sidebar-sublinks {
    width: max-content;
    display: grid;
    justify-content: space-around;
    grid-template-columns: 1fr;
    /* row-gap: 0.5rem; */
  }

  .link {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: start;
    align-items: center;
    margin: 0.5rem 0.5rem;
    padding: 0.6rem 0.6rem;
    cursor: pointer;
    box-shadow: var(--dark-shadow);
    :hover {
      transition: var(--transition);
      padding-left: 0.2rem;
      background-color: var(--theme-ui-colors-black15);
      box-shadow: none;
    }
    svg {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }
  }
  label {
    a {
      text-decoration: none;
    }
  }

  .sidebar-sublinks svg {
    color: var(--clr-grey-5);
    margin-right: 1rem;
  }

  @media (min-width: 992px) {
    .sidebar-wrapper {
      display: none;
    }
  }
`;

export default Wrapper;
