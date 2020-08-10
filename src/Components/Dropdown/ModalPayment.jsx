import React from "react";

const ModalPayment = ({
  showModalPayment,
  closeModalPayment,
  handlePayment,
}) => {
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
        closeModalPayment();
      }}
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
          <button
            onClick={() => handlePayment()}
            style={{
              background: "transparent",
              border: "0",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            <u style={{ color: "#ffaf00" }}>Here</u>
          </button>{" "}
          thank you
        </h3>
      </div>
    </div>
  );
};

export default ModalPayment;
