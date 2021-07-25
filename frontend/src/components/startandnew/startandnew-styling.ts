import styled from 'styled-components';
import { ButtonTemplate, blackish, white } from '../../createGlobalStyle';

export const StyledGameStateButton = styled(ButtonTemplate)`
  color: ${white};
  width: 12rem;
  height: 4rem;
  border: 2px solid #00abe7;
  margin-top: 0;
  background: ${blackish};
  :hover {
    background: #120c24;
  }
`;
