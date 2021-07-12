import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Components
import { PointsContainer } from './pointsContainer';
import { LivesContainer } from './livesContainer';
// Styling

export const UserStats: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);
  if (game.lives > 0)
    return (
      <div>
        <PointsContainer />
        <LivesContainer />
      </div>
    );
  else return null;
};

export default UserStats;
