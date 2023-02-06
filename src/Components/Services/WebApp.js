import Wrapper from "./wr-WebApp";
import img from "../../assets/imgs/undraw_Web_devices_re_m8sc.png";
import { Typewriter } from "react-simple-typewriter";

const WebApp = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="codeEditor">
          <p>Лапутька</p>
          <Typewriter
            words={["Жопчик", "Пельмешка", "Лапатутька"]}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            loop
          />
        </div>
        <div className="image">
          <img src={img} alt="web" />
        </div>
      </div>
    </Wrapper>
  );
};

export default WebApp;
