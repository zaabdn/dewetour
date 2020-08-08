import React from "react";
import { groupImage } from "../Data/Image";
import "./Payment.css";
import icon from "../../Images/Icon-payment.png";
import bukti from "../../Images/bukti.png";

const PaymentDetail = ({ match }) => {
  const tour = groupImage.filter((detail) => {
    return detail.id == match.params.id;
  });
  return (
    <div className="App-payment">
      <div className="payment">
        <div className="payment-header">
          <img src={icon} alt="logo" align="left" />
          <div align="right" style={{ marginTop: "20px", marginRight: "20px" }}>
            <h1>Booking</h1>
            <p>Saturday, 20 August 2020</p>
          </div>
        </div>
        <div className="payment-detail">
          <div style={{ width: "30%" }}>
            <h3>{tour[0].title}</h3>
            <p>{tour[0].place}</p>
            <span style={{ color: "red" }}>Waiting Payment</span>
          </div>
          <div
            style={{
              width: "30%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <h3>Date Trip</h3>
              <p>26 Auguts 2020</p>
              <h3>Accomodation</h3>
              <p>Hotel 4 Nights</p>
            </div>
            <div>
              <h3>Duration</h3>
              <p>6 Days 4 Night</p>
              <h3>Transportation</h3>
              <p>Qatar Airways</p>
            </div>
          </div>
          <div style={{ marginLeft: "50px", marginTop: "20px" }}>
            <img src={bukti} alt="gambar" />
          </div>
        </div>
        <div>
          <table width="100%">
            <tr>
              <td>
                <h3>No</h3>
              </td>
              <td width="18%">
                <h3>Nama</h3>
              </td>
              <td width="10%">
                <h3>Gender</h3>
              </td>
              <td width="18%">
                <h3>Phone</h3>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <h3>1</h3>
              </td>
              <td>
                <h3>Zainal Ganteng</h3>
              </td>
              <td>
                <h3>Male</h3>
              </td>
              <td>
                <h3>123456789</h3>
              </td>
              <td>Qty</td>
              <td>1</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <button>PAY</button>
    </div>
  );
};

export default PaymentDetail;
