import React from "react";
import CardUnid from "../CardUnid";
import "./styles.css";

function Card() {
  return (
    <div>
      <h3>Lista de alimentos</h3>
      <div className="card-container">
        <div className="card-wrapper">
          <ul className="card-item">
            <CardUnid
              src="images/img1.jpg"
              text="Delicioso Hamburguer com batatas fritas"
              label="Hamburguer"
            />
            <CardUnid
              src="images/img2.jpg"
              text="Um dos melhores sabores do Brasil"
              label="Cachorro quente"
            />
            <CardUnid
              src="images/img3.jpg"
              text="Massa super suave e com gostinho muito italiano"
              label="Pizza"
            />
            <CardUnid
              src="images/img4.jpg"
              text="Para matar esse calor, com amendoim, oreo ou morango"
              label="Milk Shake"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Card;
