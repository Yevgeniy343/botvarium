import Wrapper from "./wr-WebApp";
import img from "../../assets/imgs/undraw_Web_devices_re_m8sc.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const WebApp = () => {
  const [text] = useTypewriter({
    words: [
      "Веб-приложения можно разделить на несколько типов,в зависимости от разных сочетаний его основных составляющих ",
    ],
    loop: {},
    typeSpeed: 100,
  });
  return (
    <Wrapper>
      <div className="content">
        <div className="codeEditor">
          <span>{text}</span>
          {/* <Cursor cursorColor="b45af2" /> */}
        </div>
        <div className="image">
          <img src={img} alt="web" />
        </div>
      </div>
    </Wrapper>
  );
};

export default WebApp;
