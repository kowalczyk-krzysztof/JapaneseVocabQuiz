import React, { FC } from 'react';
// Redux
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
// Styling
import { StyledTrueButton, StyledFalseButton } from './answers-styling';

interface AnswerButtonProps {
  isTrue: boolean;
}

export const AnswerButton: FC<AnswerButtonProps> = ({
  isTrue,
}): JSX.Element => {
  const dispatch = useDispatch();
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);
  const clickHandler = (): void => {
    dispatch(SET_USER_ANSWER(isTrue));
    dispatch(SET_QUESTION_ANSWERED());
    if (word.word.wordExists === isTrue)
      dispatch(SET_POINTS(5 * game.time_left));
    else dispatch(SET_REMOVE_LIFE());
  };
  if (isTrue === true)
    return (
      <StyledTrueButton onClick={clickHandler}>REAL WORD</StyledTrueButton>
    );
  else
    return (
      <StyledFalseButton onClick={clickHandler}>FAKE WORD</StyledFalseButton>
    );
};

export default AnswerButton;
