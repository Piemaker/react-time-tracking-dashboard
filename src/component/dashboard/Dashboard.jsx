import React from 'react';
import Card from '../card/Card';
import "./dashboard.scss";
import data from "../../data/data";
export default function Dashboard() {
  const Cards = data.map(cardData => {
    return (
      <Card {...cardData}/>
    )
  })
  return (
    <section className='dashboard'>
      {Cards}
    </section>
  );
}
