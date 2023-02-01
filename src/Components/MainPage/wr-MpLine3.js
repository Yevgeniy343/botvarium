import styled from "styled-components";

const Wrapper = styled.main`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px gray solid;
  overflow-x: scroll;
  width: calc(100vw-20px);

  .boxes {
    display: flex;
  }
  .box {
    margin-left: 2rem;
    margin-right: 2rem;
    height: 250px;
    width: 200px;
    border: 1px solid gray;
    background: linear-gradient(250deg, #b6bdca, #d19a66);
  }

  @media (min-width: 720px) {
    width: calc(100vw-100px);
  }
  @media (min-width: 992px) {
    width: calc(100vw-300px);
  }
`;
export default Wrapper;
