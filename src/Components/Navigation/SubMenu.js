import Wrapper from "./wr-Submenu";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

const SubMenu = () => {
  const { isSubmenu, subMenuLocation } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const container = useRef();

  useEffect(() => {
    const submenu = container.current;
    submenu.style.left = `${subMenuLocation.center}px`;
    submenu.style.top = `${subMenuLocation.bottom}px`;
  }, [subMenuLocation]);
  return (
    <Wrapper>
      <aside className={isSubmenu ? "submenu show" : "submenu"} ref={container}>
        submenu
      </aside>
    </Wrapper>
  );
};

export default SubMenu;
