import React from 'react';
import { Actors } from '../components/Actors';
import { Writers } from '../components/Writers';
import { Rating } from '../components/Rating';

export const MovieAbout = () => {
  return (
    <div>
      <Actors />
      <Writers />
      <Rating />
    </div>
  );
};
