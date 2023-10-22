import { useRouter } from "next/router";
import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../constants";
import { SideBarContext } from "../../pages/_app";
import { Icon } from "@iconify/react";

const SidebarContainer = styled.div`
  padding: 28px 20px;
  background-color: ${theme.colors.darkBlue};
  height: 100%;
  position: sticky;
  top: 0;
  @media (max-width: 800px) {
    padding: 0;
  }
  z-index: 1100;
`;

const ToggleButton = styled.button`
  outline: none;
  border: none;
  height: 34px;
  width: 30px;
  background-color: transparent;
  cursor: pointer;
  color: ${theme.colors.white};
  & > * {
    font-size: 30px;
    padding: 0;
    @media (max-width: 800px) {
      display: none;
    }
  }
  transition: 0.3s;
  margin-right: ${(props) => (props.hasWidth ? "190px" : "0")};
  overflow: hidden;
  padding: 0;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 800px) {
    margin-right: ${(props) => (props.hasWidth ? "175px" : "0")};
    width: 0;
  }
`;

const SidebarRoutesContainer = styled.ul`
  transition: margin-left 0.3s;
  margin-left: ${(props) => (props.isDisplayed ? "0" : "-150px")};
  & > li {
    list-style-type: none;
  }
  margin-top: 100px;
  padding: 0;
  @media (max-width: 800px) {
    padding-left: 15px;
  }
`;

const SidebarRoutes = styled.li`
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => (props.active ? theme.colors.grey : theme.colors.white)};
  margin: 30px 0;
  display: flex;
  align-items: center;
  width: max-content;
  font-weight: 400;
  user-select: none;
  &:before {
    margin-right: ${(props) => (props.active ? "10px" : "0px")};
    content: "";
    height: 1px;
    transition: 0.3s;
    width: ${(props) => (props.active ? "20px" : "0px")};
    background-color: ${theme.colors.grey};
    position: relative;
  }
  &:hover:before {
    margin-right: 10px;
    width: 20px;
  }
`;

export function Sidebar() {
  const contextValue = useContext(SideBarContext);
  const sideBar = contextValue.sideBar;
  const setSideBar = (sideBar) => contextValue.toggleSideBar(sideBar);
  const { push } = useRouter();
  const currPathname = window.location.pathname;
  return (
    <SidebarContainer>
      <ToggleButton onClick={() => setSideBar(!sideBar)} hasWidth={sideBar}>
        {sideBar ? (
          <Icon icon="grommet-icons:close" />
        ) : (
          <Icon icon="grommet-icons:menu" />
        )}
      </ToggleButton>
      <SidebarRoutesContainer isDisplayed={sideBar}>
        <SidebarRoutes onClick={() => push(`/`)} active={currPathname === "/"}>
          Home
        </SidebarRoutes>
        <SidebarRoutes
          onClick={() => push(`/about`)}
          active={currPathname === "/about"}
        >
          About
        </SidebarRoutes>
        <SidebarRoutes
          onClick={() => push(`/projects`)}
          active={currPathname === "/projects"}
        >
          Projects
        </SidebarRoutes>
        <SidebarRoutes
          onClick={() => push(`/contact`)}
          active={currPathname === "/contact"}
        >
          Contact
        </SidebarRoutes>
      </SidebarRoutesContainer>
    </SidebarContainer>
  );
}
