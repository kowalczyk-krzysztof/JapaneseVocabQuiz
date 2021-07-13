import React, { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';

export const Definitions: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);
  return (
    <Fragment>
      <ul style={{ listStyleType: 'none' }}>
        {word.word.definitions?.map((el: string, index: number) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default Definitions;
