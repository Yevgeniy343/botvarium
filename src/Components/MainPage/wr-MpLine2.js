import styled from "styled-components";

const Wrapper = styled.main`
  margin-top: 4rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px gray solid;
  .left-block {
    border-right: 1px dotted gray;
    p {
      font-size: 1.5rem;
      color: var(--bs-blue);
    }
  }
  .right-block {
    p {
      font-size: 1.5rem;
      color: var(--bs-blue);
    }
  }
  @media (min-width: 720px) {
    grid-template-columns: 3fr 2fr;
    margin-top: 4rem;
  }
  .right-block {
    margin-top: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 3fr 2fr;
    margin-top: 0;
  }
`;
export default Wrapper;
