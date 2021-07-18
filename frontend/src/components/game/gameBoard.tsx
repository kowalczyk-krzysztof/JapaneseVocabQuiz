import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Components
import { NewWordButton } from '../startandnew/NewWordButton';
import { AnswerButtonsContainer } from '../answers/AnswerButtonsContainer';
import { PointsContainer } from '../user/PointsContainer';
import { LivesContainer } from '../user/LivesContainer';
import { WordInfo } from '../words/WordInfo';
import { Countdown } from '../countdown/Countdown';
import { StartButton } from '../startandnew/StartButton';
import {
  StyledUserStats,
  StyledGameOver,
  StyledWordAndButtons,
} from './game-styling';

export const GameBoard: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);

  if (game.isGameStarted === true)
    return (
      <Fragment>
        {game.isGameOver === false ? (
          <StyledUserStats data-testid={'gameboard'}>
            <Countdown />
            <PointsContainer />
            <LivesContainer />
          </StyledUserStats>
        ) : (
          <StyledGameOver>
            <h1>GAME OVER</h1>
          </StyledGameOver>
        )}
        <StyledWordAndButtons>
          <WordInfo />
          <NewWordButton />
          <AnswerButtonsContainer />
          <StartButton />
        </StyledWordAndButtons>
      </Fragment>
    );
  else return null;
};

export default GameBoard;
