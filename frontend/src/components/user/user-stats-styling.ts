import styled, { keyframes } from 'styled-components';

const Fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

export const StyledPointsGained = styled.span`
  opacity: 0;
  color: #4df735;
  animation: ${Fade} 5s 1;
`;
