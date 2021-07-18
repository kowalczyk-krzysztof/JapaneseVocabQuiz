import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Components
import { NewWordButton } from '../startandnew/newWordButton';
import { AnswerButtonsContainer } from '../answers/answerButtonsContainer';
import { PointsContainer } from '../user/pointsContainer';
import { LivesContainer } from '../user/livesContainer';
import { WordInfo } from '../words/wordInfo';
import { Countdown } from '../countdown/countdown';
import { StartGameButton } from '../startandnew/startGameButton';
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
          <StartGameButton />
        </StyledWordAndButtons>
      </Fragment>
    );
  else return null;
};

export default GameBoard;
