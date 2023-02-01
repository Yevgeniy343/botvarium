import Wrapper from "./wr-MpLine1";
import { SiApachetomcat } from "react-icons/si";

const MpLine1 = () => {
  return (
    <Wrapper>
      <div className="left-block">
        <p>Разработка личных кабинетов пользователей и визуалтзация данных</p>
      </div>
      <div className="right-block">
        <SiApachetomcat />
        <SiApachetomcat style={{ transform: "rotate(180deg)" }} />
      </div>
    </Wrapper>
  );
};

export default MpLine1;
