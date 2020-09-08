import React, { useState } from "react";
import "./Trip.css";
import { useQuery } from "react-query";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Trip = () => {
  let history = useHistory();
  const [trip, setTrip] = useState({
    title: "",
    countryId: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    dateTrip: "",
    price: "",
    quota: "",
    description: "",
    image: "",
  });

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  const submitTrip = (e) => {
    e.preventDefault();
    const dataTrip = {
      title: trip.title,
      countryId: trip.countryId,
      accomodation: trip.accomodation,
      transportation: trip.transportation,
      eat: trip.eat,
      day: trip.day,
      night: trip.night,
      dateTrip: trip.dateTrip,
      price: trip.price,
      quota: trip.quota,
      description: trip.description,
      image: trip.image,
    };
    axios
      .post("http://localhost:5001/api/v1/trip", dataTrip, config)
      .then((result) => {
        history.push("/incometrip");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    e.persist();
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const fetchCountryList = async () => {
    const response = await fetch("http://localhost:5001/api/v1/country", {});
    return response.json();
  };

  const { isLoading, data } = useQuery("countries", fetchCountryList);

  return (
    <div className="App-add">
      <div className="add-trip">
        <h1>Add Trip</h1>
        <form onSubmit={submitTrip}>
          <div className="form-group">
            <div>
              <h3>Title Trip</h3>
              <input
                type="text"
                value={trip.title}
                onChange={(e) => handleChange(e)}
                name="title"
              />
            </div>
            {isLoading ? (
              <h3>Loading...</h3>
            ) : (
              <div>
                <h3>Country</h3>
                <select
                  value={trip.country}
                  onChange={(e) => handleChange(e)}
                  name="countryId"
                >
                  <option value="" name="countryId">
                    Choose Country
                  </option>
                  {data.data.map((country) => (
                    <option
                      value={country.id}
                      key={country.id}
                      name="countryId"
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <h3>Accomodation</h3>
              <input
                type="text"
                value={trip.accomodation}
                onChange={(e) => handleChange(e)}
                name="accomodation"
              />
            </div>
            <div>
              <h3>Transportation</h3>
              <input
                type="text"
                value={trip.transportation}
                onChange={(e) => handleChange(e)}
                name="transportation"
              />
            </div>
            <div>
              <h3>Eat</h3>
              <input
                type="text"
                value={trip.eat}
                onChange={(e) => handleChange(e)}
                name="eat"
              />
            </div>
            <div>
              <h3>Duration</h3>
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="duration"
                  value={trip.day}
                  onChange={(e) => handleChange(e)}
                  name="day"
                />{" "}
                <h3 style={{ margin: "0 50px 0 0" }}>Day</h3>
                <input
                  type="number"
                  className="duration"
                  value={trip.night}
                  onChange={(e) => handleChange(e)}
                  name="night"
                />
                <h3 style={{ margin: "0" }}>Night</h3>
              </div>
            </div>
            <div>
              <h3>Date Trip</h3>
              <input
                type="datetime"
                value={trip.dateTrip}
                onChange={(e) => handleChange(e)}
                name="dateTrip"
              />
            </div>
            <div>
              <h3>Price</h3>
              <input
                type="number"
                value={trip.price}
                onChange={(e) => handleChange(e)}
                name="price"
              />
            </div>
            <div>
              <h3>Quota</h3>
              <input
                type="text"
                value={trip.quota}
                onChange={(e) => handleChange(e)}
                name="quota"
              />
            </div>
            <div>
              <h3>Description</h3>
              <input
                type="text"
                className="desc"
                value={trip.description}
                onChange={(e) => handleChange(e)}
                name="description"
              />
            </div>
            <div>
              <h3>Image</h3>
              <input
                type="text"
                className="img"
                value={trip.image}
                onChange={(e) => handleChange(e)}
                name="image"
              />
            </div>
          </div>
          <center>
            <button className="btn-trip" type="submit">
              Add Trip
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Trip;
