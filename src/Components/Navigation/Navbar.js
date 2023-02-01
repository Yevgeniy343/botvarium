import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wr-Navbar";
import logo from "../../assets/imgs/logo.png";
import { FaApple, FaGithub, FaNpm } from "react-icons/fa";
import { BsXLg, BsDistributeVertical } from "react-icons/bs";
import links from "../../Data/links-data";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { activeLinkHandler } from "../../features/userSlice";

const Navbar = () => {
  const { activeLink } = useSelector((store) => store.user);
  console.log(activeLink.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linksContainerRef = useRef();
  const linksRef = useRef();

  const [showLinks, setShowLinks] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <Wrapper>
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
              onClick={() => setShowLinks(!showLinks)}
            >
              {showLinks ? <BsXLg /> : <BsDistributeVertical />}
            </motion.div>
          </div>

          <div className="links-container" ref={linksContainerRef}>
            <div className="links" ref={linksRef}>
              {links.map((link) => {
                const { text, path, icon, id } = link;
                return (
                  <Link
                    // className="link-hover"
                    key={id}
                    to={path}
                    className={
                      id === activeLink.id ? "link-hover active" : "link-hover"
                    }
                    onClick={() =>
                      dispatch(activeLinkHandler({ id, text, path }))
                    }
                  >
                    <span className="icon">{icon}</span>
                    {text}
                  </Link>
                );
              })}
            </div>
          </div>

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
