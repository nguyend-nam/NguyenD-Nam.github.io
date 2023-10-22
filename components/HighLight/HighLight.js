import styled from "styled-components";
import { theme } from "../../constants";

const StyledHighLight = styled.span`
  border-bottom: 1px solid ${theme.colors.grey};
  color: ${theme.colors.darkGrey};
  font-weight: 500;
`;

export const HighLight = ({ children }) => {
  return <StyledHighLight>{children}</StyledHighLight>;
};
