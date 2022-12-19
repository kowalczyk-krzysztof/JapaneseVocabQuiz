import { useSelector } from 'react-redux';
import { wordsSelector } from '../../features/words/wordsSlice';

export const Definitions = () => {
  const word = useSelector(wordsSelector);

  if (word.word.definitions.length)
    return (
      <>
        {word.word.definitions.map((el: string, index: number) => {
          return <div key={index}>{el}</div>;
        })}
      </>
    );
  return <div>FAKE WORD</div>;
};

export default Definitions;
