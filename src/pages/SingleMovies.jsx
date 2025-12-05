import { useEffect, useState } from 'react';
import { getMoviesByID } from '../api';
import { useParams } from 'react-router-dom';

export const SingleMovies = () => {
  const [movie, setMovie] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await getMoviesByID(id);
        setMovie(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  console.log(movie);

  return <div>SingleMovies</div>;
};
