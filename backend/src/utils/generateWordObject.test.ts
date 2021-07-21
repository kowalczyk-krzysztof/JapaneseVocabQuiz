import { DictionaryObject } from './dictionarySearch';
import { generateWordObject, Word } from './generateWordObject';

describe('generating word object from array of words', () => {
  test('generates an object containing information about word 絵上', () => {
    const words: DictionaryObject[] = [];
    const inputWord: string = '絵上';
    const expectedResult: Word = {
      word: '絵上',
      wordExists: false,
      reading: '',
      definitions: [],
    };
    expect(generateWordObject(words, inputWord)).toEqual(expectedResult);
  });
  test('generates an object containing information about word 輝石', () => {
    const inputWord: string = '輝石';
    const words: DictionaryObject[] = [
      {
        kanji: ['輝石'],
        kana: ['きせき'],
        definition: [['pyroxene', 'augite']],
      },
    ];
    const expectedResult: Word = {
      word: '輝石',
      wordExists: true,
      reading: 'きせき',
      definitions: ['pyroxene', 'augite'],
    };
    expect(generateWordObject(words, inputWord)).toEqual(expectedResult);
  });
  test('generates an object containing information about word found at randomly generated index in words array', () => {
    const inputWord: string = '勝';
    const words: DictionaryObject[] = [
      {
        kanji: ['自負'],
        kana: ['じふ'],
        definition: [
          [
            'pride',
            'self-confidence',
            'thinking highly of oneself',
            `being proud of one's abilities or achievements`,
          ],
        ],
      },
      {
        kanji: ['勝負'],
        kana: ['しょうぶ'],
        definition: [['victory or defeat']],
      },
    ];
    const index = jest.fn().mockReturnValue(1);
    const expectedResult: Word = {
      word: '勝負',
      wordExists: true,
      reading: 'しょうぶ',
      definitions: ['victory or defeat'],
    };
    expect(generateWordObject(words, inputWord, index)).toEqual(expectedResult);
  });
});
