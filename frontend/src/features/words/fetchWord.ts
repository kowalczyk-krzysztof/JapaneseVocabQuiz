import axios from 'axios';

export const fetchWord = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:8080/api/v1/game/wordcheck`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
