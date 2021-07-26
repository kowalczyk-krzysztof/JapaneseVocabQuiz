const dictionary = require('../../data/jmdict.json');
export interface DictionaryObject {
  kanji: string[];
  kana: string[];
  definition: string[][];
}

// Search the dictionary. If inputWord is one kanji then find words containing it. If inputWord is two-kanji word then search for exact match.
export const dictionarySearch = (inputWord: string): DictionaryObject[] => {
  if (inputWord.length === 1)
    return dictionary.filter((el: DictionaryObject) => {
      return el.kanji.some((el) => el.includes(inputWord));
    });
  return dictionary.filter((el: DictionaryObject) => {
    return el.kanji.some((el) => el === inputWord);
  });
};
