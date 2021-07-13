import styled from 'styled-components';
import { ButtonTemplate, blackish } from '../../createGlobalStyle';

export const StyledGameStateButton = styled(ButtonTemplate)`
  color: #ffff;
  border: 2px solid #00abe7;
  background: ${blackish};
  border: 2px solid #00abe7;
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
