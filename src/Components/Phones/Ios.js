import vid from "../../assets/Screen Recording 2023-02-22 at 17.35.25 (online-video-cutter.com).mp4";
import styled from "styled-components";
import iphone from "../../assets/[CITYPNG.COM]iPhone 14 Pro Max Mockup HD PNG - 2130x2412.png";

const Wrapper = styled.main`
  display: flex;
  /* height: 90vh; */
  justify-content: center;
  align-items: center;
  video {
    width: 230px;
    object-fit: cover;
    border-radius: 30px;
  }

  img {
    position: absolute;
    width: 480px;
  }
`;

const Ios = () => {
  return (
    <Wrapper>
      <img src={iphone} alt="iphone" />
      <video src={vid} autoPlay loop muted />
    </Wrapper>
  );
};

export default Ios;
