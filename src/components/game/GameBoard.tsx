import { FC } from 'react';
// Components
import { PointsContainer } from '../user/PointsContainer';
import { LivesContainer } from '../user/LivesContainer';
import { WordInfo } from '../words/WordInfo';
import { Countdown } from '../countdown/Countdown';
import { ButtonContainer } from '../buttons/ButtonContainer';
// Styling
import {
  StyledUserStats,
  StyledWordAndButtons,
  StyledScreen,
} from './game-styling';

export const GameBoard: FC = (): JSX.Element => {
  return (
    <StyledScreen data-testid={'gameboard'}>
      <StyledUserStats>
        <Countdown />
        <PointsContainer />
        <LivesContainer />
      </StyledUserStats>
      <StyledWordAndButtons>
        <WordInfo />
        <ButtonContainer />
      </StyledWordAndButtons>
    </StyledScreen>
  );
};
