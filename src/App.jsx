import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, MoviesTop } from './pages';
import { Footer, Header } from './layout';
import { MovieAbout } from './pages/MovieAbout';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MovieAbout />} />
        <Route path="/MoviesTop" element={<MoviesTop />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
