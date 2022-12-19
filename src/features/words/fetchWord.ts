import axios from 'axios';
import { WordDto } from './wordsSlice';

export const fetchWord = async () => {
  try {
    const { data }: { data: WordDto } = await axios.get(
      `${process.env.REACT_APP_API}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
