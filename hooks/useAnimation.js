import { useCallback, useEffect } from "react";

export const useAnimation = (isSSR, wrapperClassName) => {
  const inViewport = useCallback((element) => {
    if (typeof window !== "undefined") {
      const box = element.getBoundingClientRect();
      return box.top < window.innerHeight && box.bottom >= 0;
    } else {
      return false;
    }
  }, []);

  const findAni = useCallback(() => {
    document.querySelectorAll(".site-ani-group").forEach((group) => {
      let delay = 0;
      group
        .querySelectorAll(".site-ani-auto:not(.state-ani-go)")
        .forEach((target) => {
          target.style.transitionDelay = `${delay}ms`;
          delay += 200;
        });
    });
    document.querySelectorAll(".site-ani-auto").forEach((target) => {
      if (inViewport(target)) {
        target.classList.add("state-ani-go");
      }
    });
  }, [inViewport]);

  useEffect(() => {
    const containerElements = document.querySelector(wrapperClassName);

    if (containerElements) {
      containerElements.addEventListener("scroll", () => {
        findAni();
      });
    }
  }, [findAni, isSSR, wrapperClassName]);

  useEffect(() => {
    if (!isSSR) {
      findAni();
    }
  }, [findAni, isSSR]);
};
