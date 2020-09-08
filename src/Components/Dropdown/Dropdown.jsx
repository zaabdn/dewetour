import React from "react";
import user from "../../Images/user.png";
import bill from "../../Images/bill.png";
import trip from "../../Images/trip.png";
import buy from "../../Images/buy.png";
import userLogout from "../../Images/logout.png";
import "./Dropdown.css";

import { useHistory } from "react-router-dom";

const Dropdown = ({ showProfileDropdown }) => {
  let history = useHistory();

  const openProfile = () => {
    history.push(`/profile`);
    showProfileDropdown();
  };

  const openPayment = () => {
    history.push(`/list-payment`);
    showProfileDropdown();
  };

  const openTranscation = () => {
    history.push(`/transaction`);
    showProfileDropdown();
  };

  const openTrip = () => {
    history.push(`/incometrip`);
    showProfileDropdown();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    showProfileDropdown();
  };

  return (
    <div>
      <div className="Appdropdown">
        {localStorage.role === "2" && (
          <div className="list-dropdown" onClick={() => openProfile()}>
            <img src={user} alt="" />
            <h5 className="text-dropdown">Profile</h5>
          </div>
        )}
        {localStorage.role === "1" && (
          <div className="list-dropdown" onClick={() => openTrip()}>
            <img src={trip} alt="" />
            <h5 className="text-dropdown">Trip</h5>
          </div>
        )}
        {localStorage.role === "1" && (
          <div className="list-dropdown" onClick={() => openTranscation()}>
            <img src={buy} alt="" />
            <h5 className="text-dropdown">Transaction</h5>
          </div>
        )}
        {localStorage.role === "2" && (
          <div className="list-dropdown" onClick={() => openPayment()}>
            <img src={bill} alt="" />
            <h5 className="text-dropdown">Pay</h5>
          </div>
        )}
        <hr />
        <div className="list-dropdown" onClick={() => handleLogout()}>
          <img src={userLogout} alt="" />
          <h5 className="text-dropdown">Log Out</h5>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
