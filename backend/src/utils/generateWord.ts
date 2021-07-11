import { kanjiList } from './kanjiArray';
import { generateRandomNumber } from './generateRandomNumber';

// Kanji indexes
const min: number = 0;
const max: number = kanjiList.length - 1;
// Generate a word or not
const generateRandomWord: number = 1;
const dontGenerateRandomWord: number = 0;

// Generate word
// Due to a large number of possibilities, the generated word will most likely not be a real word. To counter this, first I'm gonna roll a number - either 0 or 1. If 0 is rolled then generate a random word, which has a chance of being a real word. If 1 is rolled then only generate the first kanji and while checking whether word is real (wordCheck()), pull an actual existing word from dictionary.
export const generateWord = () => {
  const firstIndex: number = generateRandomNumber(min, max);
  const secondIndex: number = generateRandomNumber(min, max);

  const generateWordOrDont: number = generateRandomNumber(
    dontGenerateRandomWord,
    generateRandomWord
  );
  const firstKanji: string = kanjiList[firstIndex];
  if (generateWordOrDont === generateRandomWord) {
    let secondKanji: string;
    // If kanji is repeating, replace it with noma
    if (firstIndex === secondIndex) secondKanji = '々';
    else secondKanji = kanjiList[secondIndex];
    const word: string = firstKanji + secondKanji;
    return word;
  } else return firstKanji;
};
