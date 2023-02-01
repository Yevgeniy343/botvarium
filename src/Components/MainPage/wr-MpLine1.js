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
      font-size: 2.4rem;
      color: var(--bs-blue);
    }
  }
  .right-block {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 12rem;
      color: var(--base0C);
    }
  }
  @media (min-width: 720px) {
    grid-template-columns: 2fr 3fr;
    margin-top: 4rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 2fr 3fr;
    margin-top: 0;
  }
`;
export default Wrapper;
