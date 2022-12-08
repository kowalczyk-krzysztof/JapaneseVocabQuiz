import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_USER_ANSWER,
  SET_POINTS,
  SET_REMOVE_LIFE,
  SET_QUESTION_ANSWERED,
  gameSelector,
  Game,
} from '../../features/game/gameSlice';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';

type Props = {
  readonly isTrue: boolean;
};

export const AnswerButton: FC<Props> = ({ isTrue }) => {
  const dispatch = useDispatch();
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);
  const clickHandler = () => {
    dispatch(SET_USER_ANSWER(isTrue));
    dispatch(SET_QUESTION_ANSWERED(true));
    if (word.word.wordExists === isTrue)
      dispatch(SET_POINTS(5 * game.time_left));
    else dispatch(SET_REMOVE_LIFE());
  };
  if (isTrue) return <button onClick={clickHandler}>REAL WORD</button>;

  return <button onClick={clickHandler}>FAKE WORD</button>;
};
