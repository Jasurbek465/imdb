import React, { useEffect, useState } from 'react';
import { Animation } from './Animation';
import { Models } from './Models';
import { Movies } from './Movies';
import { getALLTopMovies } from '../api';

export const Home = () => {


  return (
    <div>
      {/* Animation */}
      <Animation />
      
      {/* MOdels */}
      <Models />

      {/* Movies */}
      <Movies />
    </div>
  );
};
