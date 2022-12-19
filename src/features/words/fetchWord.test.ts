import axios from 'axios';
import { fetchWord } from './fetchWord';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetching words', () => {
  it('fetches new word from API', async () => {
    const data = {
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
