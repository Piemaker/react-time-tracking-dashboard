import React from 'react'
import "./personcard.scss";
export default function PersonCard() {
  const handleClick = () => {
    
  }
  return (
    <article className="Person-card-position person-card">
      <section className="person-card-information">
      <div className="person-card-information-image-container">
        <img src="/images/image-jeremy.png" alt="" />
      </div>
      <div className="person-card-information-name-container">
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      </section>
      <div className="person-card-filters-container">
        <h2 className='person-card-filters-active' onClick={handleClick}>Daily</h2>
        <h2 onClick={handleClick}>Weakly</h2>
        <h2 onClick={handleClick}>Monthly</h2>
      </div>
    </article>
  );
}
