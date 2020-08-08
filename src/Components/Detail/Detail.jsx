import React, { useState } from "react";

import hotel from "../../Images/hotel.png";
import plane from "../../Images/plane.png";
import meal from "../../Images/meal.png";
import time from "../../Images/time.png";
import calender from "../../Images/calendar.png";

import { groupImage } from "../Data/Image";
import "./Detail.css";

import { Link } from "react-router-dom";

const Detail = ({ match }) => {
  const tour = groupImage.filter((detail) => {
    return detail.id == match.params.id;
  });

  const [number, setPlus] = useState(1);

  const total = number * tour[0].price;

  return (
    <div className="content-detail">
      <br />
      <br />
      <h1>{tour[0].title}</h1>
      <h4 style={{ color: "grey" }}>{tour[0].place}</h4>
      <img src={tour[0].img} alt="gambar" className="img-title" />
      <div>
        <h3>Information Trip</h3>
        <div className="facilities">
          <div className="facility">
            <p>Accomodation</p>
            <div style={{ display: "flex" }}>
              <img src={hotel} alt="hotel" className="img-accomodation" />
              <h5 style={{ marginTop: "0" }}>Hotel 4 Nights</h5>
            </div>
          </div>
          <div className="facility">
            <p>Transportation</p>
            <div style={{ display: "flex" }}>
              <img
                src={plane}
                alt="transportation"
                className="img-accomodation"
              />
              <h5 style={{ marginTop: "0" }}>Qatar Airwayss</h5>
            </div>
          </div>
          <div className="facility">
            <p>Eat</p>
            <div style={{ display: "flex" }}>
              <img src={meal} alt="eat" className="img-accomodation" />
              <h5 style={{ marginTop: "0" }}>Included as Itenary</h5>
            </div>
          </div>
          <div className="facility">
            <p>Duration</p>
            <div style={{ display: "flex" }}>
              <img src={time} alt="duration" className="img-accomodation" />
              <h5 style={{ marginTop: "0" }}>6 Day 4 Night</h5>
            </div>
          </div>
          <div className="facility">
            <p>Date Trip</p>
            <div style={{ display: "flex" }}>
              <img src={calender} alt="date" className="img-accomodation" />
              <h5 style={{ marginTop: "0" }}>26 August 2020</h5>
            </div>
          </div>
        </div>
        <div class="detail-description">
          <h3>Description</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="detail-price">
          <div align="left">
            <h2>{tour[0].price}/Person</h2>
          </div>
          <div align="right">
            <button className="detail btn" onClick={() => setPlus(number - 1)}>
              -
            </button>
            {number}
            <button className="detail btn" onClick={() => setPlus(number + 1)}>
              +
            </button>
          </div>
        </div>
        <hr />
        <div className="total">
          <h2>Total</h2>
          <h2 align="right">{tour[0].price}</h2>
        </div>
        <hr />
        <Link to={`/payment/${tour[0].id}`}>
          <button className="btn book">BOOK NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
