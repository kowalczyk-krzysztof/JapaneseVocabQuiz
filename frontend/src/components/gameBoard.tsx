import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../features/game/gameSlice';
import { NewWordButton } from '../components/newWordButton';
import { AnswerButtons } from '../components/answerButtons';
import { StartGameButton } from '../components/startGameButton';
import { UserStats } from '../components/userStats';
// Components
import WordInfo from './wordInfo';
import Countdown from './countdown';

export const GameBoard: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);

  if (game.isGameStarted === false)
    return (
      <Fragment>
        <StartGameButton />
      </Fragment>
    );
  else
    return (
      <Fragment>
        <Countdown />
        <UserStats />
        <WordInfo />
        <NewWordButton />
        <AnswerButtons />
      </Fragment>
    );
};

export default GameBoard;
