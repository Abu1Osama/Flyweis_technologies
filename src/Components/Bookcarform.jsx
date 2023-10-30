import React from "react";
import "../Styles/Bookform.scss";
import star from "../assets/star.png";

function Bookcarform() {
  return (
    <div className="Bookform" id="Bookform">
      <div className="bookform-main">
        <h2>Book your Car Service Now !</h2>
        <p>Get instant quotes for your car service</p>
        <div className="ratings">
          <span>Ratings</span>
          <img src={star} alt="" />
          <span>4.7/5</span>
        </div>
        <div className="inp">
          <select name="" id="">
          <option value="">Select your Car</option>
          </select>
          <input type="text" placeholder="Enter your Mobile Number" />
        </div>
        <button className="bookform-btn">Check Prices For Free</button>
      </div>
    </div>
  );
}

export default Bookcarform;
