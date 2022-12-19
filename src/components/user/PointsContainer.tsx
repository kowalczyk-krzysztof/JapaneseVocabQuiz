import { useSelector } from 'react-redux';
import { gameSelector } from '../../features/game/gameSlice';

export const PointsContainer = () => {
  const game = useSelector(gameSelector);

  return (
    <div>
      <span>Points</span>
      <span>{game.points}</span>
      {game.points_gained ? <div> +{game.points_gained}</div> : null}
    </div>
  );
};
