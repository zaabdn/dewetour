import React from "react";
import Card from "../Components/GroupCard/Card";
import Footer from "../Components/Footer/Footer";
import "../App.css";

import { Link } from "react-router-dom";

const IncomeTrip = () => {
  return (
    <div className="App-income">
      <div
        style={{
          display: "flex",
          height: "80px",
          marginTop: "50px",
        }}
      >
        <h1 style={{ marginLeft: "120px", width: "80%" }}>Income Trip</h1>
        <Link to={`/addtrip`}>
          <button className="btn-income">Add Trip</button>
        </Link>
      </div>
      <Card style={{ position: "absolut", top: "70px" }} />
      <Footer title="Copyright @ 2020 Dewe Tour - Zainal Abidin - NIS. All Rights reserved" />
    </div>
  );
};

export default IncomeTrip;
