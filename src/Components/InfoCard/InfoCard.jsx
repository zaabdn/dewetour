import React from "react";
import "./InfoCard.css";
import { infoTours } from "../Data/Info";
import hibiscus from "../../Images/hibiscus.png";

function InfoCard() {
  return (
    <div className="content">
      <img src={hibiscus} alt="Gambar" align="right" className="hibiscus" />
      {infoTours.map((info) => (
        <div className="card" key={info.id}>
          <center>
            <img src={info.img} alt="Gambar" />
            <h3>{info.title}</h3>
            <p>{info.detail}</p>
          </center>
        </div>
      ))}
    </div>
  );
}

export default InfoCard;
