import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wr-Navbar";
import logo from "../../assets/imgs/logo.png";
import { FaApple, FaGithub, FaNpm } from "react-icons/fa";
import { BsXLg, BsDistributeVertical } from "react-icons/bs";
import links from "../../Data/links-data";
import sublinks from "../../Data/sub-links";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  activeLinkHandler,
  menuToggleHandler,
  openSubmenu,
} from "../../features/userSlice";

const Navbar = () => {
  const { activeLink, menuToggle } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linksContainerRef = useRef();
  const linksRef = useRef();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    // console.log(center);
    const bottom = tempBtn.bottom - 3;
    dispatch(openSubmenu({ page, center, bottom }));
  };

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
                  pruducts
                </button>
              </li>
              <li>
                <button onMouseOver={displaySubmenu} className="link-btn">
                  developers
                </button>
              </li>
              <li>
                <button onMouseOver={displaySubmenu} className="link-btn">
                  company
                </button>
              </li>
            </ul>
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
