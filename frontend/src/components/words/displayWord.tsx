import React, { FC } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';

export const DisplayWord: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);

  if (word.wordLoading === true)
    return <h1 style={{ fontSize: '54' }}>LOADING</h1>;
  else return <h1 style={{ fontSize: '54' }}>{word.word.word}</h1>;
};

export default DisplayWord;
