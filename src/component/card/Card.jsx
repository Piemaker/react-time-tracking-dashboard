import React from 'react'
import "./card.scss";
// ! this doens't work but using it directly in src does. HAS TO BE IN PUBLIC FOLDER

export default function Card({ title, img, color, timeframes,filter} ) {
  return (
    <article className={`card  ${title}-card `}>
      <div className="card-banner-container" style={{ backgroundColor: color }}>
        <div className="card-banner" style={{ backgroundColor: color }}>
          <img src={img} alt="decoration-img" />
        </div>
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
        <div className="card-description-report">
          <h2 className="card-description-report-duration">
            {timeframes[filter].current}hrs
          </h2>
          <p className="card-description-report-status">
            last week - {timeframes[filter].previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
}
