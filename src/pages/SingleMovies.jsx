import { useEffect, useState } from 'react';
import { getMoviesByID } from '../api';
import { useParams } from 'react-router-dom';
import { Malumotlar } from '../components/Malumotlar';
import { Actors } from '../components/Actors';
import { Writers } from '../components/Writers';
import { Rating } from '../components/Rating';

export const SingleMovies = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

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
  }, [id]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Malumotlar malumot={'Top Cast'} />

        
        {movie.cast?.length > 0 ? (
          movie.cast.map((actor) => <Actors key={actor.id} actor={actor} />)
        ) : (
          <p className="text-white">No cast information available</p>
        )}
      </div>

      <Writers />
      <Rating />
    </div>
  );
};
