import { API } from './api';
export { getALLTopMovies } from './top-movies';

export const getMoviesByID = async (id) => {
  return (await API.get(`/api/imdb/${id}`)).data;
};

const getAuthor = async (id) => {
  return await API.get(`/name/${id}`);
};
