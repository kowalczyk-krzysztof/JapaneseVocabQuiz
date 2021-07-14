import styled from 'styled-components';
import {
  ButtonTemplate,
  red,
  lightRed,
  green,
  white,
  blackish,
  lightGreen,
} from '../../createGlobalStyle';

export const AnswerButtonsContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 5vh;
`;

const StyledAnswerButton = styled(ButtonTemplate)`
  border: 2px solid ${blackish};
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
