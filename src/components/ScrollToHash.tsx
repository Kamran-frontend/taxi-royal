import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the #hash target after a route change, otherwise to the top. */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        // let the route render before scrolling
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
