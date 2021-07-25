import { FC, Fragment } from 'react';
// Components
import { NewWordButton } from '../startandnew/NewWordButton';
import { AnswerButtonsContainer } from '../answers/AnswerButtonsContainer';
import { PointsContainer } from '../user/PointsContainer';
import { LivesContainer } from '../user/LivesContainer';
import { WordInfo } from '../words/WordInfo';
import { Countdown } from '../countdown/Countdown';
import { StartButton } from '../startandnew/StartButton';
// Styling
import {
  StyledUserStats,
  StyledWordAndButtons,
  StyledButtons,
} from './game-styling';

export const GameBoard: FC = (): JSX.Element => {
  return (
    <Fragment>
      <StyledUserStats data-testid={'gameboard'}>
        <Countdown />
        <PointsContainer />
        <LivesContainer />
      </StyledUserStats>
      <StyledWordAndButtons>
        <WordInfo />
        <StyledButtons>
          <NewWordButton />
          <AnswerButtonsContainer />
          <StartButton />
        </StyledButtons>
      </StyledWordAndButtons>
    </Fragment>
  );
};
