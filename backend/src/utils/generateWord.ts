import { kanjiList } from './kanjiArray';
import { generateRandomNumber } from './generateRandomNumber';

// Kanji indexes
const min: number = 0;
const max: number = kanjiList.length - 1;

// Due to a large number of possibilities, the generated word will most likely not be a real word. To counter this, first I'm gonna roll a number - either 0 or 1. If 0 is rolled then generate a random word, which has a chance of being a real word. If 1 is rolled then only generate  one kanji and search for words containing it in dictionary
export const generateWord = () => {
  const firstIndex: number = generateRandomNumber(min, max);
  const secondIndex: number = generateRandomNumber(min, max);

  const generateWordOrDont: number = generateRandomNumber(0, 1);
  const firstKanji: string = kanjiList[firstIndex];
  if (generateWordOrDont === 1) {
    let secondKanji: string;
    // If kanji is repeating, replace it with noma
    if (firstIndex === secondIndex) secondKanji = '々';
    else secondKanji = kanjiList[secondIndex];
    const word: string = firstKanji + secondKanji;
    return word;
  } else return firstKanji;
};
