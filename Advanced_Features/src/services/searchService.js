import axios from 'axios';

export const searchServices = async (query) => {
  const response = await axios.get(`/api/search?query=${query}`);
  return response.data;
};