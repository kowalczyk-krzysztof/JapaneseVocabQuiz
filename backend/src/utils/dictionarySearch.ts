const dictionary = require('../../data/jmdict.json');

interface WordText {
  text: string;
}
export interface DictionaryObject {
  kanji: [{ text: string }];
  kana: [{ text: string }];
  sense: [
    {
      gloss: WordText[];
    }
  ];
}

// Search the dictionary. If inputWord is one kanji then find words containing it. If inputWord is two-kanji word then search for exact match.
export const dictionarySearch = (inputWord: string): DictionaryObject[] => {
  if (inputWord.length === 1) {
    return dictionary.filter((el: DictionaryObject) => {
      return el.kanji.some((el) => el.text.includes(inputWord));
    });
  } else {
    return dictionary.filter((el: DictionaryObject) => {
      return el.kanji.some((el) => el.text === inputWord);
    });
  }
};
