import Wrapper from "./wr-MpLine3";
import IconNode from "../Tech/SvgNode";
import IconDocker from "../Tech/SvgDocker";
import IconMongo from "../Tech/SvgMongo";
import IconRedis from "../Tech/SvgRedis";

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
      </div>
    </Wrapper>
  );
};

export default MpLine3;
