import assets from '../assets';
import { Menu, Search } from '../components';
import './header.css';

export const Header = () => {
  return (
    <header className="py-1 header">
      <div className="max-w-[1280px] header-box px-3">
        <img
          className="cursor-pointer logo-img"
          src={assets.logo}
          alt="company logo"
        />
        {/* Menu qismi */}

        <Menu />

        {/* Search qismi */}

        <Search />
      </div>
    </header>
  );
};
