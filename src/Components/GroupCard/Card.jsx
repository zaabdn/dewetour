import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import "./Card.css";
import palm from "../../Images/palm.png";
import { Link } from "react-router-dom";
import { API } from "../Config/api";

function Card() {
  const [dataTrip, setTrip] = useState([]);
  const fetchTripList = async () => {
    const response = await API.get("/trip");
    try {
      const result = response.data.data;
      setTrip(result);
    } catch (error) {
      setTrip(response.error.message);
    }
  };

  // const { isLoading, data } = useQuery("trips", fetchTripList);

  useEffect(() => {
    fetchTripList();
  }, []);

  return (
    <div className="group">
      <img
        src={palm}
        alt="Gambar"
        align="left"
        style={{ position: "absolute", left: "0" }}
      />
      <h1>Group Tour</h1>
      {/* {isLoading ? (
        <h1>Loading...</h1>
      ) : ( */}
      <div className="groups">
        {dataTrip.map((trip) => (
          <Link
            to={`detail/${trip.id}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
            key={trip.id}
          >
            <div className="group-content">
              <div className="box">
                <img src={trip.image} alt="Gambar" align="Center" />
                <p className="text">{trip.quota}</p>
              </div>
              <h4>{trip.title}</h4>
              <h5>
                <CurrencyFormat
                  value={trip.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"IDR. "}
                />
              </h5>
              <p className="place">{trip.country.name}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* )} */}
    </div>
  );
}

export default Card;
