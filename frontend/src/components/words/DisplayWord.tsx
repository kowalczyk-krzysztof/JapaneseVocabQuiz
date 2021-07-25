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
  const [dateTime, setDateTime] = useState(0);

  // This is so the loading dots only show up when it's taking over 2 seconds to load
  // Logic behind this - when clicking Start or New Word button I set state in Redux "word.wordLoading = true" and "word.loadingTime = Date.now()", fetch new word and after it's fetched set "word.wordLoading = false". When this component mounts, set a 2 sec timeout that will set local state dateTime to Date.now(). If the word is still loading and dateTime - word.loadingTime > 1 then render the loading dots

  useEffect(() => {
    const currentTime = setTimeout(() => {
      setDateTime(Date.now());
    }, 2000);
    return () => {
      clearInterval(currentTime);
    };
  }, []);

  if (word.wordLoading === true && dateTime - word.loadingTime > 1)
    return (
      <StyledLoadingContainer data-testid={'loadingdots'}>
        <StyledLoadingDot />
        <StyledLoadingDot />
        <StyledLoadingDot />
      </StyledLoadingContainer>
    );
  else return <StyledWord data-testid={'word'}>{word.word.word}</StyledWord>;
};

export default DisplayWord;
