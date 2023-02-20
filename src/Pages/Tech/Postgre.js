import React from "react";
import Wrapper from "./wr-tech-irem";
import TechNav from "../../Components/Tech/TechNav";
import NavBar from "../../Components/Navigation/Navbar";
import SideBar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import IconPostgre from "../../Components/Tech/SvgPostgreSql";
import Code from "../../Components/Tech/SvgPostgreSql";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";

const Postgre = () => {
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
            <IconPostgre />
          </div>
          <div className="content">
            <div className="about">
              <p className="header">PostgreSQL</p>
              <p className="text">
                PostgreSQL — это объектно-реляционная система управления базами
                данных (ОРСУБД, ORDBMS), основанная на POSTGRES, Version 4.2 —
                программе, разработанной на факультете компьютерных наук
                Калифорнийского университета в Беркли. В POSTGRES появилось
                множество новшеств, которые были реализованы в некоторых
                коммерческих СУБД гораздо позднее.
              </p>
            </div>
            <div className="where">
              <p className="header">Преимущества</p>
              <p className="text">
                PostgreSQL имеет несколько основных преимуществ, которые делают
                его очень привлекательным для пользователей: от сообщества
                разработчиков с открытым исходным кодом до его надежности.
                Благодаря лицензии с открытым исходным кодом, исходный код
                PostgreSQL доступен бесплатно. Благодаря этому вы можете
                использовать, изменять и применять его так, как это необходимо
                вашей компании. Вам также не потребуется много инструкций, чтобы
                понять PostgresSQL, потому что он прост в использовании. Базу
                данных легко поддерживать и администрировать как для
                комплексного, так и для корпоративного использования.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <div className="stats">
              <p className="header">Где приминяется</p>
              <p className="text">
                Несколько популярных брендов и компаний используют PostgreSQL в
                качестве части своего бэкенда. Среди них такие имена, как
                Netflix, Uber, Instagram и другие. Поскольку это база данных,
                она позволяет пользователям хранить различные виды данных. Он
                особенно популярен, поскольку позволяет хранить большие объемы
                сложных данных. PostgreSQL имеет несколько программных
                приложений, которые его используют. К ним относятся следующие:
              </p>
              <p className="text">
                <span>Финансовый сектор. </span>
                PostgreSQL PostgreSQL - это отличный DBMS для финансового
                сектора. Как мы уже говорили, она полностью соответствует
                стандарту ACID, что делает ее лучшим вариантом для обработки
                транзакций в режиме онлайн или OLTP. Кроме того, она может
                проводить анализ баз данных, и к ней можно подключать
                математические программы, такие как Matlab и R.
              </p>
              <p className="text">
                <span>Производство. </span>
                Промышленные компании в настоящее время используют PostgreSQL
                для оптимизации всего рабочего процесса. Использование этой базы
                данных с открытым исходным кодом в качестве базы данных помогает
                им еще больше оптимизировать эффективность цепочки поставок. Это
                позволяет предприятиям снизить свои операционные расходы.
              </p>
              <p className="text">
                <span>Научная информация. </span>
                Когда вы занимаетесь академической или научной деятельностью,
                вам придется производить терабайты информации. Следовательно,
                крайне важно управлять этими данными наиболее эффективным
                образом. Фантастические аналитические возможности PostgreSQL и
                мощный SQL-движок идеально подходят для этого. База данных
                облегчает работу с большим объемом данных.
              </p>
              <p className="text">
                <span>Разработка веб-сайтов и NoSQL. </span>
                Масштабирование, несомненно, является серьезной проблемой, если
                ваш сайт должен обрабатывать большое количество запросов каждую
                секунду. Лучшим вариантом в этом случае является PostgreSQL. Эта
                база данных работает со всеми современными веб-фреймворками,
                включая Django, Node.js, PHP, Hibernate и другие. Кроме того,
                она обладает функциями репликации, что позволяет расширить
                количество систем управления базами данных.
              </p>
              <p className="text">
                <span>
                  Хранение данные государственной географической информационной
                  системы (GIS){" "}
                </span>
                Надежный GIS, предоставляемый PostgreSQL, известен как PostGIS.
                В этот модуль включены многочисленные функции для работы с
                геометрическими данными в различных формах. PostGIS
                придерживается многих стандартов SQL. Кроме того, сообщество
                Open Source предлагает самый простой способ управления Geodata,
                используя как QGIS, так и GeoServer.
              </p>
              <p className="text"></p>
            </div>
            {/* <Code codeString={codeString} language="json" /> */}

            <div className="extra">
              <p className="header">История</p>
              <p className="text">
                В Калифорнийском университете Беркли профессор Майкл
                Стоунбрейкер руководил началом программы PostgreSQL в 1986 году.
                Первоначальное название проекта, POSTGRES, было кивком в сторону
                более ранней базы данных Ingres, созданной в Беркли в 1977 году.
                POSTGRES, которая сегодня является одной из самых известных баз
                данных с открытым исходным кодом, стремится включить минимальные
                функциональные возможности, необходимые для полноценного
                обслуживания различных типов данных. Она стремится облегчить
                использование многих типов данных.
              </p>
              <p className="text">
                Несмотря на то, что PostgreSQL до сих пор часто называют
                Postgres, в 1996 году проект был переименован в PostgreSQL,
                чтобы подчеркнуть его совместимость с языком запросов SQL.
                Свободные базы данных с открытым исходным кодом продолжают
                периодически получать значительные и незначительные обновления
                от преданного и многокультурного сообщества разработчиков,
                известного как PostgreSQL Global Development Group. Версии с 7.2
                по 8.2 PostgreSQL предоставили такие возможности, как
                неблокируемость и поддержка схем.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Postgre;
