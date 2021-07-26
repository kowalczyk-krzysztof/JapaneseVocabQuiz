import { kanjiList } from './kanjiArray';
import { generateRandomNumber } from './generateRandomNumber';

// Due to a large number of possibilities, the generated word will most likely not be a real word. To counter this, first I'm gonna roll a number - either 0 or 1. If 0 is rolled then generate a random word, which has a chance of being a real word. If 1 is rolled then only generate  one kanji and search for words containing it in dictionary

export const generateWord = (
  index1: typeof generateRandomNumber,
  generateOrNot: typeof generateRandomNumber,
  index2?: typeof generateRandomNumber
): string => {
  const numberOfKanjis: number = kanjiList.length - 1;
  const firstIndex: number = index1(0, numberOfKanjis);
  const firstKanji: string = kanjiList[firstIndex];

  if (generateOrNot(0, 1) === 1) {
    const secondIndex: number = index2!(0, numberOfKanjis);
    let secondKanji: string;
    // If kanji is repeating, replace it with noma
    if (firstIndex === secondIndex) secondKanji = '々';
    else secondKanji = kanjiList[secondIndex];
    const word: string = firstKanji + secondKanji;
    return word;
  }
  return firstKanji;
};
