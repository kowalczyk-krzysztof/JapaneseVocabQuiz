import styled from 'styled-components';
import { red } from '../../createGlobalStyle';

export const StyledCountdownContainer = styled.div`
  grid-area: timer;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  user-select: none;
  padding-top: 5px;

  p {
    color: ${red};
    font-size: 1.5rem;
  }

  span {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    span {
      font-size: 0.75rem;
    }
  }
`;

export const StyledProgressCircle = styled.circle`
  transition: stroke - dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
