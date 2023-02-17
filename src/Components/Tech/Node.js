import Wrapper from "./wr-tech-irem";
import IconNode from "../Tech/SvgNode";
import IconDocker from "../Tech/SvgDocker";
import IconMongo from "../Tech/SvgMongo";
import IconRedis from "../Tech/SvgRedis";
import IconPostgree from "../Tech/SvgPostgreSql";
import IconCss from "../Tech/SvgCss";
import IconReact from "../Tech/SvgReact";
import IconAngular from "../Tech/SvgAngular";
import IconNext from "../Tech/SvgNext";
import IconDjango from "../Tech/SvgDjango";
import { motion } from "framer-motion";
import Code from "./Code";

const Node = () => {
  return (
    <Wrapper>
      <div className="icon">
        <IconNode />
      </div>
      <div className="content">
        <div className="about">
          <p className="header">about</p>
          <p className="text">
            Node.js (Node) — это платформа с открытым исходным кодом для работы
            с языком JavaScript, построенная на движке V8. Она позволяет писать
            серверный код для веб-приложений и динамических веб-страниц. Node.js
            добавляет возможность JavaScript взаимодействовать с устройствами
            ввода-вывода, подключать другие внешние библиотеки, написанные на
            разных языках.
          </p>
        </div>
        <div className="where">
          <p className="header">where</p>
          <p className="text">
            Node.js применяется преимущественно на сервере, выполняя роль
            веб-сервера, но есть возможность разрабатывать и десктопные оконные
            приложения и программировать микроконтроллеры. На Node.js можно
            создавать программы для веб, Linux, OS X и Windows
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <Code />
        <div className="stats">
          <p className="header">stats</p>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            nisi commodi error velit aut. Ut quibusdam eligendi qui fugiat
            laudantium maxime eius. Quia ipsam ea aspernatur quis omnis
            nesciunt? Repellendus.
          </p>
        </div>
        <div className="extra">
          <p className="header">extra</p>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            nisi commodi error velit aut. Ut quibusdam eligendi qui fugiat
            laudantium maxime eius. Quia ipsam ea aspernatur quis omnis
            nesciunt? Repellendus.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Node;
