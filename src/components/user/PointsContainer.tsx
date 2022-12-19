import { useSelector } from 'react-redux';
import { gameSelector } from '../../features/game/gameSlice';

export const PointsContainer = () => {
  const { points, points_gained } = useSelector(gameSelector);

  return (
    <div>
      <span>Points</span>
      <span>{points}</span>
      {points_gained ? <div>+{points_gained}</div> : null}
    </div>
  );
};
