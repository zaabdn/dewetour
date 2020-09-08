import React, { useState, useEffect } from "react";
import "./Payment.css";
import icon from "../../Images/Icon-payment.png";
import bukti from "../../Images/bukti.png";
import ModalPayment from "../Dropdown/ModalPayment";
import CurrencyFormat from "react-currency-format";
import { API } from "../Config/api";

const PaymentDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [isModalPayment, setModalPayment] = useState(false);
  const [dataPayment, setData] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  const fetchDetailPayment = async () => {
    const response = await API.get(`/transaction/${id}`, config);
    const resData = response.data.data;
    setData(resData);
  };

  useEffect(() => {
    fetchDetailPayment();
  });

  const showModalPayment = () => {
    setModalPayment(!isModalPayment);
  };

  const closeModalPayment = () => {
    setModalPayment(false);
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
      {!dataPayment || !dataPayment?.trip ? (
        <h1 style={{ marginTop: "150px" }} align="center">
          Loading..
        </h1>
      ) : (
        <div className="App-payment">
          <div className="payment">
            <div className="payment-header">
              <img src={icon} alt="logo" align="left" />
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
                <h3>{dataPayment.trip.title}</h3>
                <p>{dataPayment.trip.place}</p>
                {dataPayment.status === "Waiting Payment" && (
                  <span
                    style={{
                      color: "red",
                      background: "rgba(252, 78, 78, 0.5)",
                      padding: "2px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    {dataPayment.status}
                  </span>
                )}
                {dataPayment.status === "Waiting Approved" && (
                  <span
                    style={{
                      color: "orange",
                      background: "rgba(252, 214, 78, 0.5)",
                      padding: "2px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    {dataPayment.status}
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
                    {arrday[new Date(dataPayment.trip.dateTrip).getDay()]},{" "}
                    {new Date(dataPayment.trip.dateTrip).getDate()}{" "}
                    {arrmonth[new Date(dataPayment.trip.dateTrip).getMonth()]}{" "}
                    {new Date(dataPayment.trip.dateTrip).getFullYear()}{" "}
                  </p>
                  <h4>Accomodation</h4>
                  <p>{dataPayment.trip.accomodation}</p>
                </div>
                <div className="fitur">
                  <h4>Duration</h4>
                  <p>
                    {dataPayment.trip.day} Days {dataPayment.trip.night} Night
                  </p>
                  <h4>Transportation</h4>
                  <p>{dataPayment.trip.transportation}</p>
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
                      <p>{localStorage.fullName}</p>
                    </td>
                    <td>
                      <p>Male</p>
                    </td>
                    <td>
                      <p>{localStorage.phone}</p>
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h4>Qty</h4>
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h4>{dataPayment.counterQty}</h4>
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
                          value={dataPayment.total}
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
          {dataPayment.status === "Waiting Payment" && (
            <button className="btn-pay" onClick={() => showModalPayment()}>
              PAY
            </button>
          )}
          {dataPayment.status !== "Waiting Payment" && <div></div>}
          {isModalPayment && (
            <ModalPayment
              showModalPayment={showModalPayment}
              closeModalPayment={closeModalPayment}
              dataPayment={dataPayment}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PaymentDetail;
