import React, { useEffect, useState } from 'react';
import { Animation } from './Animation';
import { Models } from './Models';
import { Movies } from './Movies';
import { getALLTopMovies } from '../api';
import { WatchList } from './SeeMovies';

export const Home = () => {
  return (
    <div>
      {/* Animation */}
      <Animation />

      {/* MOdels */}
      <Models />

      {/* Movies */}
      <Movies />

      {/* Watch list */}
      <WatchList />
    </div>
  );
};
