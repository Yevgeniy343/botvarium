import React from "react";
import Wrapper from "./wr-tech-irem";
import TechNav from "../../Components/Tech/TechNav";
import NavBar from "../../Components/Navigation/Navbar";
import SideBar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import IconAngular from "../../Components/Tech/SvgAngular";
import Code from "../../Components/Tech/Code";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";

const Angular = () => {
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
            <IconAngular />
          </div>
          <div className="content">
            <div className="about">
              <p className="header">Angular</p>
              <p className="text">
                Angular (версия 2 и выше) — открытая и свободная платформа для
                разработки веб-приложений, написанная на языке TypeScript,
                разрабатываемая командой из компании Google, а также сообществом
                разработчиков из различных компаний. Angular — полностью
                переписанный фреймворк от той же команды, которая написала
                AngularJS.
              </p>
            </div>
            <div className="where">
              <p className="header">Преимущества</p>
              <p className="text">
                Angular помогает привязывать компоненты приложения друг к другу,
                передавать данные, анимировать интерфейсы и пр. Для простых
                проектов его функциональность может быть избыточной, но для
                сложных SPA-приложений она незаменима.Разработчики Angular —
                сотрудники Google, а поддержка большой корпорации помогает
                фреймворку развиваться. При этом благодаря свободной лицензии и
                открытому исходному коду развивать его могут и сторонние
                разработчики.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <div className="stats">
              <p className="header">История</p>
              <p className="text">
                AngularJS разработан в 2009 году Мишко Хевери и Адамом Абронсом
                в Brat Tech LLC как программное обеспечение позади сервиса
                хранения JSON-данных, измеряющихся мегабайтами, для облегчения
                разработки корпоративных приложений. Сервис располагался на
                домене «GetAngular.com» и имел нескольких зарегистрированных
                пользователей, прежде чем они решили отказаться от идеи бизнеса
                и выпустить Angular как библиотеку с открытым исходным кодом.
              </p>
            </div>
            {/* <Code codeString={codeString} language="json" /> */}

            {/* <div className="extra">
              <p className="header"></p>
              <p className="text"></p>
            </div> */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Angular;
