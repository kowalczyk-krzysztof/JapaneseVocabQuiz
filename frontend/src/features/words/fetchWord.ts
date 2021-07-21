import axios, { AxiosResponse } from 'axios';

export const fetchWord = async () => {
  try {
    const res: AxiosResponse = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/game/wordcheck`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
