import React from "react";
import "./Footer.css";
import leaf from "../../Images/leaf.png";

function Footer(props) {
  return (
    <div className="App-footer">
      <div className="footer">
        <p>{props.title}</p>
      </div>
      <img src={leaf} alt="Footer" align="right" />
    </div>
  );
}

export default Footer;
