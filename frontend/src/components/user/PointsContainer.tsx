import { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { gameSelector, Game } from '../../features/game/gameSlice';
// Styling
import {
  StyledPointsGained,
  StyledPointsContainer,
} from './user-stats-styling';

export const PointsContainer: FC = (): JSX.Element => {
  const game: Game = useSelector(gameSelector);

  return (
    <StyledPointsContainer data-testid={'pointscontainer'}>
      <span>Points</span>
      <span>{game.points}</span>
      {game.points_gained > 0 ? (
        <StyledPointsGained> +{game.points_gained}</StyledPointsGained>
      ) : null}
    </StyledPointsContainer>
  );
};
