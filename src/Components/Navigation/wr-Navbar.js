import styled from "styled-components";

const Wrapper = styled.div`
  p {
    font-family: "Source Code Pro", monospace;
  }
  background: #ffffff;
  .burger {
    z-index: 3;
    position: sticky;
  }
  .link-btn {
    height: 100%;
    background: transparent;
    border-color: transparent;
    font-size: 1.1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    width: 7rem;
    cursor: pointer;
    :hover {
      transition: var(--transition);
      color: var(--theme-ui-colors-purple50);
    }
  }
  a {
    font-weight: 700;
    text-decoration: none;
    color: var(--base0E);
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
    :hover {
      background: var(--clr-primary-8);
      color: var(--theme-ui-colors-purple50);
      padding-left: 1.5rem;
    }
  }
  .active {
    color: var(--clr-primary-5);
  }
  nav {
    background: transparent;
    box-shadow: var(--light-shadow);
    border-bottom: 1px solid var(--base0E);
  }
  .nav-center {
    /* height: 100vh; */
  }

  .logo {
    height: 25px;
    cursor: pointer;
    z-index: 3;
    position: sticky;
  }

  .nav-toggle {
    font-size: 1.7rem;
    color: var(--theme-ui-colors-green50);
    background: transparent;
    border-color: transparent;
    /* transition: var(--transition); */
    cursor: pointer;

    width: 70px;
    height: 30px;
    border-radius: 50px;
    background: var(--accent);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    /* height: auto !important; */
    transition: var(--transition);
  }
  .show-container {
    height: 10rem;
  }
  .social-icons {
    display: none;
  }

  @media (min-width: 768px) {
    .links-container {
      height: auto !important;
    }
    a {
      padding: 0;
      margin: 0 0.5rem;
      :hover {
        padding: 0;
        background: transparent;
      }
    }
    .nav-center {
      /* max-width: 1170px; */
      width: 95%;
      margin: 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }

    .nav-toggle {
      display: none;
    }
    .nav-header {
      padding: 0;
    }
    .links {
      display: flex;
      flex-direction: row;
      font-family: "Source Code Pro", monospace;
    }
    .social-icons {
      display: flex;
      margin: 0 0;
      padding: 0 0;
    }
    .social-icons svg {
      margin: 0 0.5rem;
      color: var(--theme-ui-colors-green50);
      transition: var(--transition);
      font-size: 1.5rem;
      cursor: pointer;
      :hover {
        color: var(--theme-ui-colors-green40);
      }
    }
    .logo {
      height: 30px;
    }
  }
`;
export default Wrapper;
