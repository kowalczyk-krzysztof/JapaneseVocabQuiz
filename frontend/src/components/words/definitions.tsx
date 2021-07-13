import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Styling
import { StyledFakeWord } from './words-styling';

export const Definitions: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);

  if (word.word.definitions.length > 0)
    return (
      <Fragment>
        {word.word.definitions.map((el: string, index: number) => {
          return <span key={index}>{el}</span>;
        })}
      </Fragment>
    );
  else return <StyledFakeWord>FAKE WORD</StyledFakeWord>;
};

export default Definitions;
