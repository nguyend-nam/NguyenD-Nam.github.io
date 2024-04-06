import styled from "styled-components";
import { theme } from "../../constants";

const FooterContainer = styled.footer`
  padding: 40px;
  text-align: center;
  width: 100%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkGrey};
  font-size: 16px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <span>&copy; 2023 Nam Nguyen Dinh. All rights reserved.</span>
    </FooterContainer>
  );
}
