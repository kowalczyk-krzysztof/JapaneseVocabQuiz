import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Components
import { StartGameButton } from '../gamestate/startGameButton';

export const GameOverScreen: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);

  if (game.isGameStarted === true && game.lives <= 0)
    return (
      <Fragment>
        <h1>GAME OVER!</h1>
        <h1>Total Points: {game.points}</h1>
        <StartGameButton />
      </Fragment>
    );
  else return null;
};

export default GameOverScreen;
