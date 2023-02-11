import Wrapper from "./wr-WebAppPage";
import Navbar from "../../Components/Navigation/Navbar";
import Sidebar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { closeSubmenu } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const leftVariants1 = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};
const rightVariants1 = {
  hidden: { x: 1500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2.5 },
  },
};
const leftVariants2 = {
  hidden: { y: -150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 1.5 },
  },
};
const rightVariants2 = {
  hidden: { y: -150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 2 },
  },
};
const leftVariants3 = {
  hidden: { y: -250, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 2.5 },
  },
};
const rightVariants3 = {
  hidden: { y: -250, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 3 },
  },
};
const leftVariants4 = {
  hidden: { y: -350, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 3 },
  },
};
const rightVariants4 = {
  hidden: { y: -350, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 3.5 },
  },
};

const MessengerPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const image1 =
    "https://media.istockphoto.com/id/1221468639/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=Y556Rao4a4bnaBx_EX1ZGGseGwLeIzzJJA52qj0I4dc=";
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <SubMenu />

      <Parallax
        className="huge-parallax"
        bgImage={image1}
        strength={450}
        blur={{ min: -1, max: 3 }}
      >
        <div
          className="content"
          onMouseOver={() => {
            dispatch(closeSubmenu());
          }}
        >
          <div className="header">
            <p>Мессенджер</p>
          </div>
          <div className="about">
            <p>
              Cтремительно развивается популярность приложений для обмена
              сообщениями. Пользователи предпочитают мессенджеры, потому что они
              позволяют взаимодействовать в режиме реального времени. Мы
              занимаемся разработкой мессенджеров, которые можно использовать
              внутри своей компании, для взаимодействия с коллегами и клиентами.
            </p>
          </div>
        </div>
      </Parallax>

      <div className="line">
        <motion.div
          className="left"
          variants={leftVariants1}
          initial="hidden"
          animate="visible"
        >
          <span>Типовой вариант мессенджера</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants1}
          initial="hidden"
          animate="visible"
        >
          <p>
            WEB Messenger - типовой вариант веб мессенджера, который может быть
            полностью изменен, как по стилям так и добавлен и доработан любой
            функционал, логика и интеграция. Тестовый вариант доступен по
            ссылке:
            <span
              className="blank"
              onClick={() => window.open("http://botvarium.site", "_blank")}
            >
              http://botvarium.site
            </span>
          </p>
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          className="left"
          variants={leftVariants2}
          initial="hidden"
          animate="visible"
        >
          <span>Возможности</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants2}
          initial="hidden"
          animate="visible"
        >
          <p>
            Приложение дает возможность отправлять сообщения и изображения в
            реальном времени с другим зарегистрированным пользователям. Вся
            загружаемая и отправляемая информация интегрирована с базой данных.
          </p>
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          className="left"
          variants={leftVariants3}
          initial="hidden"
          animate="visible"
        >
          <span>Адаптивность</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants3}
          initial="hidden"
          animate="visible"
        >
          <p>
            Мессенджер может быть адаптирован на любое устройство под любой
            операционной системой, при использовании технологии
            <span className="blank" onClick={() => navigate("/pwa-app")}>
              {" "}
              PWA (Progressive Web-App){" "}
            </span>
          </p>
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          className="left"
          variants={leftVariants4}
          initial="hidden"
          animate="visible"
        >
          <span>idea 4</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants4}
          initial="hidden"
          animate="visible"
        >
          <p>
            Данные пользователей находятся в зашифрованном виде. Дополнительной
            защитой является разрыв сессии через определенное время. Возможно
            добавление двухфакторной аутентификации и дополнительных мер
            безопасности
          </p>
        </motion.div>
      </div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="content"></div>
    </Wrapper>
  );
};

export default MessengerPage;
