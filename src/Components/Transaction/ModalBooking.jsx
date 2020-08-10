import React from "react";
import img from "../../Images/img.png";
import bukti from "../../Images/bukti.png";
import logo from "../../Images/Icon-payment.png";
import "../Payment/Payment.css";

const ModalBooking = ({ showModalBooking, closeModalBooking }) => {
  return (
    <div
      style={{
        position: "fixed",
        paddingTop: "100px",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
      onClick={() => {
        closeModalBooking();
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "12.5%",
          margin: "0 auto",
          backgroundColor: "white",
          width: "75%",
          height: "100px",
          borderRadius: "5px",
          textAlign: "center",
          fontWeight: "lighter",
        }}
      >
        <div
          className="payment"
          style={{ marginTop: "0", paddingBottom: "110px" }}
        >
          <div className="payment-header">
            <img src={logo} alt="logo" align="left" />
            <div
              align="right"
              style={{ marginTop: "0px", marginRight: "20px" }}
            >
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
                  color: "red",
                  background: "rgba(252, 78, 78, 0.5)",
                  padding: "2px 10px",
                  borderRadius: "5px",
                }}
              >
                Waiting Payment
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
              <img src={bukti} alt="gambar" align="right" />
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
          <div style={{ float: "right" }}>
            <button
              style={{
                background: "#FF0742",
                padding: "10px 30px",
                marginRight: "10px",
                border: "0",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Cancel
            </button>
            <button
              style={{
                background: "#0ACF83",
                padding: "10px 30px",
                marginRight: "10px",
                border: "0",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBooking;
