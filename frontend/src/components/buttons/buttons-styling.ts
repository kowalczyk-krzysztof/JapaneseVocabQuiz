import styled from 'styled-components';
import { blackish, white } from '../../createGlobalStyle';

export const StyledButtons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem;
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
  @media only screen and (max-width: 480px) {
    width: 6rem;
  }
`;

export const StyledGameStateButton = styled(ButtonTemplate)`
  color: ${white};
  border: 2px solid #00abe7;
  margin-top: 0;
  background: ${blackish};
  width: 10rem;
  :hover {
    background: #120c24;
  }
`;

const StyledAnswerButton = styled(ButtonTemplate)`
  border: 2px solid ${white};
  color: ${white};
`;

export const StyledTrueButton = styled(StyledAnswerButton)`
  background: #00cc66;
  :hover {
    background: #00e673;
  }
`;

export const StyledFalseButton = styled(StyledAnswerButton)`
  background: #e60000;

  :hover {
    background: #ff0000;
  }
`;
