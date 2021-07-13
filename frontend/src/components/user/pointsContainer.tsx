import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Styling
import {
  StyledPointsGained,
  StyledPointsContainer,
} from './user-stats-styling';

export const PointsContainer: FC = (): JSX.Element | null => {
  const game: Game = useSelector(gameSelector);
  if (game.lives > 0)
    return (
      <StyledPointsContainer>
        <span style={{ width: '100%', flexGrow: 1 }}>Points:</span>
        <span style={{ width: '100%', alignItems: 'top', flex: 1 }}>
          {game.points}
        </span>
        {game.points_gained > 0 ? (
          <StyledPointsGained> +{game.points_gained}</StyledPointsGained>
        ) : (
          <span />
        )}
      </StyledPointsContainer>
    );
  else return null;
};

export default PointsContainer;
