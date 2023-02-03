import Wrapper from "./wr-MpLine2";
import { useState } from "react";
import { VscCode } from "react-icons/vsc";
import Direction1 from "../MainPage/Directions/Direction1";

const MpLine2 = () => {
  const [value, setValue] = useState(0);

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
          <div className="icon">
            <VscCode />
          </div>
          <p>адаптивные веб-приложения</p>
        </div>
        <div
          className={value === 1 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(1)}
        >
          <div className="icon">
            <VscCode />
          </div>
          <p>личные кабинеты клиентов</p>
        </div>
        <div
          className={value === 2 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(2)}
        >
          <div className="icon">
            <VscCode />
          </div>
          <p>личные кабинеты партнеров</p>
        </div>
        <div
          className={value === 3 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(3)}
        >
          <div className="icon">
            <VscCode />
          </div>
          <p>корпоративные порталы</p>
        </div>
        <div
          className={value === 4 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(4)}
        >
          <div className="icon">
            <VscCode />
          </div>
          <p>корпоративные мессенджеры</p>
        </div>
        <div
          className={value === 5 ? "direction-item active" : "direction-item"}
          onClick={() => setValue(5)}
        >
          <div className="icon">
            <VscCode />
          </div>
          <p>разработка еще чего-либо</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default MpLine2;
