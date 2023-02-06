import Wrapper from "./wr-WebApp";
import img from "../../assets/imgs/undraw_Web_devices_re_m8sc.png";

const WebApp = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="codeEditor">123</div>
        <div className="image">
          <img src={img} alt="web" />
        </div>
      </div>
    </Wrapper>
  );
};

export default WebApp;
