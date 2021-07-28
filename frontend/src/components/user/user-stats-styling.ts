import styled, { keyframes } from 'styled-components';
import { green, red, blackish } from '../../createGlobalStyle';
import { Heart } from '@styled-icons/ionicons-solid';
import { HeartDislike } from '@styled-icons/ionicons-outline';

const Fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

export const StyledDyingHeart = styled(Heart)`
  justify-self: bottom;
  width: 45px;
  height: 45px;
  color: ${red};
  animation: ${Fade} 3s 1;
  opacity: 0;
`;

export const StyledHeart = styled(Heart)`
  color: ${red};
  width: 20px;
  height: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const StyledHeartDislike = styled(HeartDislike)`
  color: ${blackish};
  width: 20px;
  height: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const StyledPointsGained = styled.span`
  opacity: 0;
  font-size: 1.5rem;
  color: ${green};
  animation: ${Fade} 3s 1;
`;

const StyledStatsContainer = styled.div`
  display: flex;
  padding: 5px;
`;

export const StyledLivesContainer = styled(StyledStatsContainer)`
  grid-area: lives;
  flex-wrap: wrap;
  justify-content: right;
  flex-direction: column;
`;

export const StyledHeartsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledPointsContainer = styled(StyledStatsContainer)`
  grid-area: points;
  flex-direction: column;
  text-align: left;
  span:nth-child(2) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 480px) {
    span {
      font-size: 0.75rem;
    }
    span:nth-child(2) {
      font-size: 1rem;
    }

    span:nth-child(3) {
      font-size: 1rem;
    }
  }
`;
