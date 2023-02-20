import React from "react";
import Wrapper from "./wr-tech-irem";
import TechNav from "../../Components/Tech/TechNav";
import NavBar from "../../Components/Navigation/Navbar";
import SideBar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import IconRedis from "../../Components/Tech/SvgRedis";
import Code from "../../Components/Tech/Code";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";

const Mongo = () => {
  const dispatch = useDispatch();

  const codeString = `
  const UserSchema = new mongoose.Schema(
    {
      name: { type: String, required: [true, "Please provide name"], trim: true },
      email: {
        type: String,
        required: [true, "Please provide email"],
        validate: {
          validator: validator.isEmail,
          message: "Please provide a valid email",
        },
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: [true, "Please provide password"],
        trim: true,
      },
    },
    { timestamps: true }
  );
    `;
  return (
    <div>
      <NavBar />
      <SideBar />
      <SubMenu />
      <Wrapper>
        <div
          className="nav"
          onMouseOver={() => {
            dispatch(closeSubmenu());
          }}
        >
          <TechNav />
        </div>
        <div
          className="page"
          onMouseOver={() => {
            dispatch(closeSubmenu());
          }}
        >
          <div className="icon">
            <IconRedis />
          </div>
          <div className="content">
            <div className="about">
              <p className="header">Reedis</p>
              <p className="text">
                Redis (расшифровывается как Remote Dictionary Server) – это
                быстрое хранилище данных типа «ключ‑значение» в памяти с
                открытым исходным кодом. Проект возник, когда Сальваторе
                Санфилиппо, первоначальный разработчик Redis, захотел улучшить
                масштабируемость стартапа в Италии. Он создал хранилище Redis,
                которое теперь используется в качестве базы данных, кэша,
                брокера сообщений и очереди.
              </p>
            </div>
            <div className="where">
              <p className="header">Как работает</p>
              <p className="text">
                Redis обеспечивает время отклика на уровне долей миллисекунды и
                позволяет приложениям, работающим в режиме реального времени,
                выполнять миллионы запросов в секунду. Такие приложения
                востребованы в сферах игр, рекламных технологий, финансовых
                сервисов, здравоохранения и IoT.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <div className="stats">
              <p className="header">Где приминяется</p>
              <p className="text">
                Благодаря быстрой производительности Redis широко применяется
                для кэширования, управления сеансами, разработки игр, создания
                таблиц лидеров, аналитики в режиме реального времени, работы с
                геопространственными данными, поддержки служб такси, чатов и
                сервисов обмена сообщениями, потоковой передачи мультимедиа и
                приложений с отправкой сообщений по модели «издатель –
                подписчик» (Pub/Sub).
              </p>
            </div>
            {/* <Code codeString={codeString} language="json" /> */}

            <div className="extra">
              <p className="header">История</p>
              <p className="text">
                В период 2010—2013 годов разработка системы спонсировалась
                компанией VMware, с мая 2013 года, после реорганизаций в
                федерации EMC — VMware, проект передан в Pivotal. С июня 2015
                года основной спонсор проекта — компания Redis Labs, специально
                основанная для коммерциализации Redis.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Mongo;
