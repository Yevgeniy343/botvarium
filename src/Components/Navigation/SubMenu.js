import Wrapper from "./wr-Submenu";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import sublinks from "../../Data/sub-links";
import { Link } from "react-router-dom";
import { currentPageHandler } from "../../features/userSlice";
import links from "../../Data/links-data";

const SubMenu = () => {
  const { isSubmenu, subMenuLocation, currentPage, currentLinks } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    submenu.style.left = `${subMenuLocation.center}px`;
    submenu.style.top = `${subMenuLocation.bottom}px`;
    if (currentLinks.length === 3) {
      setColumns("col-3");
    }
    if (currentLinks.length > 3) {
      setColumns("col-4");
    }
  }, [subMenuLocation, currentLinks]);
  return (
    <Wrapper>
      <aside className={isSubmenu ? "submenu show" : "submenu"} ref={container}>
        <h4>{subMenuLocation.page}</h4>
        <div className={`submenu-center ${columns}`}>
          {currentLinks.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <Link key={index} to={url}>
                <div className="icon">{icon}</div>
                <div className="label">{label}</div>
              </Link>
            );
          })}
        </div>
      </aside>
    </Wrapper>
  );
};

export default SubMenu;
