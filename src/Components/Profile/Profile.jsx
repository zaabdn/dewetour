import React from "react";
import account from "../../Images/account.png";
import message from "../../Images/message.png";
import loc from "../../Images/loc.png";
import telephone from "../../Images/telephone.png";

import img from "../../Images/img.png";
import barcode from "../../Images/Group.png";
import logo from "../../Images/Icon-payment.png";
import "./Profile.css";
import "../Payment/Payment.css";

const Profile = () => {
  return (
    <div className="App-profile">
      <div className="profile">
        <div className="info">
          <h1>Personal Info</h1>
          <div className="detail-info">
            <img src={account} alt="" />
            <div>
              <h3>Zainal Ganteng</h3>
              <p>Full name</p>
            </div>
          </div>
          <div className="detail-info">
            <img src={message} alt="" />
            <div>
              <h3>zainal609@gmail.com</h3>
              <p>Email</p>
            </div>
          </div>
          <div className="detail-info">
            <img src={telephone} alt="" />
            <div>
              <h3>0888888888</h3>
              <p>Mobile Phone</p>
            </div>
          </div>
          <div className="detail-info">
            <img src={loc} alt="" />
            <div>
              <h3>Gresik</h3>
              <p>Address</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="" align="right" />
          <button className="btn-change" align="right">
            Change Profile Picture
          </button>
        </div>
      </div>
      <h1>History Trip</h1>
      <div className="payment">
        <div className="payment-header">
          <img src={logo} alt="logo" align="left" />
          <div align="right" style={{ marginTop: "20px", marginRight: "20px" }}>
            <h1>Booking</h1>
            <p>Saturday, 20 August 2020</p>
          </div>
        </div>
        <div className="payment-detail">
          <div style={{ width: "30%" }}>
            <h3>6D/4N Fun Tassie Vacation</h3>
            <p>Indonesia</p>
            <span
              style={{
                color: "green",
                background: "rgba(78, 252, 84, 0.5)",
                padding: "2px 10px",
                borderRadius: "5px",
              }}
            >
              Approve
            </span>
          </div>
          <div
            style={{
              width: "30%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <h4>Date Trip</h4>
              <p>26 Auguts 2020</p>
              <h4>Accomodation</h4>
              <p>Hotel 4 Nights</p>
            </div>
            <div>
              <h4>Duration</h4>
              <p>6 Days 4 Night</p>
              <h4>Transportation</h4>
              <p>Qatar Airways</p>
            </div>
          </div>
          <div style={{ marginLeft: "50px", marginTop: "20px" }}>
            <img src={barcode} alt="gambar" />
          </div>
        </div>
        <div>
          <table width="95%" rules="rows" style={{ marginLeft: "20px" }}>
            <tr>
              <td>
                <h4>No</h4>
              </td>
              <td width="20%">
                <h4>Nama</h4>
              </td>
              <td width="15%">
                <h4>Gender</h4>
              </td>
              <td width="20%">
                <h4>Phone</h4>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>Zainal Ganteng</p>
              </td>
              <td>
                <p>Male</p>
              </td>
              <td>
                <p>123456789</p>
              </td>
              <td>
                <h4>Qty</h4>
              </td>
              <td>
                <h4>1</h4>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <h4>Total</h4>
              </td>
              <td>
                <h4 style={{ color: "red" }}>IDR. 1,000,000</h4>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
