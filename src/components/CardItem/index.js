import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="card-item">
        <div className={"card-div"}>
          <figure className="card-wrap" data-category={props.label}>
            <img src={props.src} alt="" className="card-imagem" />
          </figure>
          <div className="card-info">
            <h6 className="card-text">{props.text}</h6>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
