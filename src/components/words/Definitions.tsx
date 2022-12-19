import { useSelector } from 'react-redux';
import { wordsSelector } from '../../features/words/wordsSlice';

export const Definitions = () => {
  const { definitions } = useSelector(wordsSelector);

  return (
    <div>
      {definitions.length
        ? definitions.map((definition) => (
            <div key={definition}>{definition}</div>
          ))
        : 'FAKE WORD'}
    </div>
  );
};
