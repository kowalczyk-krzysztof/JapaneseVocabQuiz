import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Styling
import { StyledPointsGained } from './user-stats-styling';

export const PointsContainer: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);
  if (game.lives > 0)
    return (
      <div
        style={{ gridArea: 'points', display: 'flex', flexDirection: 'column' }}
      >
        <span>Points: {game.points}</span>
        {game.points_gained > 0 ? (
          <StyledPointsGained> +{game.points_gained}</StyledPointsGained>
        ) : (
          <span />
        )}
      </div>
    );
  else return null;
};

export default PointsContainer;
