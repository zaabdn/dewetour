import React, { useState, useEffect } from "react";

import img from "../../Images/img.png";
import barcode from "../../Images/Group.png";
import logo from "../../Images/Icon-payment.png";
import "../Payment/Payment.css";
import { API } from "../Config/api";
import CurrencyFormat from "react-currency-format";

const ListPayment = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  const [transactions, setTransaction] = useState([]);
  const fetchTransactionList = async () => {
    const response = await API.get("/transaction", config);
    const result = response.data.data;
    setTransaction(result);
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

  const tour = transactions.filter((detail) => {
    console.log(localStorage.id);
    return detail.user.id == localStorage.id;
  });

  const payment = tour.filter((detail) => {
    console.log(localStorage.id);
    return detail.status == "Waiting Payment";
  });

  useEffect(() => {
    fetchTransactionList();
  });
  return (
    <div className="App-profile">
      <h1>List Payment</h1>
      {payment.map((transaction) => (
        <div className="payment" key={transaction.id}>
          <div className="payment-header">
            <img src={logo} alt="logo" align="left" />
            <div
              align="right"
              style={{ marginTop: "20px", marginRight: "20px" }}
            >
              <h1>Booking</h1>
              <p>Saturday, 20 August 2020</p>
            </div>
          </div>
          <div className="payment-detail">
            <div style={{ width: "30%" }}>
              <h3>{transaction.trip.title}</h3>
              <p>{transaction.trip.place}</p>
              {transaction.status === "Waiting Payment" && (
                <span
                  style={{
                    color: "red",
                    background: "rgba(252, 78, 78, 0.5)",
                    padding: "2px 10px",
                    borderRadius: "5px",
                  }}
                >
                  {transaction.status}
                </span>
              )}
              {transaction.status === "Cancel" && (
                <span
                  style={{
                    color: "red",
                    background: "rgba(252, 78, 78, 0.5)",
                    padding: "2px 10px",
                    borderRadius: "5px",
                  }}
                >
                  {transaction.status}
                </span>
              )}
              {transaction.status === "Waiting Approved" && (
                <span
                  style={{
                    color: "orange",
                    background: "rgba(252, 214, 78, 0.5)",
                    padding: "2px 10px",
                    borderRadius: "5px",
                  }}
                >
                  {transaction.status}
                </span>
              )}
              {transaction.status === "Approved" && (
                <span
                  style={{
                    color: "green",
                    background: "rgba(78, 252, 84, 0.5)",
                    padding: "2px 10px",
                    borderRadius: "5px",
                  }}
                >
                  {transaction.status}
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
                <p>
                  {arrday[new Date(transaction.trip.dateTrip).getDay()]},{" "}
                  {new Date(transaction.trip.dateTrip).getDate()}{" "}
                  {arrmonth[new Date(transaction.trip.dateTrip).getMonth()]}{" "}
                  {new Date(transaction.trip.dateTrip).getFullYear()}{" "}
                </p>
                <h4>Accomodation</h4>
                <p>{transaction.trip.accomodation}</p>
              </div>
              <div>
                <h4>Duration</h4>
                <p>
                  {transaction.trip.day} Days {transaction.trip.night} Night
                </p>
                <h4>Transportation</h4>
                <p>{transaction.trip.transportation}</p>
              </div>
            </div>
            <div style={{ marginLeft: "50px", marginTop: "20px" }}>
              <img src={barcode} alt="gambar" />
            </div>
          </div>
          <div>
            <table width="95%" rules="rows" style={{ marginLeft: "20px" }}>
              <tbody>
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
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <p>1</p>
                  </td>
                  <td>
                    <p>{localStorage.fullName}</p>
                  </td>
                  <td>
                    <p>Male</p>
                  </td>
                  <td>
                    <p>{localStorage.phone}</p>
                  </td>
                  <td>
                    <h4>Qty</h4>
                  </td>
                  <td>
                    <h4>{transaction.counterQty}</h4>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <h4>Total</h4>
                  </td>
                  <td>
                    <h4 style={{ color: "red" }}>
                      <CurrencyFormat
                        value={transaction.total}
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
        </div>
      ))}
    </div>
  );
};

export default ListPayment;
