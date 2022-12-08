import { useDispatch } from 'react-redux';
import { SET_START_GAME } from '../../features/game/gameSlice';

export const StartButton = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    console.log('click');
    dispatch(SET_START_GAME());
  };
  return <button onClick={clickHandler}>START</button>;
};
