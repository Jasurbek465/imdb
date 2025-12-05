import assets from '../assets';
import { Menu, Search } from '../components';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <header className="py-1 header">
      <div className="max-w-[1280px] header-box px-3">
        <div className="container-logo-img">
          <Link to="/">
            {' '}
            <img
              className="cursor-pointer logo-img"
              src={assets.logo}
              alt="company logo"
            />
          </Link>
        </div>

        <Menu />
        <Search />
        
      </div>
    </header>
  );
};
