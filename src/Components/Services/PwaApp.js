import Wrapper from "./wr-WebApp";
import img from "../../assets/imgs/undraw_progressive_app_m9ms.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRef, useEffect } from "react";

const PwaApp = () => {
  const refCodeEditor = useRef();

  const [text] = useTypewriter({
    words: [
      "PWA или Progressive Web Application – технология, которая позволяет Вашим клиентам установить сайт на смартфон как приложение. Теперь не нужно разрабатывать отдельно сайт, приложение под iOS и приложение под Android. Достаточно иметь и поддерживать только сайт",
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

export default PwaApp;
