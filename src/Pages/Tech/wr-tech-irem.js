import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-family: "Source Code Pro", monospace;
  }
  .page {
    .icon {
      width: 100%;
      margin-bottom: 1rem;
      svg {
        width: 15%;
        min-width: 120px;
        /* margin: 1rem; */
      }
    }
  }
  .content {
    overflow-y: auto;
    height: 75vh;
    margin-right: 1rem;
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
  }
  .about {
    height: max-content;
    border-radius: 5px;
    box-shadow: var(--box-shadow-active);
    padding-bottom: 2rem;
    margin: 1rem;
    border-left: 10px solid var(--theme-ui-colors-yellow50);
    background-color: var(--theme-ui-colors-yellow10);
    p {
      color: var(--theme-ui-colors-yellow70);
    }
  }
  .where {
    border-radius: 5px;
    box-shadow: var(--box-shadow-active);
    padding-bottom: 2rem;
    margin: 1rem;
    height: max-content;
    background-color: var(--theme-ui-colors-blue10);
    border-left: 10px solid var(--theme-ui-colors-blue50);
    p {
      color: var(--theme-ui-colors-blue70);
    }
  }
  .stats {
    padding-bottom: 2rem;
    border-radius: 5px;
    box-shadow: var(--box-shadow-active);
    height: max-content;
    margin: 1rem;
    /* min-height: 200px; */
    background-color: var(--theme-ui-colors-purple10);
    border-left: 10px solid var(--theme-ui-colors-purple50);
    p {
      color: var(--theme-ui-colors-purple70);
    }
  }
  .extra {
    border-radius: 5px;
    box-shadow: var(--box-shadow-active);
    margin: 1rem;
    height: max-content;
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
    /* margin: 1rem; */
    margin-left: 2rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    .page {
      .icon {
        svg {
          min-width: 150px;
          margin: 1rem;
        }
      }
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
