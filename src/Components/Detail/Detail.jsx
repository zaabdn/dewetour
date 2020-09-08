import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

import hotel from "../../Images/hotel.png";
import plane from "../../Images/plane.png";
import meal from "../../Images/meal.png";
import time from "../../Images/time.png";
import calender from "../../Images/calendar.png";
import { useQuery } from "react-query";
import "./Detail.css";
import { API } from "../Config/api";
import { useHistory } from "react-router-dom";

const Detail = (
  {
    match: {
      params: { id },
    },
  },
  showModalLogin
) => {
  let history = useHistory();
  const [dataTrip, setData] = useState([]);
  const [number, setPlus] = useState(1);

  const fetchDetailTrip = async () => {
    const response = await API.get(`/trip/${id}`);
    const resData = response.data.data;
    setData(resData);
  };

  const { isLoading } = useQuery("trips", fetchDetailTrip);

  if (number === 0) {
    setPlus(number + 1);
  }

  const [transaction] = useState({
    counterQty: number,
    total: number * dataTrip.price,
    status: "Waiting Payment",
    attachment: "kosong",
    tripId: id,
    userId: localStorage.id,
  });

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  const submitTransaction = (e) => {
    e.preventDefault();
    const dataTransaction = {
      counterQty: number,
      total: number * dataTrip.price,
      status: transaction.status,
      attachment: transaction.attachment,
      tripId: transaction.tripId,
      userId: transaction.userId,
    };
    API.post("/transaction", dataTransaction, config)
      .then((result) => {
        history.push(`/payment/${result.data.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App-detail">
      {isLoading || !dataTrip || !dataTrip?.country ? (
        <h1 style={{ marginTop: "150px" }}>Loading..</h1>
      ) : (
        <div className="content-detail" key={dataTrip.id}>
          <br />
          <br />
          <h1>{dataTrip.title}</h1>
          <h4 style={{ color: "grey" }}>{dataTrip.country.name}</h4>
          <img src={dataTrip.image} alt="gambar" className="img-title" />
          <div>
            <h3>Information Trip</h3>
            <div className="facilities">
              <div className="facility">
                <p>Accomodation</p>
                <div style={{ display: "flex" }}>
                  <img src={hotel} alt="hotel" className="img-accomodation" />
                  <h5 style={{ marginTop: "0" }}>{dataTrip.accomodation}</h5>
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
                  <h5 style={{ marginTop: "0" }}>{dataTrip.transportation}</h5>
                </div>
              </div>
              <div className="facility">
                <p>Eat</p>
                <div style={{ display: "flex" }}>
                  <img src={meal} alt="eat" className="img-accomodation" />
                  <h5 style={{ marginTop: "0" }}>{dataTrip.eat}</h5>
                </div>
              </div>
              <div className="facility">
                <p>Duration</p>
                <div style={{ display: "flex" }}>
                  <img src={time} alt="duration" className="img-accomodation" />
                  <h5 style={{ marginTop: "0" }}>
                    {dataTrip.day} Days {dataTrip.night} Nights
                  </h5>
                </div>
              </div>
              <div className="facility">
                <p>Date Trip</p>
                <div style={{ display: "flex" }}>
                  <img src={calender} alt="date" className="img-accomodation" />
                  <h5 style={{ marginTop: "0" }}>{dataTrip.dateTrip}</h5>
                </div>
              </div>
            </div>
            <div className="detail-description">
              <h3>Description</h3>
              <p>{dataTrip.description}</p>
            </div>
            <div className="detail-price">
              <div align="left">
                <h2>
                  <CurrencyFormat
                    value={dataTrip.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"IDR. "}
                  />
                  /Person
                </h2>
              </div>
              {localStorage.role === "1" && <div></div>}
              {localStorage.role === "2" && (
                <div align="right">
                  <button
                    style={{ cursor: "pointer" }}
                    className="detail btn"
                    onClick={() => setPlus(number - 1)}
                  >
                    -
                  </button>
                  {number}
                  <button
                    style={{ cursor: "pointer" }}
                    className="detail btn"
                    onClick={() => setPlus(number + 1)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
            <hr />
            <div className="total">
              <h2>Total</h2>
              <h2 align="right">
                <CurrencyFormat
                  value={dataTrip.price * number}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"IDR. "}
                />
              </h2>
            </div>
            <hr />
            {!localStorage.token && (
              <button className="btn book" onClick={() => showModalLogin()}>
                BOOK NOW
              </button>
            )}
            {localStorage.token && localStorage.role === "2" && (
              <form onSubmit={submitTransaction}>
                <button className="btn book" type="submit">
                  BOOK NOW
                </button>
              </form>
            )}
            {localStorage.role === "1" && <div></div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
