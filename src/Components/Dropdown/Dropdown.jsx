import React from "react";
import user from "../../Images/user.png";
import bill from "../../Images/bill.png";
import logout from "../../Images/logout.png";
import "./Dropdown.css";

import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="App-dropdown">
      <div className="list-dropdown">
        <img src={user} alt="" />
        <h5 className="text-dropdown">
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            Profile{" "}
          </Link>
        </h5>
      </div>
      <div className="list-dropdown">
        <img src={bill} alt="" />
        <h5 className="text-dropdown">
          <Link
            to="/transaction"
            style={{ textDecoration: "none", color: "black" }}
          >
            Pay{" "}
          </Link>
        </h5>
      </div>
      <hr />
      <div className="list-dropdown">
        <img src={logout} alt="" />
        <h5 className="text-dropdown">Log Out</h5>
      </div>
    </div>
  );
};

export default Dropdown;
