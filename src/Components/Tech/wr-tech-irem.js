import styled from "styled-components";

const Wrapper = styled.div`
  p {
    font-family: "Source Code Pro", monospace;
  }
  margin: 1rem;
  width: 100%;
  height: 100%;
  .icon {
    width: 100%;
    svg {
      width: 15%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px var(--theme-ui-colors-yellow50);
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--theme-ui-colors-yellow50);
      border-radius: 10px;
    }
    height: 75vh;
  }
  .content div {
    margin: 1rem;
    border-radius: 5px;
  }
  .about {
    min-height: 200px;
    border-left: 10px solid var(--theme-ui-colors-yellow50);
    background-color: var(--theme-ui-colors-yellow10);
    p {
      color: var(--theme-ui-colors-yellow70);
    }
  }
  .where {
    min-height: 200px;
    background-color: var(--theme-ui-colors-blue10);
    border-left: 10px solid var(--theme-ui-colors-blue50);
    p {
      color: var(--theme-ui-colors-blue70);
    }
  }
  .stats {
    min-height: 200px;
    background-color: var(--theme-ui-colors-purple10);
    border-left: 10px solid var(--theme-ui-colors-purple50);
    p {
      color: var(--theme-ui-colors-purple70);
    }
  }
  .extra {
    min-height: 200px;
    background-color: var(--theme-ui-colors-green10);
    border-left: 10px solid var(--theme-ui-colors-green50);
    p {
      color: var(--theme-ui-colors-green70);
    }
  }
  .header {
    font-size: 1.3rem;
    font-weight: 700;
    padding: 0.5rem;
    text-decoration: underline;
    /* text-decoration-style: wavy; */
  }
  .text {
    margin: 1rem;
    margin-left: 7rem;
    font-weight: 700;
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
