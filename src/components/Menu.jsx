import { useState } from 'react';
import assets from '../assets';
import { Modal } from './Modal';
import './Menu.css';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex px-4 items-center menu"
        onClick={() => setIsOpen(true)}
      >
        <img src={assets.menu} alt="menu" />
        <span className="ml-1" style={{ color: 'white' }}>
          Menu
        </span>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
