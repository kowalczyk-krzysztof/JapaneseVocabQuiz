import styled from 'styled-components';
import {
  blackish,
  white,
  red,
  lightRed,
  green,
  lightGreen,
} from '../../createGlobalStyle';

export const StyledButtons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`;

const ButtonTemplate = styled.button`
  margin-top: 10px;
  width: 8rem;
  height: 4rem;
  user-select: none;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
`;

export const StyledGameStateButton = styled(ButtonTemplate)`
  color: ${white};
  width: 8rem;
  height: 4rem;
  border: 2px solid #00abe7;
  margin-top: 0;
  background: ${blackish};
  :hover {
    background: #120c24;
  }
`;

const StyledAnswerButton = styled(ButtonTemplate)`
  border: 2px solid ${white};
  color: ${white};
  @media only screen and (max-width: 480px) {
    width: 5rem;
  }
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
