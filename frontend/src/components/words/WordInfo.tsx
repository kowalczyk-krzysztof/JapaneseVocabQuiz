import { FC, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  wordsSelector,
  WordObject,
  SET_NEW_WORD,
  WordProps,
} from '../../features/words/wordsSlice';
import {
  Game,
  gameSelector,
  SET_TIMER_START,
} from '../../features/game/gameSlice';
// Components
import { DisplayWord } from './DisplayWord';
import { Definitions } from './Definitions';
// Utils
import { fetchWord } from '../../features/words/fetchWord';
// Styling
import { StyledReading } from './words-styling';
import { StyledWordContainer } from '../../createGlobalStyle';

export const WordInfo: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const word: WordObject = useSelector(wordsSelector);
  const game: Game = useSelector(gameSelector);

  useEffect(() => {
    const fetchAndSetWord = async () => {
      const res = await fetchWord();
      if (res) {
        const wordObject: WordProps = {
          word: res.data.word,
          wordExists: res.data.wordExists,
          reading: res.data.reading,
          definitions: res.data.definitions,
        };

        dispatch(SET_NEW_WORD(wordObject));
        dispatch(SET_TIMER_START());
      }
    };
    if (word.wordLoading) fetchAndSetWord();
  }, [dispatch, word.wordLoading]);

  if (game.is_question_answered && !word.wordLoading)
    return (
      <StyledWordContainer data-testid={'wordinfo'}>
        <DisplayWord />
        <StyledReading>{word.word.reading}</StyledReading>
        <Definitions />
      </StyledWordContainer>
    );
  return (
    <StyledWordContainer data-testid={'wordinfo'}>
      <DisplayWord />
    </StyledWordContainer>
  );
};

export default WordInfo;
