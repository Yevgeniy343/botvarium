import React from "react";
import Wrapper from "./wr-tech-irem";
import TechNav from "../../Components/Tech/TechNav";
import NavBar from "../../Components/Navigation/Navbar";
import SideBar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import IconReact from "../../Components/Tech/SvgReact";
import Code from "../../Components/Tech/Code";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";

const Reactjs = () => {
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
            <IconReact />
          </div>
          <div className="content">
            <div className="about">
              <p className="header">React.js</p>
              <p className="text">
                React (иногда React.js или ReactJS) — JavaScript-библиотека с
                открытым исходным кодом для разработки пользовательских
                интерфейсов. React разрабатывается и поддерживается Facebook,
                Instagram и сообществом отдельных разработчиков и корпораций.
                React может использоваться для разработки одностраничных и
                мобильных приложений. Его цель — предоставить высокую скорость
                разработки, простоту и масштабируемость. В качестве библиотеки
                для разработки пользовательских интерфейсов React часто
                используется с другими библиотеками, такими как MobX, Redux и
                GraphQL.
              </p>
            </div>
            <div className="where">
              <p className="header">Как работает</p>
              <p className="text">
                С помощью React разработчики создают веб-приложения, которые
                изменяют отображение без перезагрузки страницы. Благодаря этому
                приложения быстро реагируют на действия пользователя, например,
                заполнение форм, применение фильтров, добавление товаров в
                корзину и так далее. React применяют для отрисовки компонентов
                пользовательского интерфейса. Также библиотека может полностью
                управлять фронтендом. В этом случае React используют с
                библиотеками для управления состоянием и роутинга, например,
                Redux и React Router.
                <p>Ниже представлен код ссоздания сервера на Node.js:</p>
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <div className="stats">
              <p className="header">Где приминяется</p>
              <p className="text">
                React используют для создания одностраничных и многостраничных
                приложений, разработки крупных сайтов. Например, с его помощью
                написан стриминговый сервис Netflix и реализованы новостные
                ленты крупнейших социальных сетей. Библиотека предназначена:
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - для создания функциональных интерактивных веб-интерфейсов,
                работая с которыми, не нужно постоянно обновлять страницу;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - быстрой и удобной реализации отдельных компонентов и страниц
                целиком — элементы в React легко использовать повторно;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - легкой разработки сложных программных структур — их просто
                описывать, если использовать реализованный в React подход;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - доработки новой функциональности с любым изначальным стеком
                технологий: библиотека не зависит от остального инструментария и
                будет хорошо работать, на чем бы ни был написан код;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - разработки одностраничных и многостраничных приложений (SPA и
                PWA). Это приложения, которые функционируют как программы и
                веб-сервисы и имеют соответствующий интерфейс;
              </p>
              <p
                className="text"
                style={{ paddingTop: "0", paddingBottom: "0" }}
              >
                - работы с серверной частью сайта или разработки мобильных
                приложений. В таких случаях React используют совместно с
                инструментами, адаптирующими веб-технологии под другие цели.
              </p>
              <p className="text">
                {" "}
                Ниже представлен пример индексной компоненты React:
              </p>
            </div>
            <Code codeString={codeString} language={"jsx"} />

            <div className="extra">
              <p className="header">Синтаксис JSX</p>
              <p className="text">
                JSX расшифровывается как JavaScript XML. Это расширение языка
                JavaScript, которое помогает описывать HTML-подобные элементы с
                помощью кода на React. С помощью синтаксиса на React создают
                компоненты страницы и гибко управляют ими. Несмотря на то что
                элементы похожи на HTML, это по-прежнему язык JavaScript с
                возможностью быстро и легко изменять DOM с помощью кода. И все
                же JSX воспроизводится как HTML: по сути разработчик описывает
                нужный компонент на языке разметки, а тот остается
                JavaScript-объектом с широкой функциональностью. Это удобно,
                упрощает программирование, но может запутать начинающих.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Reactjs;
