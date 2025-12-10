import React from 'react';
import assets from '../assets';
import './model.css';
import { Malumotlar } from '../components/Malumotlar';

export const Models = () => {
  return (
    <div className="container models">
      {/* Header */}
      <Malumotlar malumot={"Top Models"} />

      {/* Model item */}
      <div className="model-cards">
        <div className="model-card">
          <div className="model-image-wrapper">
            <img
              src={assets.Kal}
              alt="Modelni rasmi"
              width={110}
              height={110}
              className="model-image"
            />
          </div>

          <p className="model-rating">
            14{' '}
            <span className="model-rating-change">
              {'('}
              <img
                src={assets.reytingTopArr}
                alt="strelkacha"
                className="model-rating-icon"
              />
              {'9.120)'}
            </span>
          </p>

          <b className="model-name">Lias Gremory</b>
        </div>
        <div className="model-card">
          <div className="model-image-wrapper">
            <img
              src={assets.Kal}
              alt="Modelni rasmi"
              width={110}
              height={110}
              className="model-image"
            />
          </div>

          <p className="model-rating">
            14{' '}
            <span className="model-rating-change">
              <img
                src={assets.reytingTopArr}
                alt="strelkacha"
                className="model-rating-icon"
              />
              9.120
            </span>
          </p>

          <b className="model-name">Lias Gremory</b>
        </div>
        <div className="model-card">
          <div className="model-image-wrapper">
            <img
              src={assets.Kal}
              alt="Modelni rasmi"
              width={110}
              height={110}
              className="model-image"
            />
          </div>

          <p className="model-rating">
            14{' '}
            <span className="model-rating-change">
              <img
                src={assets.reytingTopArr}
                alt="strelkacha"
                className="model-rating-icon"
              />
              9.120
            </span>
          </p>

          <b className="model-name">Lias Gremory</b>
        </div>
        <div className="model-card">
          <div className="model-image-wrapper">
            <img
              src={assets.Kal}
              alt="Modelni rasmi"
              width={110}
              height={110}
              className="model-image"
            />
          </div>

          <p className="model-rating">
            14{' '}
            <span className="model-rating-change">
              <img
                src={assets.reytingTopArr}
                alt="strelkacha"
                className="model-rating-icon"
              />
              9.120
            </span>
          </p>

          <b className="model-name">Lias Gremory</b>
        </div>
        <div className="model-card">
          <div className="model-image-wrapper">
            <img
              src={assets.Kal}
              alt="Modelni rasmi"
              width={110}
              height={110}
              className="model-image"
            />
          </div>

          <p className="model-rating">
            14{' '}
            <span className="model-rating-change">
              <img
                src={assets.reytingTopArr}
                alt="strelkacha"
                className="model-rating-icon"
              />
              9.120
            </span>
          </p>

          <b className="model-name">Lias Gremory</b>
        </div>
        <div className="model-card">
          <div className="model-image-wrapper">
            <img
              src={assets.Kal}
              alt="Modelni rasmi"
              width={110}
              height={110}
              className="model-image"
            />
          </div>

          <p className="model-rating">
            14{' '}
            <span className="model-rating-change">
              <img
                src={assets.reytingTopArr}
                alt="strelkacha"
                className="model-rating-icon"
              />
              9.120
            </span>
          </p>

          <b className="model-name">Lias Gremory</b>
        </div>
      </div>
    </div>
  );
};
