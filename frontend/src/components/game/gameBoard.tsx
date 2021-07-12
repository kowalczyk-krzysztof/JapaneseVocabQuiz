import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Components
import { NewWordButton } from '../startandnew/newWordButton';
import { AnswerButtons } from '../answers/answerButtons';
import { PointsContainer } from '../user/pointsContainer';
import { LivesContainer } from '../user/livesContainer';
import { WordInfo } from '../words/wordInfo';
import { Countdown } from '../countdown/countdown';

export const GameBoard: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);

  if (game.isGameStarted === true)
    return (
      <Fragment>
        <Countdown />
        <PointsContainer />
        <LivesContainer />
        <WordInfo />
        <NewWordButton />
        <AnswerButtons />
      </Fragment>
    );
  else return null;
};

export default GameBoard;
