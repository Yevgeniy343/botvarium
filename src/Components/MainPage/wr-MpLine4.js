import styled from "styled-components";

const Wrapper = styled.main`
  margin-top: 4rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px gray solid;
  height: 500px;
  .left-block {
    border-right: 1px dotted gray;
    p {
      font-size: 2.7rem;
      color: var(--bs-blue);
    }
    img {
      width: 100%;
    }
  }
  .right-block {
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
    svg {
      font-size: 15rem;
      color: var(--base0C);
    }
    p {
      font-size: 1.3rem;
      color: var(--bs-body-bg);
    }
  }
  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 4rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 0;
  }
`;
export default Wrapper;
