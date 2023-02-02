import Wrapper from "./wr-MpLine2";
import { useState } from "react";
import { VscCode } from "react-icons/vsc";

const MpLine2 = () => {
  const [value, setValue] = useState(1);
  console.log(value);

  return (
    <Wrapper>
      <div className="left-block">
        {value === 1 ? (
          <div>1</div>
        ) : value === 2 ? (
          <div>2</div>
        ) : value === 3 ? (
          <div>3</div>
        ) : (
          <div>4</div>
        )}
      </div>
      <div className="direction">
        <div
          className={value === 1 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(1)}
        >
          <VscCode />
          <p>Разработка личных кабинетов пользователей</p>
        </div>
        <div
          className={value === 2 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(2)}
        >
          <VscCode />
          <p>Разработка личных кабинетов для клиетов Вашей компании</p>
        </div>
        <div
          className={value === 3 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(3)}
        >
          <VscCode />
          <p>Разработка корпоративных порталов</p>
        </div>
        <div
          className={value === 4 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(4)}
        >
          <VscCode />
          <p>Визуализация данных</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default MpLine2;
