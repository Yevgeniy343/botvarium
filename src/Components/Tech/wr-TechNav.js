import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  height: 20%;
  margin: 1rem;
  border-radius: 5px;

  border: 1px solid var(--theme-ui-colors-green50);
  border-left: 10px solid var(--theme-ui-colors-green50);
  background-color: var(--theme-ui-colors-green05);
  box-shadow: var(--box-shadow-active);
  padding-right: 1rem;
  overflow-y: auto;
  cursor: pointer;

  .icons-list {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .item {
    height: 100%;
    margin: 1rem 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    border-left: 5px solid transparent;

    :hover {
      /* border-left: 5px solid var(--theme-ui-colors-blue50); */

      transition: var(--transition2);
    }
  }
  .icon {
    margin-bottom: 1rem;
    width: 110px;
  }
  .label {
    display: none;
  }

  @media (min-width: 768px) {
    width: 150px;
    .icons-list {
      display: block;
    }
    .item {
    }
  }

  @media (min-width: 992px) {
    width: 270px;

    .label {
      display: block;
    }
  }

  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default Wrapper;
