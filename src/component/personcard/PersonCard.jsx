import React from "react";
import "./personcard.scss";
export default function PersonCard({
  name = "Jeremy Robson",
  img = "/images//image-jeremy.png",
  setFilter,filter
}) {
  const handleClick = (e) => {
    setFilter(e.target.value);
  };
  const isDailyActive = filter === "daily";
  const isWeeklyActive = filter === "weekly";
  const isMonthlyActive = filter === "monthly";

  return (
    <article className="Person-card-position person-card">
      <section className="person-card-information">
        <div className="person-card-information-image-container">
          <img src={img} alt="user avatar" />
        </div>
        <div className="person-card-information-name-container">
          <p>Report for</p>
          <h1>{name}</h1>
        </div>
      </section>
      <div className="person-card-filters-container">
        <button
          className={`${isDailyActive && "person-card-filters-active"}`}
          onClick={handleClick}
          value="daily"
        >
          Daily
        </button>
        <button
          className={`${isWeeklyActive && "person-card-filters-active"}`}
          onClick={handleClick}
          value="weekly"
        >
          Weekly
        </button>
        <button
          className={`${isMonthlyActive && "person-card-filters-active"}`}
          onClick={handleClick}
          value="monthly"
        >
          Monthly
        </button>
      </div>
    </article>
  );
}
