import styled from "styled-components";
import { theme } from "../../constants";
import { SideBarContext } from "../../pages/_app";
import { useState, useContext } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.primary};
  padding: 25px 65px;
  font-family: "Plus Jakarta Sans";
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${theme.colors.secondary};
  display: flex;
  @media (max-width: 800px) {
    padding: 25px;
  }
`;

const HeaderTitle = styled.span`
  margin: 0;
  font-weight: 300;
  background-color: ${theme.colors.shadow};
  color: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0 10px;
  font-size: 25px;
  transition: 0.5s;
  box-shadow: -8px 8px 0 ${theme.colors.primary},
    -12px -4px 0 ${theme.colors.shadowLight};
  & > span:nth-child(2) {
    font-weight: 700;
  }
  &:hover {
    box-shadow: 0px 0px 0 ${theme.colors.primary},
      0px 0px 0 ${theme.colors.shadowLight};
    transform: translateX(-8px);
  }
`;

const MobileToggleButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${theme.colors.primary};
  & > * {
    font-size: 25px;
    padding: 0;
  }
  transition: 0.3s;
  margin-right: 30px;
  overflow: hidden;
  padding: 0;
  &:hover {
    transform: scale(1.1);
  }
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

export function Header() {
  const contextValue = useContext(SideBarContext);
  const sideBar = contextValue.sideBar;
  const setSideBar = (sideBar) => contextValue.toggleSideBar(sideBar);
  return (
    <HeaderContainer>
      <MobileToggleButton onClick={() => setSideBar(!sideBar)}>
        {sideBar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </MobileToggleButton>
      <HeaderTitle>
        <span>NAM</span>
        <span>NGUYEN</span>
      </HeaderTitle>
    </HeaderContainer>
  );
}
