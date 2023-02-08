import Wrapper from "./wr-Sidebar";
import sublinks from "../../Data/sub-links";
import { closeSubmenu, menuToggleHandler } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { BsXLg, BsDistributeVertical } from "react-icons/bs";
import links from "../../Data/links-data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { menuToggle } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <aside
        className={menuToggle ? "sidebar-wrapper show" : "sidebar-wrapper"}
      >
        <div className="sidebar">
          <div className="sidebar-links">
            {sublinks.map((item, index) => {
              const { links, page } = item;
              return (
                <div className="links-area" key={index}>
                  <div className="page">
                    <p>{page}</p>
                  </div>
                  <div className="sidebar-sublinks">
                    {links.map((link, index) => {
                      const { url, icon, label } = link;
                      return (
                        <Link key={index} to={url}>
                          <div
                            className="link"
                            onClick={() => dispatch(menuToggleHandler())}
                          >
                            <div className="icon">{icon}</div>
                            <div className="label">
                              <p>{label}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
