import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wordsSelector, SET_NEW_WORD } from '../../features/words/wordsSlice';
import { gameSelector, SET_TIMER_START } from '../../features/game/gameSlice';
import { DisplayWord } from './DisplayWord';
import { Definitions } from './Definitions';
import { fetchWord } from '../../features/words/fetchWord';

export const WordInfo = () => {
  const dispatch = useDispatch();
  const word = useSelector(wordsSelector);
  const game = useSelector(gameSelector);

  useEffect(() => {
    const fetchAndSetWord = async () => {
      const res = await fetchWord();

      if (res) {
        const wordObject = {
          word: res.word,
          wordExists: res.wordExists,
          reading: res.reading,
          definitions: res.definitions,
        };
        dispatch(SET_NEW_WORD(wordObject));
        dispatch(SET_TIMER_START());
      }
    };
    if (word.wordLoading) fetchAndSetWord();
  }, [dispatch, word.wordLoading]);

  if (game.isAnswered && !word.wordLoading)
    return (
      <div>
        <DisplayWord />
        <div>{word.word.reading}</div>
        <Definitions />
      </div>
    );
  return (
    <div>
      <DisplayWord />
    </div>
  );
};

export default WordInfo;
