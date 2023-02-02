import styled from "styled-components";

const Wrapper = styled.main`
  margin: 0 1rem;
  padding: 4rem;

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
      font-size: 1.5rem;
      color: var(--clr-grey-3);
    }
  }
  @media (min-width: 720px) {
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
