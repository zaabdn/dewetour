import React, { useState, useEffect } from "react";
import img from "../../Images/img.png";
import bukti from "../../Images/bukti.png";
import logo from "../../Images/Icon-payment.png";
import "../Payment/Payment.css";
import { API } from "../Config/api";
import CurrencyFormat from "react-currency-format";

const ModalBooking = ({ showModalBooking, id }) => {
  const [errorForm, setErrorForm] = useState();
  const [transactions, setTransaction] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  const fetchTransactionDetail = async () => {
    try {
      const response = await API.get(`/transaction/${id}`, config);
      const result = response.data.data;
      setTransaction(result);
    } catch (err) {
      setErrorForm(err.response.error.message);
    }
  };

  useEffect(() => {
    fetchTransactionDetail();
  });

  const submitApprove = async () => {
    const dataUpdate = {
      status: "Approved",
    };
    try {
      await API.patch(`/transaction/${id}`, dataUpdate, config);
      showModalBooking(false);
    } catch (err) {
      console.log(err);
    }
  };

  const submitCancel = async () => {
    const dataUpdate = {
      status: "Cancel",
    };
    try {
      await API.patch(`/transaction/${id}`, dataUpdate, config);
      showModalBooking();
    } catch (err) {
      console.log(err);
    }
  };

  const arrmonth = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const arrday = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum&#39;at",
    "Sabtu",
  ];
  const date = new Date();
  const day = date.getDay();
  const tanggal = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <>
      {!transactions || !transactions?.trip || !transactions?.user ? (
        <h1>Loading ..</h1>
      ) : (
        <div
          style={{
            position: "fixed",
            paddingTop: "50px",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "2%",
              left: "12.5%",
              margin: "0 auto",
              backgroundColor: "white",
              width: "75%",
              maxHeight: "500px",
              borderRadius: "5px",
              fontWeight: "lighter",
            }}
          >
            {errorForm && (
              <span
                style={{
                  color: "red",
                  background: "rgba(252, 78, 78, 0.5)",
                  padding: "2px 10px",
                  borderRadius: "5px",
                  position: "absolute",
                  top: "230px",
                  left: "36%",
                  fontSize: "14px",
                }}
              >
                {errorForm}
              </span>
            )}
            <span className="close-payment" onClick={showModalBooking}>
              X
            </span>
            <div className="payment" style={{ padding: "0 10px 85px" }}>
              <div className="payment-header">
                <img src={logo} alt="logo" align="left" />
                <div
                  align="right"
                  style={{ marginTop: "20px", marginRight: "20px" }}
                >
                  <h1>Booking</h1>
                  <p>
                    {arrday[day] +
                      ", " +
                      tanggal +
                      " " +
                      arrmonth[month] +
                      " " +
                      year}
                  </p>
                </div>
              </div>
              <div className="payment-detail">
                <div style={{ width: "30%" }}>
                  <h3>{transactions.trip.title}</h3>
                  <p>{transactions.trip.place}</p>
                  {transactions.status === "Waiting Payment" && (
                    <span
                      style={{
                        color: "red",
                        background: "rgba(252, 78, 78, 0.5)",
                        padding: "2px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      {transactions.status}
                    </span>
                  )}
                  {transactions.status === "Waiting Approved" && (
                    <span
                      style={{
                        color: "orange",
                        background: "rgba(252, 214, 78, 0.5)",
                        padding: "2px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      {transactions.status}
                    </span>
                  )}
                  {transactions.status === "Approved" && (
                    <span
                      style={{
                        color: "green",
                        background: "rgba(90, 252, 78, 0.5)",
                        padding: "2px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      {transactions.status}
                    </span>
                  )}
                  {transactions.status === "Cancel" && (
                    <span
                      style={{
                        color: "red",
                        background: "rgba(252, 78, 78, 0.5)",
                        padding: "2px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      {transactions.status}
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
                  <div className="fitur">
                    <h4>Date Trip</h4>
                    <p>
                      {arrday[new Date(transactions.trip.dateTrip).getDay()]},
                      {new Date(transactions.trip.dateTrip).getDate()}
                      {
                        arrmonth[
                          new Date(transactions.trip.dateTrip).getMonth()
                        ]
                      }
                      {new Date(transactions.trip.dateTrip).getFullYear()}
                    </p>
                    <h4>Accomodation</h4>
                    <p>{transactions.trip.accomodation}</p>
                  </div>
                  <div className="fitur">
                    <h4>Duration</h4>
                    <p>
                      {transactions.trip.day} Days {transactions.trip.night}{" "}
                      Night
                    </p>
                    <h4>Transportation</h4>
                    <p>{transactions.trip.transportation}</p>
                  </div>
                </div>
                <div style={{ marginTop: "20px", marginLeft: "80px" }}>
                  <img src={bukti} alt="gambar" />
                </div>
              </div>
              <div>
                <table width="95%" rules="rows" style={{ marginLeft: "20px" }}>
                  <tbody>
                    <tr>
                      <td width="20%">
                        <h4>Nama</h4>
                      </td>
                      <td width="15%">
                        <h4>Gender</h4>
                      </td>
                      <td width="50%" colSpan="3">
                        <h4>Phone</h4>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        <p>{transactions.user.fullName}</p>
                      </td>
                      <td>
                        <p>Male</p>
                      </td>
                      <td>
                        <p>{transactions.user.phone}</p>
                      </td>
                      <td style={{ paddingLeft: "100px" }}>
                        <h4>Qty</h4>
                      </td>
                      <td style={{ paddingLeft: "100px" }}>
                        <h4>{transactions.counterQty}</h4>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td
                        colSpan="4"
                        align="right"
                        style={{ paddingLeft: "100px" }}
                      >
                        <h4>Total</h4>
                      </td>
                      <td width="50%" style={{ paddingLeft: "100px" }}>
                        <h4 style={{ color: "red" }}>
                          <CurrencyFormat
                            value={transactions.total}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"IDR. "}
                          />
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {transactions.status !== "Approved" && (
                <>
                  <button className="btn-pay" onClick={() => submitApprove()}>
                    Approve
                  </button>
                  <button className="btn-cancel" onClick={() => submitCancel()}>
                    Cancel
                  </button>
                </>
              )}
              {transactions.status === "Approved" && <></>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalBooking;
