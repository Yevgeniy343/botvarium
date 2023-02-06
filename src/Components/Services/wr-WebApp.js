import styled from "styled-components";

const Wrapper = styled.div`
  .image {
    display: flex;
    justify-content: end;
    align-items: flex-end;
    display: none;
  }
  img {
    width: 85%;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr;
  }
  .codeEditor {
    width: 90%;
    height: 200px;
    background-color: var(--gridSubcardBackground);
    color: var(--theme-ui-colors-black10);
    padding: 1rem;
    border-radius: 10px;
    opacity: 1;
    display: flex;
    justify-content: start;
    box-shadow: var(--dark-shadow);

    p {
      margin-right: 0.5rem;
    }
    span {
      text-indent: 1rem;
      font-weight: 800;
      color: var(--theme-ui-colors-green40);
      font-family: "Source Code Pro", monospace;
    }
  }
  .actions {
    position: absolute;
    z-index: 2;
    align-self: end;
    justify-self: end;
    margin: 10px 25px;
  }
  .btn {
    height: 35px;
    width: max-content;
    padding: 0.5rem 1.5rem;
    background-color: transparent;
    cursor: pointer;
    color: var(--theme-ui-colors-purple20);

    border: none;
    font-size: 1.2rem;
    transition: var(--transition);
    :hover {
      color: var(--theme-ui-colors-purple30);
    }
  }

  @media (min-width: 768px) {
    .image {
      display: block;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr auto;
    }
    .codeEditor {
      position: absolute;
      top: 300px;
      width: 380px;
      height: 180px;
      background-color: var(--gridSubcardBackground);
      color: var(--theme-ui-colors-black10);
      padding: 1rem;
      border-radius: 10px;
      opacity: 0.8;
    }
    .actions {
      justify-self: center;
    }
    .btn {
      align-items: center;
      height: 35px;
      width: max-content;
      padding: 0.4rem 1.5rem;
      background-color: var(--theme-ui-colors-green40);
      color: var(--theme-ui-colors-purple80);
      font-size: 1.3rem;
      transition: var(--transition);
      :hover {
        border: 1px solid var(--theme-ui-colors-yellow70);
        border-radius: 20px;
        color: inherit;
      }
    }
  }
  @media (min-width: 992px) {
  }
`;

export default Wrapper;
