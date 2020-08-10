import React, { useState } from "react";
import "./ListTransaction.css";
import search from "../../Images/search.png";
import ModalBooking from "../Transaction/ModalBooking";

const ListTransaction = () => {
  const [isModalBooking, setModalBooking] = useState(false);

  const showModalBooking = () => {
    setModalBooking(!isModalBooking);
  };

  const closeModalBooking = () => {
    setModalBooking(false);
  };

  return (
    <div className="App-transaction">
      <h1>Incoming Transaction</h1>
      <table className="tabel">
        <tr>
          <th>No</th>
          <th>Users</th>
          <th>Trip</th>
          <th>Bukti Transfer</th>
          <th>Status Payment</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Zainal Abidin</td>
          <td>6D/4N Fun Tassie Vaca ...</td>
          <td>bca.jpg</td>
          <td className="pending">Pending</td>
          <td>
            <img src={search} alt="" onClick={() => showModalBooking()} />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mason Greenwood</td>
          <td>6D/4N Exciting Summer...</td>
          <td>bca.jpg</td>
          <td className="approve">Approve</td>
          <td>
            <img src={search} alt="" onClick={() => showModalBooking()} />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Aishakina</td>
          <td>6D/4N Fun Tassie Vaca ...</td>
          <td>bca.jpg</td>
          <td className="cancel">Cancel</td>
          <td>
            <img src={search} alt="" onClick={() => showModalBooking()} />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Rachel Florencia</td>
          <td>6D/4N Wonderful Autum ...</td>
          <td>bca.jpg</td>
          <td className="pending">Pending</td>
          <td>
            <img src={search} alt="" onClick={() => showModalBooking()} />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Cristiano Ronaldo</td>
          <td>6D/4N Fun Tassie Vaca ...</td>
          <td>bca.jpg</td>
          <td className="approve">Approve</td>
          <td>
            <img src={search} alt="" onClick={() => showModalBooking()} />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Eden Hazard</td>
          <td>6D/4N Exciting Summer...</td>
          <td>bca.jpg</td>
          <td className="pending">Pending</td>
          <td>
            <img src={search} alt="" onClick={() => showModalBooking()} />
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Pandji Pragiwaksono</td>
          <td>6D/4N Fun Tassie Vaca ...</td>
          <td>bca.jpg</td>
          <td className="cancel">Cancel</td>
          <td>
            <img src={search} alt="" onClick={() => showModalBooking()} />
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Maudy Ayunda</td>
          <td>6D/4N Wonderful Autum ...</td>
          <td>bca.jpg</td>
          <td className="pending">Pending</td>
          <td>
            <img src={search} alt="" onClick={() => showModalBooking()} />
          </td>
        </tr>
      </table>
      {isModalBooking && (
        <ModalBooking
          showModalBooking={showModalBooking}
          closeModalBooking={closeModalBooking}
        />
      )}
    </div>
  );
};

export default ListTransaction;
