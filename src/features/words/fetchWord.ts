import axios from 'axios';

export const fetchWord = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
