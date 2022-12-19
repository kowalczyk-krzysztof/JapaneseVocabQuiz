import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_USER_ANSWER,
  SET_POINTS,
  SET_REMOVE_LIFE,
  SET_QUESTION_ANSWERED,
  gameSelector,
  POINTS_PER_SECOND,
} from '../../features/game/gameSlice';
import { wordsSelector } from '../../features/words/wordsSlice';

type Props = {
  readonly isCorrectAnswer: boolean;
};

export const AnswerButton: FC<Props> = ({ isCorrectAnswer }) => {
  const dispatch = useDispatch();
  const { wordExists } = useSelector(wordsSelector);
  const { time_left } = useSelector(gameSelector);
  const clickHandler = () => {
    dispatch(SET_USER_ANSWER(isCorrectAnswer));
    dispatch(SET_QUESTION_ANSWERED(true));
    dispatch(
      wordExists === isCorrectAnswer
        ? SET_POINTS(POINTS_PER_SECOND * time_left)
        : SET_REMOVE_LIFE()
    );
  };
  return (
    <button onClick={clickHandler}>
      {isCorrectAnswer ? 'REAL WORD' : 'FAKE WORD'}
    </button>
  );
};
