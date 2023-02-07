import Wrapper from "./wr-MpLine1";
import logo from "../../assets/imgs/logo.png";
import { useDispatch } from "react-redux";
import { closeSubmenu } from "../../features/userSlice";
import { motion } from "framer-motion";

const MpLine1 = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      onMouseOver={() => {
        dispatch(closeSubmenu());
      }}
    >
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
