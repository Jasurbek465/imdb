import assets from '../assets';
import React, { useEffect, useState } from 'react';
import { getALLTopMovies } from '../api';
import { Malumotlar } from '../components/Malumotlar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const res = await getALLTopMovies();
        setTopMovies(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, []);

  return (
    <div className="container movies">
      {/* Title */}
      <Malumotlar
        malumot={'Top Movies'}
        movieReview={'TV shows and movies just for you'}
      />

      {/* Movie List */}
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="movies-list"
      >
        {topMovies.slice(0, 18).map((serie) => (
          <SwiperSlide key={serie.id}>
            <div className="movie-card">
              {/* Movie poster */}
              <Link
                to={`/SingleMovies/${serie.id}`}
                className="movie-image-wrapper"
              >
                <img
                  src={serie.primaryImage}
                  alt="Movie poster"
                  className="movie-image"
                  width={193}
                  height={287.09}
                />

                <div className="movie-overlay">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="ipc-icon ipc-icon--add ipc-icon--inline"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                  </svg>
                </div>
                <div className="pilusni-tagidagi">
                  <svg
                    className="ipc-watchlist-ribbon__bg"
                    width="24px"
                    height="34px"
                    viewBox="0 0 24 34"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                  >
                    <polygon
                      className="ipc-watchlist-ribbon__bg-ribbon"
                      fill="#000000"
                      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                    ></polygon>
                    <polygon
                      className="ipc-watchlist-ribbon__bg-hover"
                      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                    ></polygon>
                    <polygon
                      className="ipc-watchlist-ribbon__bg-shadow"
                      points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                    ></polygon>
                  </svg>
                </div>
              </Link>

              {/* Info */}
              <div className="movie-info">
                <div>
                  <div className="movie-rating">
                    <div className="rating-info">
                      <div className="movies-rating-star">
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          role="presentation"
                        >
                          <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                        </svg>
                      </div>
                      <span className="movie-rating-number">
                        {serie.averageRating}
                      </span>
                    </div>
                    <div className="movie-rating-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="ipc-icon ipc-icon--star-border-inline"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        role="presentation"
                      >
                        <path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="movie-name">{serie.primaryTitle}</h3>
                </div>

                <div className="watch-animation">
                  <a className="watch-now-link" href="#!">
                    <span className="watch">Watch now</span>
                    <div className="img-watch-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        role="presentation"
                      >
                        <path d="M16 16.667H8A.669.669 0 0 1 7.333 16V8c0-.367.3-.667.667-.667h3.333c.367 0 .667-.3.667-.666C12 6.3 11.7 6 11.333 6h-4C6.593 6 6 6.6 6 7.333v9.334C6 17.4 6.6 18 7.333 18h9.334C17.4 18 18 17.4 18 16.667v-4c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667V16c0 .367-.3.667-.667.667zm-2.667-10c0 .366.3.666.667.666h1.727L9.64 13.42a.664.664 0 1 0 .94.94l6.087-6.087V10c0 .367.3.667.666.667.367 0 .667-.3.667-.667V6h-4c-.367 0-.667.3-.667.667z"></path>
                      </svg>
                    </div>
                  </a>

                  <a href="#!" className="movie-trailer-link">
                    <div className="movie-trailer-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        role="presentation"
                      >
                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path>
                      </svg>
                    </div>
                    Trailer
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
