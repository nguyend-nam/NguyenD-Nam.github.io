import styled from "styled-components";
import { theme } from "../../constants";

const StyledHighLight = styled.span`
  border-bottom: 2px solid ${theme.colors.primary};
  color: ${theme.colors.darkBlue};
  font-weight: 500;
`;

export const HighLight = ({ children }) => {
  return <StyledHighLight>{children}</StyledHighLight>;
};
