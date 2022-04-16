import React from 'react'
import "./card.scss";
// ! this doens't work but using it directly in src does. HAS TO BE IN PUBLIC FOLDER
// import Elipses from "/images/icon-ellipsis.svg"

export default function Card({ title, img, color, timeframes } ) {
  console.log("🚀 ~ file: Card.jsx ~ line 5 ~ Card ~ title,img, color, timeframes", title, img, color, timeframes)
  return (
    <article className="card">
      <div className="card-banner" style={{ backgroundColor: color }}>
        <img src={img} alt="decoration-img" />
      </div>
      <div className="card-description">
        <div className="card-description-title-container">
          <h2 className="card-description-title-header">{title}</h2>
          <img
            src="/images/icon-ellipsis.svg"
            className="card-description-title-icon"
            alt="decoration-img"
          />
        </div>
        <h2 className="card-description-duration">32hrs</h2>
        <p className="card-description-status">last week - 36hrs</p>
      </div>
    </article>
  );
}
