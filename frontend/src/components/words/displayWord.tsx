import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Styling
import { StyledWord } from './words-styling';

export const DisplayWord: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);

  if (word.wordLoading === true) return <h1>...</h1>;
  else return <StyledWord>{word.word.word}</StyledWord>;
};

export default DisplayWord;
