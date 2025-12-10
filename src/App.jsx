import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, MoviesTop } from './pages';
import { Footer, Header } from './layout';
import { MovieAbout } from './pages/MovieAbout';
import { SingleMovies } from './pages/SingleMovies';
import { ActorPage } from './pages/ActorPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoviesTop" element={<MoviesTop />} />
        <Route path="/singleMovie/:id" element={<SingleMovies />} />
        <Route path="/actor/:id" element={<ActorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
