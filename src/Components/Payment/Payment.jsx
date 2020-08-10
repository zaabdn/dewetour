import React, { useState } from "react";
import { groupImage } from "../Data/Image";
import "./Payment.css";
import icon from "../../Images/Icon-payment.png";
import bukti from "../../Images/bukti.png";
import ModalPayment from "../Dropdown/ModalPayment";

const PaymentDetail = ({ match }) => {
  const tour = groupImage.filter((detail) => {
    return detail.id == match.params.id;
  });

  const [isModalPayment, setModalPayment] = useState(false);
  const [isPay, setPayment] = useState(false);

  const showModalPayment = () => {
    setModalPayment(!isModalPayment);
  };

  const closeModalPayment = () => {
    setModalPayment(false);
  };

  const handlePayment = () => {
    setPayment(true);
    setModalPayment(false);
  };

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
            {!isPay && (
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
            )}
            {isPay && (
              <span
                style={{
                  color: "orange",
                  background: "rgba(252, 214, 78, 0.5)",
                  padding: "2px 10px",
                  borderRadius: "5px",
                }}
              >
                Waiting Approve
              </span>
            )}
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
            <img src={bukti} alt="gambar" />
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
      {!isPay && (
        <button className="btn-pay" onClick={() => showModalPayment()}>
          PAY
        </button>
      )}
      {isPay && <div></div>}
      {isModalPayment && (
        <ModalPayment
          showModalPayment={showModalPayment}
          closeModalPayment={closeModalPayment}
          handlePayment={handlePayment}
        />
      )}
    </div>
  );
};

export default PaymentDetail;
