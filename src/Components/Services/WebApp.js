import Wrapper from "./wr-WebApp";
import img from "../../assets/imgs/undraw_Web_devices_re_m8sc.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";

const WebApp = () => {
  const refCodeEditor = useRef();

  const [text] = useTypewriter({
    words: [
      "Веб-приложения сейчас используются ежедневно, и уже являются обязательным атрибутом любой компании и бизнеса. Они делают любое общение с клиентом интерактивным и уведичивают монетизацию любого бизнесс-процесса многократно. ",
    ],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 1,
  });
  return (
    <Wrapper>
      <div className="content">
        <div className="codeEditor" ref={refCodeEditor}>
          <span>{text}</span>
        </div>
        <div className="div">
          <button className="btn">Узнать подробнее</button>
        </div>

        <div className="image">
          <img src={img} alt="web" />
        </div>
      </div>
    </Wrapper>
  );
};

export default WebApp;
