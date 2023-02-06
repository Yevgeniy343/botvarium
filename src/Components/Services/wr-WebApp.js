import styled from "styled-components";

const Wrapper = styled.div`
  .image {
    display: none;
  }
  img {
    width: 100%;
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
    /* position: absolute; */

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
    background-color: var(--theme-ui-colors-green40);
    color: var(--theme-ui-colors-purple80);
    border: none;
    font-size: 1.2rem;
    transition: var(--transition);
    color: var(--theme-ui-colors-yellow80);

    border-radius: 10px;
    :hover {
      border-radius: 30px;
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
      height: 220px;
      background-color: var(--gridSubcardBackground);
      color: var(--theme-ui-colors-black10);
      padding: 1rem;
      border-radius: 10px;
      opacity: 0.8;
    }
    .actions {
      /* justify-self: center; */
    }
    .btn {
      /* position: relative; */
      align-items: center;

      height: 35px;
      width: max-content;
      padding: 0.4rem 1.5rem;

      font-size: 1.3rem;
      transition: var(--transition);
      box-shadow: var(--box-shadow);

      :hover {
        /* border: 1px solid var(--theme-ui-colors-yellow70); */
        border-radius: 20px;
        color: var();
      }
    }
  }
  @media (min-width: 992px) {
  }
`;

export default Wrapper;
