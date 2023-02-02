import Wrapper from "./wr-MpLine1";
import logo from "../../assets/imgs/logo.png";

const MpLine1 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="about">
          <p>Разработка личных кабинетов</p>
          <p>Визуализация данных</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default MpLine1;
