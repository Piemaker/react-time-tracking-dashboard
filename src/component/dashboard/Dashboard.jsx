import React, { useState } from "react";
import Card from "../card/Card";
import "./dashboard.scss";
import data from "../../data/data";
import PersonCard from "../personcard/PersonCard";
export default function Dashboard() {
  const [filter, setFilter] = useState("daily");
  const Cards = data.map((cardData,index) => {
    return <Card key = {index} {...{...cardData,filter}} />;
  });
  return (
    <section className="dashboard">
      <PersonCard {...{setFilter,filter}} />
      {Cards}
    </section>
  );
}
