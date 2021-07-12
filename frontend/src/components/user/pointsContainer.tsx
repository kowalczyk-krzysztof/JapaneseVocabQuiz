import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Styling
import { StyledPointsGained } from './user-stats-styling';

export const PointsContainer: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);

  return (
    <div>
      <span>Points: {game.points}</span>
      {game.points_gained > 0 ? (
        <StyledPointsGained> +{game.points_gained}</StyledPointsGained>
      ) : (
        <span />
      )}
    </div>
  );
};

export default PointsContainer;
