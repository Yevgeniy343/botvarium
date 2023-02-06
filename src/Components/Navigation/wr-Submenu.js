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
    border: 1px solid var(--theme-ui-colors-black50);
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
    border: 1px solid var(--base0E);

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  .submenu-center {
    display: grid;
    gap: 0.25rem 1rem;
  }
  .col-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .col-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .col-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  .submenu h4 {
    margin-bottom: 1.5rem;
  }
  .submenu-center a {
    width: 10rem;
    display: block;
    color: var(--clr-grey-1);
    /* text-transform: capitalize; */
    display: flex;
    align-items: center;
  }
  .submenu-center svg {
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
  }
  .icon {
    font-size: 1.2rem;
  }
  .label {
    font-size: 1rem;
  }
  .sub {
    margin-top: 1.5rem;
  }
  .sub :hover {
    svg {
      transition: var(--transition);
      color: var(--theme-ui-colors-purple40);
      scale: 1.1;
    }
    .label {
      transition: var(--transition);
      color: var(--theme-ui-colors-purple40);
    }
  }
  @media (min-width: 768px) {
  }
`;

export default Wrapper;
