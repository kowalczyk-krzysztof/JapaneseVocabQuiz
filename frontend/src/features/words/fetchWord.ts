import axios, { AxiosResponse } from 'axios';

export const fetchWord = async () => {
  const res: AxiosResponse = await axios.get(
    `${process.env.REACT_APP_API}/api/v1/game/wordcheck`
  );
  return res;
};
