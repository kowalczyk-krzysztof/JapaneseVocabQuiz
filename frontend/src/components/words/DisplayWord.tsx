import { FC, useState, useEffect } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { wordsSelector, WordObject } from '../../features/words/wordsSlice';
// Styling
import { StyledWord } from './words-styling';
import {
  StyledLoadingContainer,
  StyledLoadingDot,
} from '../../createGlobalStyle';

export const DisplayWord: FC = (): JSX.Element => {
  const word: WordObject = useSelector(wordsSelector);
  const [dateTime, setDateTime] = useState<number>(0);

  useEffect(() => {
    if (word.wordLoading) {
      const interval = setInterval(() => {
        // Using it like this, I don't need to have dateTime as dependency
        setDateTime((dateTime) => dateTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else setDateTime(0);
  }, [word.wordLoading]);

  // Only render loading dots if it's taking over 3 seconds to fetch word
  if (dateTime >= 3)
    return (
      <StyledLoadingContainer data-testid={'loadingdots'}>
        <StyledLoadingDot />
        <StyledLoadingDot />
        <StyledLoadingDot />
      </StyledLoadingContainer>
    );
  return <StyledWord data-testid={'word'}>{word.word.word}</StyledWord>;
};

export default DisplayWord;
