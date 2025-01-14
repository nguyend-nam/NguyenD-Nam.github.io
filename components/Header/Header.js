import styled from "styled-components";
import { theme } from "../../constants";
import { SideBarContext } from "../../pages/_app";
import { useContext } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${theme.colors.grey};
  padding: 20px 64px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${theme.colors.lightGrey};
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    padding: 16px 25px;
  }
  & button:nth-child(2) {
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    &:focus {
      outline-offset: 4px;
      outline: solid 1px ${theme.colors.purple};
    }
  }
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: 400;
  background-color: ${theme.colors.lightGrey};
  color: ${theme.colors.darkGrey};
  display: flex;
  align-items: center;
  width: max-content;
  padding: 3px 0;
  font-size: 25px;
  & > span:nth-child(2) {
    font-weight: 700;
  }
  @media (max-width: 800px) {
    font-size: 23px;
  }
`;

const MobileToggleButton = styled.button`
  outline: none;
  flex-shrink: 0;
  border: none;
  max-height: 39px;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  color: ${theme.colors.darkGrey};
  & > * {
    font-size: 25px;
    padding: 0;
  }
  transition: 0.3s;
  margin-right: 25px;
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
  const { push } = useRouter();
  return (
    <HeaderContainer>
      <MobileToggleButton onClick={() => setSideBar(!sideBar)}>
        {sideBar ? <Icon icon="cil:x" /> : <Icon icon="cil:menu" />}
      </MobileToggleButton>
      <button onClick={() => push("/")}>
        <HeaderTitle>
          <span>NAM</span>
          <span>NGUYEN</span>
        </HeaderTitle>
      </button>
    </HeaderContainer>
  );
}
