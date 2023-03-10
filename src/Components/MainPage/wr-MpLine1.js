import styled from "styled-components";

const Wrapper = styled.main`
  .big-test {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  circle,
  rect,
  line {
    stroke-width: 5px;
    stroke-linecap: round;
    fill: transparent;
  }
  margin: 0;
  padding: 4rem 0;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    height: 40px;
  }
  .about {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 200;
      font-size: 1.3rem;
      color: var(--theme-ui-colors-green60);
    }
  }
  @media (min-width: 768px) {
    margin: 0 2rem;

    .about {
      p {
        font-size: 2rem;
      }
    }
    .logo {
      height: 45px;
    }
  }
  @media (min-width: 992px) {
    margin: 0 5rem;
    .about {
      p {
        font-size: 2.4rem;
      }
    }
    .logo {
      height: 50px;
    }
  }
`;
export default Wrapper;
