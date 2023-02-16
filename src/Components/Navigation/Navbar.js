import Wrapper from "./wr-Navbar";
import logo from "../../assets/imgs/botvarium-low-resolution-logo-color-on-transparent-background.png";
import { FaApple, FaGithub, FaNpm } from "react-icons/fa";
import { BsXLg, BsDistributeVertical } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  menuToggleHandler,
  openSubmenu,
  closeSubmenu,
} from "../../features/userSlice";
import Search from "../Search/Search";

const Navbar = () => {
  const { menuToggle } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submenuHandler = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      dispatch(closeSubmenu());
    }
  };

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    dispatch(openSubmenu({ page, center, bottom }));
  };

  return (
    <Wrapper onMouseOver={submenuHandler}>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img
              className="logo"
              src={logo}
              alt="logo"
              onClick={() => navigate("/")}
            />

            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 3 }}
              className="burger nav-toggle"
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                dispatch(menuToggleHandler());
              }}
            >
              {menuToggle ? <BsXLg /> : <BsDistributeVertical />}
            </motion.div>
          </div>

          <div className="links-container">
            <ul className="links">
              <li>
                <button onMouseOver={displaySubmenu} className="link-btn">
                  Услуги
                </button>
              </li>
              <li>
                <button onMouseOver={displaySubmenu} className="link-btn">
                  Технологии
                </button>
              </li>
              <li>
                <button
                  onMouseOver={displaySubmenu}
                  className="link-btn"
                  onClick={() => navigate("/knowledge")}
                >
                  Знания
                </button>
              </li>
              {/* <li>
                <button onMouseOver={displaySubmenu} className="link-btn">
                  company
                </button>
              </li> */}
            </ul>
          </div>

          {/* <div className="social-icons">
            <Search />
          </div> */}
          <ul className="social-icons">
            <li>
              <FaApple />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaNpm />
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
