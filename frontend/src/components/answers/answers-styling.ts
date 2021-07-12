import styled from 'styled-components';
import { ButtonTemplate } from '../../createGlobalStyle';

export const StyledTrueButton = styled(ButtonTemplate)`
  background: #4df735;
  :hover {
    background: #74f861;
  }
`;

export const StyledFalseButton = styled(ButtonTemplate)`
  background: #f74848;
  :hover {
    background: #fa6868;
  }
`;
