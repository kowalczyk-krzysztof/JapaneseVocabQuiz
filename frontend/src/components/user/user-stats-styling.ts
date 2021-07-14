import styled, { keyframes } from 'styled-components';
import { green, red, blackish } from '../../createGlobalStyle';
import { Heart } from '@styled-icons/ionicons-solid';
import { HeartDislike } from '@styled-icons/ionicons-outline';

const Fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

export const StyledDyingHeart = styled(Heart)`
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

export const StyledLivesContainer = styled.div`
  grid-area: lives;
  display: flex;
  flex-direction: column;
  align-items: right;
  padding-top: 5px;
  padding-right: 5px;
`;
export const StyledHeartsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: right;
  padding-top: 5px;
  padding-right: 5px;
`;

export const StyledPointsContainer = styled.div`
  grid-area: points;
  display: flex;
  flex-direction: column;
  user-select: none;
  text-align: left;
  padding-top: 5px;
  padding-left: 5px;
  span:nth-child(2) {
    font-size: 1.5rem;
  }
`;
