import { useSelector } from 'react-redux';
import { gameSelector, MAX_LIVES } from '../../features/game/gameSlice';
import { HeartFill } from '@styled-icons/bootstrap';

export const LivesContainer = () => {
  const { lives } = useSelector(gameSelector);

  return (
    <div>
      {Array(lives)
        .fill(null)
        .map((_, index) => (
          <HeartFill key={index} size={20} fill='red' />
        ))}
      {Array(MAX_LIVES - lives)
        .fill(null)
        .map((_, index) => (
          <HeartFill key={index} size={20} fill='black' />
        ))}
    </div>
  );
};
