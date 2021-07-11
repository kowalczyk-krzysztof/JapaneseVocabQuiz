import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../features/game/gameSlice';

export const UserStats: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);

  if (game.lives > 0)
    return (
      <Fragment>
        <p>Points: {game.points}</p>
        <p>Lives: {game.lives}</p>
      </Fragment>
    );
  else return null;
};

export default UserStats;
