import React from "react";
import { groupImage } from "../Data/Image";
import "./Card.css";
import palm from "../../Images/palm.png";

function Card() {
  return (
    <div className="group">
      <img src={palm} alt="Gambar" align="left" />
      <h1 className="title-group">Group Tour</h1>
      <div className="groups">
        {groupImage.map((group) => (
          <div className="group-content" key={group.id}>
            <div className="box">
              <img src={group.img} alt="Gambar" align="Center" />
              <p className="text">{group.part}</p>
            </div>
            <h4>{group.title}</h4>
            <h5>{group.price}</h5>
            <p className="place">{group.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
