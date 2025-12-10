import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  config.headers = {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'imdb236.p.rapidapi.com',
  };

  return config;
});
