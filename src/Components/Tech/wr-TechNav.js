import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: max-content;
  margin: 1rem;
  margin-right: 0;
  margin-top: 2rem;
  border-bottom-right-radius: 80px 80px;
  border-top-right-radius: 80px 80px;
  border: 1px solid var(--theme-ui-colors-green50);
  border-left: 10px solid var(--theme-ui-colors-green50);
  background-color: var(--theme-ui-colors-green05);
  box-shadow: var(--box-shadow-active);
  padding-right: 1rem;
  cursor: pointer;
  .item {
    display: flex;
    align-items: center;
    /* border-bottom: 1px solid gray; */
    padding: 0.5rem;
    font-size: 1.2rem;
    height: 50px;
    border-left: 5px solid transparent;

    :hover {
      border-left: 5px solid var(--theme-ui-colors-blue50);

      transition: var(--transition2);
    }
  }
  .icon {
    width: 110px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;

export default Wrapper;
