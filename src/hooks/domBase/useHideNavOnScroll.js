/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "Theme";

export default function useHideNavOnScroll() {
  let { changeNavHeight } = useContext(ThemeContext);
  const [partialNav, setPartialNav] = useState(false);

  let isVisible = true;
  let lastScrollHeightSnapShot = 0;

  function handleScroll() {
    const heightToShowPartialNav = 150;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const userIsScrollingDown = winScroll > lastScrollHeightSnapShot;

    const isAvailablePartialNav = winScroll > heightToShowPartialNav;

    if (isVisible && userIsScrollingDown && isAvailablePartialNav) {
      changeNavHeight(true);
      setPartialNav(true);
      isVisible = false;
    } else if (!isVisible && !userIsScrollingDown) {
      changeNavHeight(false);
      setPartialNav(false);
      isVisible = true;
    }

    lastScrollHeightSnapShot = winScroll <= 0 ? 0 : winScroll;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      changeNavHeight(false);
    };
  }, []);

  return { partialNav };
}
