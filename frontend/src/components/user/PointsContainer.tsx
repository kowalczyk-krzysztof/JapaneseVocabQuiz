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
      <StyledPointsContainer data-testid={'pointscontainer'}>
        <span>Points</span>
        <span>{game.points}</span>
        {game.points_gained > 0 ? (
          <StyledPointsGained> +{game.points_gained}</StyledPointsGained>
        ) : null}
      </StyledPointsContainer>
    );
  else return null;
};
