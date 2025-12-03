import { Link } from 'react-router-dom';
import '../pages/model.css';

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-fullscreen')) {
      onClose();
    }
  };

  return (
    <div className="modal-fullscreen" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <h2>Movies</h2>
        <Link className="info-malumot" to="/movies-top">
          Top 250 Movies
        </Link>

        <div className="close-btn">
          <button onClick={onClose}>X</button>
        </div>
      </div>
    </div>
  );
};
