import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../features/words/wordsSlice';

export const DisplayWord: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);

  if (word.wordLoading === true)
    return (
      <Fragment>
        <h1 style={{ fontSize: '54' }}>LOADING</h1>
      </Fragment>
    );
  else
    return (
      <Fragment>
        <h1 style={{ fontSize: '54' }}>{word.word.word}</h1>
      </Fragment>
    );
};

export default DisplayWord;
