import React from "react";
import Wrapper from "./wr-tech-irem";
import TechNav from "../../Components/Tech/TechNav";
import NavBar from "../../Components/Navigation/Navbar";
import SideBar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import IconMongo from "../../Components/Tech/SvgMongo";
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
            <IconMongo />
          </div>
          <div className="content">
            <div className="about">
              <p className="header">MongoDB</p>
              <p className="text">
                MongoDB — система управления базами данных, которая работает с
                документоориентированной моделью данных. В отличие от
                реляционных СУБД, MongoDB не требуются таблицы, схемы или
                отдельный язык запросов. Информация хранится в виде документов
                либо коллекций.
              </p>
            </div>
            <div className="where">
              <p className="header">Как работает</p>
              <p className="text">
                Система очень легко масштабируется, сигиентирование объектов
                происходит по различным узлам кластера. Администратор выбирает
                ключ сегментирования, который определяет, по какому критерию
                данные будут разнесены по узлам. Благодаря тому, что каждый узел
                кластера может принимать запросы, обеспечивается балансировка
                нагрузки.
                <p>Ниже представлен код ссоздания сервера на Node.js:</p>
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <div className="stats">
              <p className="header">Где приминяется</p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - регистрация и хранение информации о событиях;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - системы управления документами и контентом;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - электронная коммерция;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - игры;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - данные мониторинга, датчиков;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - веб и мобильные приложения.
              </p>
              <p className="text">
                {" "}
                Ниже представлен пример схемы пользователя созданного при момощи
                библиотеку mongoose:
              </p>
            </div>
            <Code codeString={codeString} language="json" />

            <div className="extra">
              <p className="header">История</p>
              <p className="text">
                Компания 10gen начала разработку MongoDB в 2007 году как
                компонент планируемой платформы в качестве сервисного продукта.
                В 2009 году компания перешла на модель разработки продуктов с
                открытым исходным кодом, предлагая коммерческую поддержку и
                другие услуги. 27 августа 2013 года 10gen изменила свое название
                на MongoDB, Inc. 20 октября 2017 года MongoDB стала публичной
                компанией, зарегистрированной на NASDAQ.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Mongo;
