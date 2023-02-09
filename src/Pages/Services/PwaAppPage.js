import Wrapper from "./wr-WebAppPage";
import Navbar from "../../Components/Navigation/Navbar";
import Sidebar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { closeSubmenu } from "../../features/userSlice";
import { useDispatch } from "react-redux";

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

const WebAppPage = () => {
  const dispatch = useDispatch();

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
            <p>Pwa-приложение</p>
          </div>
          <div className="about">
            <p>
              Прогрессивное web-приложение ( progressive web app, PWA) —
              технология в web-разработке, которая визуально и функционально
              трансформирует сайт в приложение. PWA является гибридным решением
              и позволяет открыть приложение с помощью мобильного браузера. При
              этом полностью сохраняется функциональность нативного приложения.
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
          <span>преимущества pwa-приложения</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants1}
          initial="hidden"
          animate="visible"
        >
          <p>- работа в режиме офлайн;</p>
          <p>- отправка push-уведомлений;</p>
          <p>- доступ к аппаратному обеспечению устройства;</p>
          <p>
            - установка иконки на рабочий стол мобильного устройства, визуально
            не отличающегося от иконки нативного приложения;
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
          <span>преимущества PWA</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants2}
          initial="hidden"
          animate="visible"
        >
          <p>
            Разделение в веб-приложениях backend и frontend - одно из
            стандартных решений арзитектура построения приложения. Как правило,
            бэкенд реализует функции, используемые фронтендом.
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
          <span>frontend + backend с привязкой к базе данных</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants3}
          initial="hidden"
          animate="visible"
        >
          <p>
            Более сложные web-приложения используют базы данных, которые
            позволяют хранить в зашифрованном виде данные пользователей,
            вносимую пользователями информацию и дополнительные двнные, делающие
            веб-приложение более умным и адаативным.
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
          <span>Этапы разраблтки и стоимость</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants4}
          initial="hidden"
          animate="visible"
        >
          описание
        </motion.div>
      </div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="content"></div>
    </Wrapper>
  );
};

export default WebAppPage;
