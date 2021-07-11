import axios, { AxiosResponse } from 'axios';

export const generateWord = async () => {
  const res: AxiosResponse = await axios.get(
    `${process.env.REACT_APP_API}/api/v1/game/newword`
  );
  return res.data.word;
};
