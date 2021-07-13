import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Components
import { DisplayWord } from '../words/displayWord';
import { Definitions } from '../words/definitions';

export const GameOverScreen: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);

  return (
    <Fragment>
      <h1>GAME OVER!</h1>
      <h1>FINAL SCORE: {game.points}</h1>
      <p>LAST WORD</p>
      <DisplayWord />
      <Definitions />
    </Fragment>
  );
};

export default GameOverScreen;
