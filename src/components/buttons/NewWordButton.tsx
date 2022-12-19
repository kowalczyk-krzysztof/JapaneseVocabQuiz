import { useDispatch, useSelector } from 'react-redux';
import {
  SET_WORD_LOADING,
  SET_WORD_RESET,
  wordsSelector,
} from '../../features/words/wordsSlice';
import {
  SET_QUESTION_ANSWERED,
  SET_RESET_POINTS_GAINED,
  gameSelector,
} from '../../features/game/gameSlice';

export const NewWordButton = () => {
  const dispatch = useDispatch();
  const game = useSelector(gameSelector);
  const word = useSelector(wordsSelector);

  const clickHandler = () => {
    dispatch(SET_WORD_RESET());
    dispatch(SET_RESET_POINTS_GAINED());
    dispatch(SET_QUESTION_ANSWERED(false));
    dispatch(SET_WORD_LOADING());
  };
  if (game.isAnswered && game.lives && !word.wordLoading)
    return <button onClick={clickHandler}>NEW WORD</button>;
  return null;
};
