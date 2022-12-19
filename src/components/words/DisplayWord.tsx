import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { wordsSelector } from '../../features/words/wordsSlice';

export const DisplayWord = () => {
  const word = useSelector(wordsSelector);
  const [dateTime, setDateTime] = useState(0);

  useEffect(() => {
    if (word.wordLoading) {
      const interval = setInterval(() => {
        setDateTime((dateTime) => dateTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else setDateTime(0);
  }, [word.wordLoading]);

  // Only render loading dots if it's taking over 3 seconds to fetch word
  if (dateTime >= 3)
    return (
      <div>
        <div />
        <div />
        <div />
      </div>
    );
  return <div>{word.word.word}</div>;
};

export default DisplayWord;
