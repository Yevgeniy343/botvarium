import styled from "styled-components";

const Wrapper = styled.main`
  margin: 1rem;

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: var(--red);
    transform-origin: 0%;
  }
  .icon {
    font-size: 2.2rem;
    margin-right: 1rem;
  }
  .left-block {
    /* display: none; */

    /* display: block; */
    height: 40vh;
    /* width: 90vw; */
    padding: 0.5rem;
    overflow-y: auto;
    border: 1px solid var(--base0E);

    ::-webkit-scrollbar {
      width: 10px;
      height: 13px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--base0E);
      border-radius: 10px;
    }

    padding-right: 2rem;
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
    /* svg {
      color: var(--bs-blue);
    } */
  }

  @media (min-width: 720px) {
    height: 500px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    .left-block {
      display: block;
      height: 95%;
      overflow-y: auto;
      ::-webkit-scrollbar {
        width: 10px;
        height: 13px;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--base0E);
        border-radius: 10px;
      }

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
