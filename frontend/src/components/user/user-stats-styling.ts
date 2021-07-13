import styled, { keyframes } from 'styled-components';
import { green } from '../../createGlobalStyle';

const Fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

export const StyledPointsGained = styled.span`
  opacity: 0;
  color: ${green};
  animation: ${Fade} 5s 1;
`;

export const StyledLivesContainer = styled.div`
  grid-area: lives;
  display: flex;
  justify-content: flex-end;
  align-items: right;
  padding-top: 5px;
  padding-right: 5px;
`;

export const StyledPointsContainer = styled.div`
  grid-area: points;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  text-align: left;
  padding-top: 5px;
  padding-left: 5px;
`;
