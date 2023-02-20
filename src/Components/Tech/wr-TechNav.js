import styled from "styled-components";

const Wrapper = styled.div`
  overflow-x: auto;
  margin: 1rem;
  margin-top: 0;
  ::-webkit-scrollbar {
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--theme-ui-colors-yellow50);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--theme-ui-colors-yellow50);
    border-radius: 10px;
  }
  .icons-list {
    display: flex;
    flex-direction: row;
  }
  .item {
    margin: 1rem;
  }
  .label {
    display: none;
  }
  svg {
    width: 60px;
    height: 40px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    overflow-y: auto;
    width: 170px;
    height: 90vh;
    margin-top: 1rem;
    svg {
      width: 80px;
      height: 60px;
      cursor: pointer;
    }
    ::-webkit-scrollbar {
      width: 7px;
    }
    .icons-list {
      display: flex;
      flex-direction: column;
    }
    .item {
      /* margin: 1rem; */
    }
  }
  @media (min-width: 992px) {
    width: 250px;
    svg {
      width: 100px;
      height: 60px;
      cursor: pointer;
    }
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default Wrapper;
