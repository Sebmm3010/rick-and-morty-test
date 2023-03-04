import axios from 'axios';

export const getApiData = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return null;
  }
};
