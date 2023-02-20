import React from "react";
import Wrapper from "./wr-tech-irem";
import TechNav from "../../Components/Tech/TechNav";
import NavBar from "../../Components/Navigation/Navbar";
import SideBar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import IconNextjs from "../../Components/Tech/SvgNext";
import Code from "../../Components/Tech/Code";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";

const Next = () => {
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
            <IconNextjs />
          </div>
          <div className="content">
            <div className="about">
              <p className="header">Next.js</p>
              <p className="text">
                Next.js - это фреймворк, основанный на React, который позволяет
                создавать веб-приложения с улучшенной производительностью и
                улучшенным пользовательским опытом с помощью дополнительных
                функций предварительного рендеринга, таких как полноценный
                рендеринг на стороне сервера (SSR) и статическая генерация
                страниц (SSG).
              </p>
            </div>
            <div className="where">
              <p className="header">Применение</p>
              <p className="text">
                Next.js лучше всего подходит, когда необходимо создать
                оптимизированный лендинг или домашнюю страницу, а также любые
                другие страницы, которые полагаются на органический поисковый
                трафик. Эти страницы получат наибольшую выгоду от встроенных
                функций Next.js.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <div className="stats">
              <p className="header">История</p>
              <p className="text">
                Был создан 25 октября 2016 года компанией Vercel.
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

export default Next;
