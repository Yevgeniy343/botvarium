import styled from "styled-components";

const Wrapper = styled.main`
  font-family: "Source Code Pro", monospace;
  border: 1px solid gray;
  margin: 0 2rem;

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
  }
  .tech-item {
    width: 120px;
    min-width: 120px;
    margin: 1rem 2rem;
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
`;
export default Wrapper;
