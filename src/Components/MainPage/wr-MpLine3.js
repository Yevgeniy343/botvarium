import styled from "styled-components";

const Wrapper = styled.main`
  font-family: "Source Code Pro", monospace;

  margin: 0 1rem;

  .header {
    display: flex;
    font-size: 2.5rem;
    justify-content: center;
    font-weight: 900;
    color: var(--theme-ui-colors-green60);
    margin: 2rem;
    margin-bottom: 0.5rem;
  }
  .tech-list {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
  }
  .tech-item {
    width: 120px;
    min-width: 120px;
    margin: 1rem;
  }

  @media (min-width: 768px) {
    margin: 0 2rem;
    .tech-item {
      width: 180px;
      min-width: 180px;
      margin: 1rem;
    }
  }
  @media (min-width: 992px) {
    .tech-item {
      width: 180px;
      min-width: 180px;
    }
  }
`;
export default Wrapper;
