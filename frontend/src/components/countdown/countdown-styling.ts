import styled from 'styled-components';

export const StyledCountdownContainer = styled.div`
  grid-area: timer;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  user-select: none;
  padding-top: 5px;
`;

export const StyledProgressCircle = styled.circle`
  transition: stroke - dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
