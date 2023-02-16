import styled from "styled-components";

const Wrapper = styled.div`
  width: 150px;
  height: 90vh;
  margin: 1rem;
  margin-right: 0;
  margin-top: 2rem;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid var(--theme-ui-colors-green50);
  border-left: 10px solid var(--theme-ui-colors-green50);
  background-color: var(--theme-ui-colors-green05);
  box-shadow: var(--box-shadow-active);
  padding-right: 1rem;
  overflow-y: auto;
  cursor: pointer;
  .item {
    margin: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-bottom: 1px solid gray; */
    padding: 0.5rem;
    font-size: 1rem;
    height: 50px;
    border-left: 5px solid transparent;

    :hover {
      border-left: 5px solid var(--theme-ui-colors-blue50);

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
    padding: 1rem 0;
    overflow-y: hidden;
    width: 300px;
    height: max-content;
    .item {
      margin: 0;
      display: flex;
      flex-direction: row;
    }
    .label {
      display: block;
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default Wrapper;
