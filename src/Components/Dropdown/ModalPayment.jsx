import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const ModalPayment = ({ showModalPayment, closeModalPayment, dataPayment }) => {
  let history = useHistory();
  const location = useLocation();

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  const updatePayment = (e) => {
    e.preventDefault();
    const dataUpdate = {
      id: dataPayment.id,
      counterQty: dataPayment.counterQty,
      total: dataPayment.total,
      status: "Waiting Approved",
      attachment: dataPayment.attachment,
      tripId: dataPayment.trip.id,
      userId: dataPayment.userId,
    };
    axios
      .patch(
        `http://localhost:5001/api/v1/transaction/${dataPayment.id}`,
        dataUpdate,
        config
      )
      .then((result) => {
        console.log(result);
        history.push(location.pathname);
        showModalPayment();
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      // onClick={() => {
      //   closeModalPayment();
      // }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "25%",
          backgroundColor: "white",
          width: "50%",
          height: "100px",
          borderRadius: "5px",
          padding: "auto",
          textAlign: "center",
          fontWeight: "lighter",
        }}
      >
        <h3>
          Your payment will be confirmed within 1 x 24 hours
          <br />
          To see orders click{" "}
          <form onSubmit={updatePayment}>
            <button
              style={{
                background: "transparent",
                border: "0",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              <u style={{ color: "#ffaf00", cursor: "pointer" }}>Here</u>
            </button>
          </form>{" "}
          thank you
        </h3>
      </div>
    </div>
  );
};

export default ModalPayment;
