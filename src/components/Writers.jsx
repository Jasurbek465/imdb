import React from 'react';

export const Writers = () => {
  return (
    <div className="writers">
      {/* Director */}
      <div className="writers-row">
        <div className="writers-label">
          <span>Director</span>
        </div>
        <div className="writers-content">
          <a href="#!">Cridtofer Nolan</a>
        </div>
      </div>

      {/* Writers */}
      <div className="writers-row">
        <div className="writers-label">
          <span>Writers</span>
        </div>
        <div className="writers-content">
          <a href="#!">Jonathan Nolan</a> • <a href="#!">Christopher Nolan</a>
        </div>
      </div>

      {/* All cast & crew */}
      <div className="writers-row writers-more">
        <div className="writers-more-text">
          <a href="#!">All cast & crew</a>
        </div>
        <div className="writers-more-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="icon-chevron"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
          </svg>
        </div>
      </div>

      {/* Production */}
      <div className="writers-row writers-more">
        <div className="writers-more-text">
          <a href="#!">Production, box office & more at IMDbPro</a>
        </div>
        <div className="writers-more-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="ipc-icon ipc-icon--launch"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path d="M16 16.667H8A.669.669 0 0 1 7.333 16V8c0-.367.3-.667.667-.667h3.333c.367 0 .667-.3.667-.666C12 6.3 11.7 6 11.333 6h-4C6.593 6 6 6.6 6 7.333v9.334C6 17.4 6.6 18 7.333 18h9.334C17.4 18 18 17.4 18 16.667v-4c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667V16c0 .367-.3.667-.667.667zm-2.667-10c0 .366.3.666.667.666h1.727L9.64 13.42a.664.664 0 1 0 .94.94l6.087-6.087V10c0 .367.3.667.666.667.367 0 .667-.3.667-.667V6h-4c-.367 0-.667.3-.667.667z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
