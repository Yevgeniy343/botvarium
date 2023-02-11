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

const PwaAppPage = () => {
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
          <span>преимущества pwa-приложения над web-приложением</span>
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
          <span>еще немного о преимуществах PWA</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants2}
          initial="hidden"
          animate="visible"
        >
          <p>
            - обновления добавляются разработчиками удалённо. Пользователи видят
            изменения и улучшения, но им не требуется скачивать эти обновления
            самостоятельно;
          </p>
          <p>
            - PWA можно установить без «Google play» и App Store, а также
            вопреки запрету устанавливать приложения из неизвестных источников;
          </p>
          <p>
            - PWA можно добавлять в App Store и Google Play, давая пользователю
            возможность скачать приложение из привычного источника
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
          <span>Доступно все без подключения к интернет</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants3}
          initial="hidden"
          animate="visible"
        >
          <p>
            Практически любой бизнес использует qr коды, но не заботятся о том,
            что клиент не может показать qr-код по причине просто напросто
            отсутствия интернела либо п причине удаленности бизнеса либо
            отсутствием на устрройстве клиента. PWA решает данную задачу и
            аналогичные, так как все подобные данные синхронизируются в фоновом
            режиме и подтягиваются в приложение с устройства пользователя.{" "}
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
          <span>Сроки разработки и стоимость</span>
        </motion.div>
        <motion.div
          className="right"
          variants={rightVariants4}
          initial="hidden"
          animate="visible"
        >
          <p>
            Как и любое приложение, не может быть сощдано мнговенно, будет
            занимать какое-то время. Все зависит от количества функции, которые
            оно выполняет. Как правило, реализациия в среднем 5-ти функций может
            заанять неделю, но большее количество функций и задач, выполняемых
            приложением сроки увеличит.
          </p>
        </motion.div>
      </div>
      <div className="content"></div>
      <div className="content"></div>
      <div className="content"></div>
    </Wrapper>
  );
};

export default PwaAppPage;
