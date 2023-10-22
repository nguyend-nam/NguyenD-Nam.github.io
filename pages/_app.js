import "../styles/globals.css";
import { useState, createContext } from "react";
import { theme } from "../constants";

export const SideBarContext = createContext({
  sideBar: false,
  toggleSideBar: (sideBar) => {
    sideBar = sideBar;
  },
});

function MyApp({ Component, pageProps }) {
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = (value) => {
    setSideBar(value);
  };

  return (
    <SideBarContext.Provider value={{ sideBar, toggleSideBar }}>
      <style jsx global>{`
        body {
          background: ${theme.colors.lightGrey};
        }
      `}</style>
      <Component {...pageProps} />
    </SideBarContext.Provider>
  );
}

export default MyApp;
