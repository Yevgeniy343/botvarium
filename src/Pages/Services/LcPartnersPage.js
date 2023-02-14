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

const LcPartnersPage = () => {
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
            <p>Личный кабинет партнеров</p>
          </div>
          <div className="about">
            <p>
              Личный кабинет партнероов позволяет автоматизировать
              бизнес-процессы, наладить взаимодействие с партнерами, получать и
              предоставлять своевременно информацию.
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
          <span>Для чего нужен личный кабинет партнеров на Вашем сайте</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants1}
          initial="hidden"
          animate="visible"
        >
          <p>
            У Вас склад? Магазин? Да либо просто представители Вашего бизнеса,
            которые Вам помогают его развивать и у Вас есть информация и данные,
            которыми Вы друг перед другом отчитыватесь. То это и есть личный
            кабинет партнеров, где можно все конфиденциально организовать.
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
          <span>Какие задачи помодет решить личный кабтнет партнеров</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants2}
          initial="hidden"
          animate="visible"
        >
          <p>- сводные отчеты;</p>
          <p>- партнерские начисления;</p>
          <p>- отчеты по выплатам;</p>
          <p>- выполнение плана и другая статистика;</p>
          <p>- да, Вам виднее, мы лишь разработаем то. что Вам нужно!</p>
        </motion.div>
      </div>
      <div className="line">
        <motion.div
          className="left"
          variants={leftVariants3}
          initial="hidden"
          animate="visible"
        >
          <span>Доступ и аутентификация к порталу</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants3}
          initial="hidden"
          animate="visible"
        >
          <p>
            Доступ может осуществляться как по двухфакторной аутентификации, так
            и по логину и паролю.
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
          <span>Сроки и стоимость</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants4}
          initial="hidden"
          animate="visible"
        >
          <p>
            Разработка и тестирование простого кабинета партнера с выполнением
            до 5-ти функций, со всеми ТЗ, может занять до месяца. Ну а сложные,
            многофункциональные порталы могут занять и больше времени.
          </p>
        </motion.div>
      </div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="content"></div>
    </Wrapper>
  );
};

export default LcPartnersPage;
