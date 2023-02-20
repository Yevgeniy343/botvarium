import React from "react";
import Wrapper from "./wr-tech-irem";
import TechNav from "../../Components/Tech/TechNav";
import NavBar from "../../Components/Navigation/Navbar";
import SideBar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import IconCss from "../../Components/Tech/SvgCss";
import Code from "../../Components/Tech/Code";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";

const Css = () => {
  const dispatch = useDispatch();

  const codeString = `
  import React from "react";
  import ReactDOM from "react-dom/client";
  import "./index.css";
  import App from "./App";
  import { Provider } from "react-redux";
  import { store } from "./features/store";
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
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
            <IconCss />
          </div>
          <div className="content">
            <div className="about">
              <p className="header">CSS</p>
              <p className="text">
                CSS используется создателями веб-страниц для задания цветов,
                шрифтов, стилей, расположения отдельных блоков и других аспектов
                представления внешнего вида этих веб-страниц. Основной целью
                разработки CSS является ограждение и отделение описания
                логической структуры веб-страницы (которое производится с
                помощью HTML или других языков разметки) от описания внешнего
                вида этой веб-страницы (которое теперь производится с помощью
                формального языка CSS). Такое разделение может увеличить
                доступность документа, предоставить большую гибкость и
                возможность управления его представлением, а также уменьшить
                сложность и повторяемость в структурном содержимом.
              </p>
            </div>
            {/* <div className="where">
              <p className="header"></p>
              <p className="text"></p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <div className="stats">
              <p className="header"></p>
              <p className="text"></p>
            </div> */}
            {/* <Code codeString={codeString} language={"jsx"} /> */}

            <div className="extra">
              <p className="header">История</p>
              <p className="text">
                Необходимость разработки CSS была признана консорциумом W3C в
                1990-х годах. В 1996 году был принят стандарт CSS1, позволяющий
                изменять параметры шрифта, цвет, атрибуты текста, выравнивания и
                отступы. В 1998 году состоялся выход CSS2, добавивший
                возможности использования блочной верстки, звуковых таблиц,
                генерируемого содержания, указателей, страничных носителей.
                Версия CSS3 заметно увеличила возможности стилей: стало
                доступным создание анимированных элементов без использования
                JavaScript, появилась поддержка сглаживания, теней, градиентов и
                т. д. Спецификация была разделена на модули, каждый из которых
                стал развиваться обособленно. С 2011 года ведется разработка
                модулей CSS4. Возможности пока описаны в черновых вариантах.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Css;
