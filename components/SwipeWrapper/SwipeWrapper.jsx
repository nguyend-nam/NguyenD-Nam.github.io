import { useContext, useState } from "react";
import { SideBarContext } from "../../pages/_app";

export const SwipeWrapper = ({ children }) => {
  const contextValue = useContext(SideBarContext);
  const setSideBar = (sideBar) => contextValue.toggleSideBar(sideBar);

  const [touchStart, setTouchStart] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistanceMobile = 35;
  const minSwipeDistanceDesktop = 100;

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onMouseDown = (e) => {
    setTouchStart(e.clientX);
  };

  const onTouchMove = (e) => {
    if (e.targetTouches[0].clientX && touchStart) {
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
  };

  const onMouseMove = (e) => {
    if (e.clientX && touchStart) {
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
  };

  const onTouchOrMouseEnd = () => {
    setTouchStart(null);
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
