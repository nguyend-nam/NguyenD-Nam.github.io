import styled from "styled-components";
import { theme } from "../../constants";

const StyledHighLight = styled.span`
  border-bottom: 1px solid ${theme.colors.shadow};
  color: ${theme.colors.primary};
`;

export const HighLight = ({ children }) => {
  return <StyledHighLight>{children}</StyledHighLight>;
};
