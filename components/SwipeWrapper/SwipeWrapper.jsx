import { useContext, useState } from "react";
import { SideBarContext } from "../../pages/_app";

export const SwipeWrapper = ({ children }) => {
  const contextValue = useContext(SideBarContext);
  const setSideBar = (sideBar) => contextValue.toggleSideBar(sideBar);

  const [touchStart, setTouchStart] = useState(null);
  const [touchStartVertical, setTouchStartVertical] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistanceMobile = 35;
  const minSwipeDistanceDesktop = 100;
  const maxSwipeDistanceVerticalMobile = 25;
  const maxSwipeDistanceVerticalDesktop = 75;

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartVertical(e.targetTouches[0].clientY);
  };

  const onMouseDown = (e) => {
    setTouchStart(e.clientX);
    setTouchStartVertical(e.clientY);
  };

  const onTouchMove = (e) => {
    if (
      e.targetTouches[0].clientX &&
      e.targetTouches[0].clientY &&
      touchStart &&
      touchStartVertical
    ) {
      if (
        Math.abs(e.targetTouches[0].clientY - touchStartVertical) <
        maxSwipeDistanceVerticalMobile
      ) {
        if (
          e.targetTouches[0].clientX > touchStart &&
          e.targetTouches[0].clientX - touchStart > minSwipeDistanceMobile
        ) {
          setSideBar(true);
        } else if (
          e.targetTouches[0].clientX < touchStart &&
          touchStart - e.targetTouches[0].clientX > minSwipeDistanceMobile
        ) {
          setSideBar(false);
        }
      }
    }
  };

  const onMouseMove = (e) => {
    if (e.clientX && e.clientY && touchStart && touchStartVertical) {
      if (
        Math.abs(e.clientY - touchStartVertical) <
        maxSwipeDistanceVerticalDesktop
      ) {
        if (
          e.clientX > touchStart &&
          e.clientX - touchStart > minSwipeDistanceDesktop
        ) {
          setSideBar(true);
        } else if (
          e.clientX < touchStart &&
          touchStart - e.clientX > minSwipeDistanceDesktop
        ) {
          setSideBar(false);
        }
      }
    }
  };

  const onTouchOrMouseEnd = () => {
    setTouchStart(null);
    setTouchStartVertical(null);
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchOrMouseEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onTouchOrMouseEnd}
    >
      {children}
    </div>
  );
};
