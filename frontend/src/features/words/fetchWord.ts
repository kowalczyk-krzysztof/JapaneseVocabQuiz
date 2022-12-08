import axios from 'axios';

export const fetchWord = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/game/wordcheck`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
