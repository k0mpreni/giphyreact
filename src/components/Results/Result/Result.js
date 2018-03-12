import React from "react";
import classNames from 'classnames';
import "./Result.css";

import Modal from "../Modal/Modal";

const Result = ({ favorites, gifInfo, onToggleFavorite, favorited }) => (
  <div className="Result">
    <Modal
      onToggleFavorite={onToggleFavorite}
      hrefLink={gifInfo.url}
      gif={gifInfo}
    />
    <img
      className={classNames('ResultImage', {
        favorited,
      })}
      id={gifInfo.id}
      src={gifInfo.images.fixed_height_downsampled.url}
      alt={gifInfo.slug}
    />
  </div>
);

export default Result;
