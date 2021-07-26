import { FC, Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Styling
import { StyledFakeWord, StyledDefinition } from './words-styling';

export const Definitions: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);

  if (word.word.definitions.length)
    return (
      <Fragment>
        {word.word.definitions.map((el: string, index: number) => {
          return (
            <StyledDefinition key={index} data-testid={'definitions'}>
              {el}
            </StyledDefinition>
          );
        })}
      </Fragment>
    );
  return <StyledFakeWord>FAKE WORD</StyledFakeWord>;
};

export default Definitions;
