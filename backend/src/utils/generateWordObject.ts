import { DictionaryObject } from './dictionarySearch';
import { generateRandomNumber } from './generateRandomNumber';

export interface Word {
  word: string;
  wordExists: boolean;
  reading: string;
  definitions: string[];
}

export const generateWordObject = (
  words: DictionaryObject[],
  generatedWord: string,
  index?: typeof generateRandomNumber
): Word => {
  if (words.length === 0) {
    let whatWord: string;
    if (generatedWord.length === 1) whatWord = generatedWord + '々';
    else whatWord = generatedWord;
    return {
      word: whatWord,
      wordExists: false,
      reading: '',
      definitions: [],
    };
  } else if (words.length > 1) {
    const indexOfWord: number = index!(0, words.length - 1);
    return {
      word: words[indexOfWord].kanji[0].text,
      wordExists: true,
      reading: words[indexOfWord].kana[0].text,
      definitions: words[indexOfWord].sense[0].gloss.map(
        (el: { text: string }) => el.text
      ),
    };
  } else
    return {
      word: words[0].kanji[0].text,
      wordExists: true,
      reading: words[0].kana[0].text,
      definitions: words[0].sense[0].gloss.map(
        (el: { text: string }) => el.text
      ),
    };
};
