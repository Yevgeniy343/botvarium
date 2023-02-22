import vid from "../../assets/Screen Recording 2023-02-22 at 16.22.23.mov";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  /* height: 90vh; */
  justify-content: center;
  align-items: center;
  video {
    width: 230px;
    object-fit: cover;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Android = () => {
  return (
    <Wrapper>
      {/* <div className="overlay"></div> */}
      <video src={vid} autoPlay loop muted />
    </Wrapper>
  );
};

export default Android;
