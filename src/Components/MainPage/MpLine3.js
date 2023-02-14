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

const MpLine3 = () => {
  return (
    <Wrapper>
      <div className="header">
        <p>Технологии</p>
      </div>

      <div className="tech-list">
        <div className="tech-item">
          <IconNode />
        </div>
        <div className="tech-item">
          <IconDocker />
        </div>
        <div className="tech-item">
          <IconMongo />
        </div>
        <div className="tech-item">
          <IconRedis />
        </div>
        <div className="tech-item">
          <IconPostgree />
        </div>
        <div className="tech-item">
          <IconCss />
        </div>
        <div className="tech-item">
          <IconReact />
        </div>
        <div className="tech-item">
          <IconAngular />
        </div>
        <div className="tech-item">
          <IconNext />
        </div>
        <div className="tech-item">
          <IconDjango />
        </div>
      </div>
    </Wrapper>
  );
};

export default MpLine3;
