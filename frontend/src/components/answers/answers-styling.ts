import styled from 'styled-components';
import {
  ButtonTemplate,
  red,
  lightRed,
  green,
  white,
  lightGreen,
} from '../../createGlobalStyle';

const StyledAnswerButton = styled(ButtonTemplate)`
  margin-top: 0;
  border: 2px solid ${white};
  color: ${white};
`;

export const StyledTrueButton = styled(StyledAnswerButton)`
  background: ${green};
  :hover {
    background: ${lightGreen};
  }
`;

export const StyledFalseButton = styled(StyledAnswerButton)`
  background: ${red};

  :hover {
    background: ${lightRed};
  }
`;
