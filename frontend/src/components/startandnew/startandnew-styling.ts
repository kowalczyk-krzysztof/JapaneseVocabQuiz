import styled from 'styled-components';
import { ButtonTemplate, blackish, white } from '../../createGlobalStyle';

export const StyledGameStateButton = styled(ButtonTemplate)`
  color: ${white};
  width: 12rem;
  height: 4.5rem;
  border: 2px solid #00abe7;
  background: ${blackish};
  :hover {
    background: #120c24;
  }
`;

export const StyledStartAndNewButtonContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
