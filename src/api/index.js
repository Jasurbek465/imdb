import axios from 'axios';
import { API } from './api';
import { API_PATH } from '../config';
export { getALLTopMovies } from './top-movies';

export const getALLTopMovies = async () => {
  return (await API.get(API_PATH.TOP_MOVIES)).data;
};

export const getMoviesByID = async (id) => {
  return (await API.get(`/api/imdb/${id}`)).data;
};

export const getAuthor = async (id) => {
  return (await axios.get(`/api/imdb/name/${id}`)).data;
};
