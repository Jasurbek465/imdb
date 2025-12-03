import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Footer, Header } from './layout';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies-top" element={<MoviesTop />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </>
  );
}

export default App;
