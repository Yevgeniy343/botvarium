import styled from "styled-components";

const Wrapper = styled.div`
  .submenu {
    background: var(--clr-white);
    box-shadow: var(--dark-shadow);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 2rem;
    border: 1px solid var(--base0E);
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .show {
    display: block;
  }
  .submenu::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 720px) {
  }
`;

export default Wrapper;
