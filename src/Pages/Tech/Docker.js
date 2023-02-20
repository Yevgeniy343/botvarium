import React from "react";
import Wrapper from "./wr-tech-irem";
import TechNav from "../../Components/Tech/TechNav";
import NavBar from "../../Components/Navigation/Navbar";
import SideBar from "../../Components/Navigation/Sidebar";
import SubMenu from "../../Components/Navigation/SubMenu";
import IconDocker from "../../Components/Tech/SvgDocker";
import Code from "../../Components/Tech/Code";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";

const Node = () => {
  const dispatch = useDispatch();

  const codeString = `
  FROM node:16-alpine as builder

  WORKDIR /app
  
  COPY package.json ./
  
  RUN npm install
  
  COPY . .
  
  RUN npm run build
  
  FROM  nginx
  
  EXPOSE 80
  
  COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
  
  COPY --from=builder /app/build /usr/share/nginx/html
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
            <IconDocker />
          </div>
          <div className="content">
            <div className="about">
              <p className="header">Docker</p>
              <p className="text">
                Docker – это программная платформа для быстрой разработки,
                тестирования и развертывания приложений. Docker упаковывает ПО в
                стандартизованные блоки, которые называются контейнерами. Каждый
                контейнер включает все необходимое для работы приложения:
                библиотеки, системные инструменты, код и среду исполнения.
                Благодаря Docker можно быстро развертывать и масштабировать
                приложения в любой среде и сохранять уверенность в том, что код
                будет работать.
              </p>
            </div>
            <div className="where">
              <p className="header">Применение</p>
              <p className="text">
                Использование Docker позволяет быстрее и эффективнее доставлять
                или перемещать код, стандартизирует выполняемые приложениями
                операции и в целом экономит средства, оптимизируя использование
                ресурсов. Благодаря Docker пользователи получают объект, который
                с высокой надежностью можно запускать на любой платформе.
                Простой и понятный синтаксис Docker обеспечивает полный контроль
                над выполняемыми операциями. Повсеместное внедрение контейнеров
                подразумевает доступ к разнообразным инструментам и готовым
                приложениям, которые можно использовать с Docker.
              </p>
              <p className="text">
                Ниже представлен пример Dockerfile, в котором прописаны команды
                по созданию образа приложения Node.js на сервере Nginx:{" "}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
            <Code codeString={codeString} language="dockerfile" />
            <div className="stats">
              <p className="header">Разница с виртуальной машиной</p>
              <p className="text">
                Виртуальные машины (VM) создают виртуальное представление
                аппаратного обеспечения сервера (то есть устраняют необходимость
                непосредственно управлять таковым), а контейнеры создают
                виртуальное представление серверной операционной системы. Docker
                является операционной системой (или исполняемой средой) для
                контейнеров. Программное ядро Docker устанавливается на каждый
                сервер, на котором предполагается запускать контейнеры, и
                предоставляет набор простых команд, которые можно использовать
                для сборки, запуска и остановки контейнеров.
              </p>
            </div>
            <div className="extra">
              <p className="header">История появления</p>
              <p className="text">
                Проект Docker начат как внутренняя собственническая разработка
                компании dotCloud, основанной Соломоном Хайксом (Solomon Hykes)
                в 2008 году. В марте 2013 года код Docker был опубликован под
                лицензией Apache 2.0. В декабре 2013 года объявлено о поддержке
                развёртывания Docker-контейнеров в среде Google Compute Engine
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Node;
