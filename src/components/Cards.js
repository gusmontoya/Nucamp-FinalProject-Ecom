import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Explore our seasonal and occational tableware collections!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/kanto.jpg"
              text="Stoic modern ceramics"
              label="Modern"
              path="/services"
            />
            <CardItem
              src="images/modern-2.png"
              text="Earthy modern ceramics"
              label="Earthy"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/navy-blue-Florian-porcelain-sets.webp"
              text="Classic porcelain"
              label="Porcelain"
              path="/services"
            />
            <CardItem
              src="images/pitcher-cambria.jpg"
              text="Modern classics"
              label="Classics"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
