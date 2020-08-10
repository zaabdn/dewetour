import React from "react";
import "./Trip.css";

const Trip = () => {
  return (
    <div className="App-add">
      <div className="add-trip">
        <h1>Add Trip</h1>
        <div className="form-group">
          <div>
            <h3>Title Trip</h3>
            <input type="text" />
          </div>
          <div>
            <h3>Country</h3>
            <input type="text" />
          </div>
          <div>
            <h3>Accomodation</h3>
            <input type="text" />
          </div>
          <div>
            <h3>Transportation</h3>
            <input type="text" />
          </div>
          <div>
            <h3>Eat</h3>
            <input type="text" />
          </div>
          <div>
            <h3>Duration</h3>
            <div style={{ display: "flex" }}>
              <input type="text" className="duration" />{" "}
              <h3 style={{ margin: "0 50px 0 0" }}>Day</h3>
              <input type="text" className="duration" />
              <h3 style={{ margin: "0" }}>Night</h3>
            </div>
          </div>
          <div>
            <h3>Date Trip</h3>
            <input type="date" />
          </div>
          <div>
            <h3>Price</h3>
            <input type="text" />
          </div>
          <div>
            <h3>Duration</h3>
            <input type="text" />
          </div>
          <div>
            <h3>Quota</h3>
            <input type="text" />
          </div>

          <div>
            <h3>Description</h3>
            <input type="text" className="desc" />
          </div>
          <div>
            <h3>Image</h3>
            <input type="file" className="img" />
          </div>
        </div>
        <center>
          <button className="btn-trip">Add Trip</button>
        </center>
      </div>
    </div>
  );
};

export default Trip;
