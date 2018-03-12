import React from "react";

import "./Modal.css";

const Modal = ({ gif, onToggleFavorite, hrefLink }) => {
  return (
    <div className="Modal">
      <button className="FavBtn" onClick={() => onToggleFavorite(gif)} id={gif.id}/>
      <a href={hrefLink} target="_blank" rel="noopener noreferrer">
        Link
      </a>
    </div>
  );
};
export default Modal;
