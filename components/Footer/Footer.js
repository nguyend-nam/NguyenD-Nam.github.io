import styled from "styled-components";
import { theme } from "../../constants";

const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  z-index: -1;
  padding: 40px;
  text-align: center;
  font-family: "Plus Jakarta Sans";
  width: 100%;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <span>&copy; 2022 Nam Nguyen Dinh. All rights reserved.</span>
    </FooterContainer>
  );
}
