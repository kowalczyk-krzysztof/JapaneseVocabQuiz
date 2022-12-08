import axios from 'axios';
import { WordProps } from './wordsSlice';
import { fetchWord } from './fetchWord';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchData', () => {
  test('fetches new word from my API', async () => {
    const data: { data: WordProps } = {
      data: {
        word: '勝負',
        wordExists: true,
        reading: 'しょうぶ',
        definitions: ['victory or defeat'],
      },
    };
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchWord()).resolves.toEqual(data);
  });
});
