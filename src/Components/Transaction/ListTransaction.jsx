import React, { useState, useEffect } from "react";
import "./ListTransaction.css";
import search from "../../Images/search.png";
import ModalBooking from "../Transaction/ModalBooking";
import { API } from "../Config/api";

const ListTransaction = () => {
  const [isModalBooking, setModalBooking] = useState(false);
  const [errorForm, setErrorForm] = useState();
  const [idTransaction, setIdTransaction] = useState();

  const showModalBooking = (event) => {
    setIdTransaction(event.target.getAttribute("id"));
    setModalBooking(!isModalBooking);
  };

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  const [transactions, setTransaction] = useState([]);
  const fetchTransactionList = async () => {
    try {
      const response = await API.get("/transaction", config);
      const result = response.data.data;
      setTransaction(result);
    } catch (err) {
      setErrorForm(err.response.data.error.message);
    }
  };

  useEffect(() => {
    fetchTransactionList();
  });

  return (
    <div className="App-transaction">
      <h1>Incoming Transaction</h1>
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
      {!transactions ? (
        <tr>
          <td>no data</td>
        </tr>
      ) : (
        <table className="tabel">
          <tbody>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Trip</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody>
            {transactions.map((transaction, no) => (
              <tr key={transaction.id}>
                <td>{no + 1}</td>
                <td>{transaction.user.fullName}</td>
                <td>{transaction.trip.title}</td>
                <td>{transaction.attachment}</td>
                {transaction.status === "Waiting Payment" && (
                  <td className="cancel">{transaction.status}</td>
                )}
                {transaction.status === "Waiting Approved" && (
                  <td className="pending">{transaction.status}</td>
                )}
                {transaction.status === "Approved" && (
                  <td className="approved">{transaction.status}</td>
                )}
                {transaction.status === "Cancel" && (
                  <td className="cancel">{transaction.status}</td>
                )}
                <td>
                  <img
                    src={search}
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      showModalBooking(e);
                    }}
                    id={transaction.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isModalBooking && (
        <ModalBooking showModalBooking={showModalBooking} id={idTransaction} />
      )}
    </div>
  );
};

export default ListTransaction;
