import Wrapper from "./wr-WebAppPage";
import Navbar from "../../Components/Navigation/Navbar";
import Sidebar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const leftVariants = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};

const WebAppPage = () => {
  const image1 =
    "https://media.istockphoto.com/id/1221468639/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=Y556Rao4a4bnaBx_EX1ZGGseGwLeIzzJJA52qj0I4dc=";
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <SubMenu />

      <Parallax bgImage={image1} strength={450} blur={{ min: -1, max: 3 }}>
        <div className="content">
          <div className="header">
            <p>Веб-приложения</p>
          </div>
          <div className="about">
            <p>
              Веб-приложение — клиент-серверное приложение, в котором клиент
              взаимодействует с веб-сервером при помощи браузера. Логика
              веб-приложения распределена между сервером и клиентом, хранение
              данных осуществляется, преимущественно, на сервере, обмен
              информацией происходит по сети. Одним из преимуществ такого
              подхода является тот факт, что клиенты не зависят от конкретной
              операционной системы пользователя, поэтому веб-приложения являются
              межплатформенными службами.
            </p>
          </div>
        </div>
      </Parallax>

      <div className="line">
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          className="left"
        >
          frontend приложение
        </motion.div>
        <div className="right">описание</div>
      </div>
      <div className="line">
        <div className="left">frontend + backend приложение</div>
        <div className="right">описание</div>
      </div>
      <div className="line">
        <div className="left">frontend + backend с привязкой к базе данных</div>
        <div className="right">описание</div>
      </div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="content"></div>
    </Wrapper>
  );
};

export default WebAppPage;
