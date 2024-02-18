import styled from "styled-components";
import { theme } from "../../constants";

const StyledHighLight = styled.span`
  border-bottom: 1px solid #3b82f6;
  color: ${theme.colors.darkGrey};
  font-family: "Space Grotesk" !important;
  font-weight: 500;
  * {
    font-family: "Space Grotesk" !important;
  }
`;

export const HighLight = ({ children }) => {
  return <StyledHighLight>{children}</StyledHighLight>;
};
