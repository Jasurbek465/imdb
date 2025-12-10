import { API } from './api';

export const getALLTopMovies = async () => {
  const res = await API.get('/api/imdb/most-popular-movies');
  return await res.data;
};
