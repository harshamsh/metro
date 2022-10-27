// src/components/Navbar.js

import React, { useState, useEffect } from "react";
// import { debounce } from "../utilities/helpers";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    backgroundColor: "grey",
    textAlign: "center",
    transition: "top 0.6s",
  };

  return (
    <div style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}>
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default Navbar;
