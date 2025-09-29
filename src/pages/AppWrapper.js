import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StickyNameGlobal } from "../components/stickyNameGlobal";

const AppWrapper = ({ children }) => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      {!isHome && <StickyNameGlobal showAfterPX={100} />}
      {children}
    </>
  );
};

export { AppWrapper };
