import Wrapper from "./wr-MpLine3";
import IconNode from "../Tech/SvgNode";
import IconDocker from "../Tech/SvgDocker";
import IconMongo from "../Tech/SvgMongo";
import IconRedis from "../Tech/SvgRedis";
import IconPostgree from "../Tech/SvgPostgreSql";
import IconCss from "../Tech/SvgCss";
import IconReact from "../Tech/SvgReact";
import IconAngular from "../Tech/SvgAngular";
import IconNext from "../Tech/SvgNext";
import IconDjango from "../Tech/SvgDjango";
import { useNavigate } from "react-router-dom";

const MpLine3 = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="header">
        <p>Технологии</p>
      </div>

      <div className="tech-list">
        <div
          className="tech-item"
          onClick={() => navigate("/technology/nodejs")}
        >
          <IconNode />
        </div>
        <div
          className="tech-item"
          onClick={() => navigate("/technology/docker")}
        >
          <IconDocker />
        </div>
        <div
          className="tech-item"
          onClick={() => navigate("/technology/mongodb")}
        >
          <IconMongo />
        </div>
        <div
          className="tech-item"
          onClick={() => navigate("/technology/redis")}
        >
          <IconRedis />
        </div>
        <div
          className="tech-item"
          onClick={() => navigate("/technology/postgresql")}
        >
          <IconPostgree />
        </div>
        <div className="tech-item" onClick={() => navigate("/technology/css")}>
          <IconCss />
        </div>
        <div
          className="tech-item"
          onClick={() => navigate("/technology/react")}
        >
          <IconReact />
        </div>
        <div
          className="tech-item"
          onClick={() => navigate("/technology/angular")}
        >
          <IconAngular />
        </div>
        <div
          className="tech-item"
          onClick={() => navigate("/technology/nextjs")}
        >
          <IconNext />
        </div>
        <div
          className="tech-item"
          onClick={() => navigate("/technology/django")}
        >
          <IconDjango />
        </div>
      </div>
    </Wrapper>
  );
};

export default MpLine3;
