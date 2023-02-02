import Wrapper from "./wr-MpLine2";
import { useState } from "react";
import { VscCode } from "react-icons/vsc";
import Direction1 from "../MainPage/Directions/Direction1";

const MpLine2 = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  return (
    <Wrapper>
      <div className="left-block">
        {value === 0 ? (
          <Direction1 />
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
          className={value === 0 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(0)}
        >
          <VscCode />
          <p>Разработка адаптивных веб-приложений</p>
        </div>
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
        <div
          className={value === 5 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(5)}
        >
          <VscCode />
          <p>Разраблтка еще чего-либо</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default MpLine2;
