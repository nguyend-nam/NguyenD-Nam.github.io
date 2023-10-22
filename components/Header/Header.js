import styled from "styled-components";
import { theme } from "../../constants";
import { SideBarContext } from "../../pages/_app";
import { useContext } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.grey};
  padding: 25px 64px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${theme.colors.lightGrey};
  display: flex;
  @media (max-width: 800px) {
    padding: 25px;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: 400;
  border-radius: 100px;
  background-color: ${theme.colors.lightGrey};
  color: ${theme.colors.darkBlue};
  display: flex;
  align-items: center;
  width: max-content;
  padding: 3px 14px;
  font-size: 25px;
  box-shadow: -12px 4px 0 ${theme.colors.grey};
  border: 1px solid ${theme.colors.darkBlue};
  & > span:nth-child(2) {
    font-weight: 700;
  }
  @media (max-width: 800px) {
    font-size: 23px;
  }
`;

const MobileToggleButton = styled.button`
  outline: none;
  border: none;
  max-height: 39px;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  color: ${theme.colors.darkBlue};
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
    display: flex;
  }
`;

export function Header() {
  const contextValue = useContext(SideBarContext);
  const sideBar = contextValue.sideBar;
  const setSideBar = (sideBar) => contextValue.toggleSideBar(sideBar);
  return (
    <HeaderContainer>
      <MobileToggleButton onClick={() => setSideBar(!sideBar)}>
        {sideBar ? (
          <Icon icon="ic:sharp-menu-open" />
        ) : (
          <Icon icon="ic:sharp-menu-open" rotate={2} />
        )}
      </MobileToggleButton>
      <Link href="/">
        <HeaderTitle>
          <span>NAM</span>
          <span>NGUYEN</span>
        </HeaderTitle>
      </Link>
    </HeaderContainer>
  );
}
