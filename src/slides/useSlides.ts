import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SLIDES } from "./slides";

export const useSlideNavigation = () => {
  const { pathname } = useLocation();
  const currentIndex = SLIDES.findIndex((route) => route.path === pathname);

  let nextIndex = 0;
  if (currentIndex < SLIDES.length - 1) {
    nextIndex = currentIndex + 1;
  }
  const nextPath = SLIDES[nextIndex].path;

  let previousIndex = SLIDES.length - 1;
  if (currentIndex > 0) {
    previousIndex = currentIndex - 1;
  }
  const previousPath = SLIDES[previousIndex].path;

  return {
    previousPath,
    nextPath,
  };
};

export const useArrowkeysNavigation = () => {
  const navigate = useNavigate();
  const { nextPath, previousPath } = useSlideNavigation();

  React.useEffect(() => {
    const changeSlide = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        navigate(nextPath);
      }

      if (event.key === "ArrowLeft") {
        navigate(previousPath);
      }
    };

    document.addEventListener("keydown", changeSlide);
    return () => {
      document.removeEventListener("keydown", changeSlide);
    };
  }, [nextPath, nextPath]);
};
