import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
import { NewWordButton } from '../gamestate/newWordButton';
import { AnswerButtons } from '../answers/answerButtons';
import { StartGameButton } from '../gamestate/startGameButton';
import { UserStats } from '../user/userStats';
// Components
import WordInfo from '../words/wordInfo';
import Countdown from '../countdown/countdown';

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
