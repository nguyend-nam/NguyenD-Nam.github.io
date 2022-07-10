import "../styles/globals.css";
import { useState, createContext } from "react";

export const SideBarContext = createContext({
  sideBar: false,
  toggleSideBar: (sideBar) => {
    sideBar = !sideBar;
  },
});

function MyApp({ Component, pageProps }) {
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <SideBarContext.Provider value={{ sideBar, toggleSideBar }}>
      <Component {...pageProps} />
    </SideBarContext.Provider>
  );
}

export default MyApp;
