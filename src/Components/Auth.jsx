import React, { useState } from "react";
import "../Styles/Auth.scss";
import login_img from "../assets/login_img.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Auth({ onClose }) {
  const navigate=useNavigate()
  const otp=localStorage.getItem("otp")
  console.log("my",otp)
  const [formData, setFormData] = useState({
    mobileNumber: "",
  });

  const handleFormContainerClick = (e) => {
    e.stopPropagation();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://kv-varlu.vercel.app/api/v1/login",
        formData
      );
      console.log("Response from the server:", response.data);
      localStorage.setItem("otp",response.data.otp)
      if(response.data.otp){
     
        toast.success("User Login successfully !", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });
        navigate("/")
        onClose()
      }
    } catch (error) {
      console.error("Error submitting the form:", error.message);
      toast.error("Wrong Credential", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    }
  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div id="auth" className="auth" onClick={onClose}>
      <form onSubmit={handleFormSubmit} className="fotm-container" onClick={handleFormContainerClick}>
        <div className="forn-child">
          <img src={login_img} alt="" />
        </div>
      <h2>Login</h2>
      
          <div className="forn-child-inp">
            <span>+91</span>
            <span>|</span>
            <input
              name="mobileNumber"
              onChange={handleInputChange}
              value={formData.mobileNumber}
              type="text"
              placeholder="Mobile Number"
            />
          </div>
          <div className="forn-child-btn">
            <button className="login-btn">Continue</button>
          </div>
        </form>
    </div>
  );
}

export default Auth;
