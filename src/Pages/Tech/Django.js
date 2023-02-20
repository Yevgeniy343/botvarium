import React from "react";
import Wrapper from "./wr-tech-irem";
import TechNav from "../../Components/Tech/TechNav";
import NavBar from "../../Components/Navigation/Navbar";
import SideBar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import IconDjango from "../../Components/Tech/SvgDjango";
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
            <IconDjango />
          </div>
          <div className="content">
            <div className="about">
              <p className="header">Django</p>
              <p className="text">
                Django — это высокоуровневый Python веб-фреймворк, который
                позволяет быстро создавать безопасные и поддерживаемые
                веб-сайты. Созданный опытными разработчиками, Django берёт на
                себя большую часть хлопот веб-разработки, поэтому вы можете
                сосредоточиться на написании своего веб-приложения без
                необходимости изобретать велосипед. Он бесплатный и с открытым
                исходным кодом, имеет растущее и активное сообщество, отличную
                документацию.
              </p>
            </div>
            <div className="where">
              <p className="header">Как работает</p>
              <p className="text">
                Архитектура Django похожа на «Модель-Представление-Контроллер»
                (MVC). Контроллер классической модели MVC примерно соответствует
                уровню, который в Django называется Представление (View), а
                презентационная логика Представления реализуется в Django
                уровнем Шаблонов (Templates). Из-за этого уровневую архитектуру
                Django часто называют «Модель-Шаблон-Представление» (MTV).
              </p>
              <p className="text">
                Первоначально разработка Django велась для обеспечения более
                удобной работы с новостными ресурсами, что достаточно сильно
                отразилось на архитектуре: фреймворк предоставляет ряд средств,
                которые помогают в быстрой разработке веб-сайтов информационного
                характера. Например, разработчику не требуется создавать
                контроллеры и страницы для административной части сайта, в
                Django есть встроенное приложение для управления содержимым,
                которое можно включить в любой сайт, сделанный на Django, и
                которое может управлять сразу несколькими сайтами на одном
                сервере. Административное приложение позволяет создавать,
                изменять и удалять любые объекты наполнения сайта, протоколируя
                все совершённые действия, и предоставляет интерфейс для
                управления пользователями и группами (с пообъектным назначением
                прав).
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <div className="stats">
              <p className="header">Где приминяется</p>
              <p className="text">
                Веб-фреймворк Django используется в сайтах Instagram, Disqus,
              </p>
            </div>
            {/* <Code codeString={codeString} language="json" /> */}

            <div className="extra">
              <p className="header">История</p>
              <p className="text">
                Django был разработан в период с 2003 по 2005 год командой,
                которая занималась созданием и обслуживанием газетных
                веб-сайтов. После создания нескольких сайтов, команда начала
                повторно использовать множество общего кода и шаблонов
                проектирования. Этот общий код эволюционировал в веб-фреймворк,
                который превратился в проект "Django" с открытым исходным кодом
                в июле 2005 года.
              </p>
              <p className="text">
                Django продолжает расти и улучшаться с момента его первого
                релиза (1.0) в сентябре 2008 года до недавно выпущенной версии
                3.1 (2020). В каждой версии добавлены новые функциональные
                возможности и исправлены ошибки, начиная от поддержки новых
                типов баз данных, шаблонизаторов и кеширования, до добавления
                «общих» функций просмотра и классов (уменьшающих объём кода,
                который разработчики должны писать для ряда программных задач).
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Mongo;
