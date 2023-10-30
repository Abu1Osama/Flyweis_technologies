import React, { useEffect, useRef, useState } from "react";
import "../Styles/Navbar.scss";
import logo from "../assets/logo.png";
import arrow_down from "../assets/arrow_down.png";
import searchfavorite from "../assets/searchfavorite.png";
import mumbai from "../assets/mumbai.png";
import agra from "../assets/agra.png";
import hydrabad from "../assets/hydrabad.png";
import polygon from "../assets/Polygon.png";
import polygon2 from "../assets/Polygon 2.png";
import magnify from "../assets/magnify.png";
import Auth from "./Auth";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const otp=localStorage.getItem("otp")
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const optionsRef = useRef(null);
  const moreInfoRef = useRef(null);
  const openSiginpModal = () => {
    setShowSigninModal(true);
  };

  const closeSigninModal = () => {
    setShowSigninModal(false);
    console.log("closed");
  };
  const openOptions = () => {
    setShowOptions(true);
  };

  const closeOptions = () => {
    setShowOptions(false);
  };

  const openMoreInfo = () => {
    setShowMoreInfo(true);
  };

  const closeMoreInfo = () => {
    setShowMoreInfo(false);
  };

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      closeOptions();
    }
    if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
      closeMoreInfo();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const location = useLocation();
  const remove_otp=()=>{
    localStorage.removeItem("otp")
    window.location.reload()
    toast.success("User Logout successfully !", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
    
  }
  return (
    <div  style={{
      background: location.pathname === "/" ? "transparent" : "",
    }} className="nav" id="nav">
      <div className="nav-left">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <Link to={"/"}>
            <h2>CAR SERVICE</h2>
          </Link>
        </div>

        <div className="nav-location">
          <i style={{ color: "white" }} class="fa-solid fa-location-dot"></i>
          <h2>Hyderabad</h2>
          <span>
            <img onClick={openOptions} src={arrow_down} alt="" />
          </span>
          <div
            className="option"
            ref={optionsRef}
            style={{ display: showOptions ? "block" : "none" }}
          >
            <div className="option-content">
              <div className="option-heading">
                <i class="fa-solid fa-location-dot"></i>
                <p>Select your City</p>
              </div>
              <div className="option-inp">
                <input type="text" placeholder="Search " />
                <img className="magnify" src={magnify} alt="" />
              </div>
              <div className="city">
                <div>
                  <img src={hydrabad} alt="" />
                  <h2>Hyderabad</h2>
                </div>
                <div>
                  <img src={agra} alt="" />
                  <h2>New Delhi</h2>
                </div>
                <div>
                  <img src={mumbai} alt="" />
                  <h2>Mumbai</h2>
                </div>
                <div>
                  <img src={agra} alt="" />
                  <h2>Agra</h2>
                </div>
              </div>

              <img className="pyramid" src={polygon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div style={{
              visibility: location.pathname === "/" ? "hidden" : "",
            }} className="mid-inp">
        <input type="text" placeholder="Search Batteries" />
        <img className="searchfavorite" src={searchfavorite} alt="" />
      </div>
      <div className="nav-right">
        <ul>
          <li>Spares</li>
          <Link to={"/blogs"}><li>Blog</li></Link>
          
          <li onClick={openMoreInfo}>More</li>
          
          {!otp&&<li onClick={openSiginpModal}>  Login</li>}
          {otp&&<li onClick={remove_otp} className="Customer" >Customer</li>}
          
        </ul>
        <div
          className="more-info"
          ref={moreInfoRef}
          style={{ display: showMoreInfo ? "block" : "none" }}
        >
          <div className="more-info-content">
            <span>FAQ</span>
            <span>Contact US</span>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Offers</span>
            <span>Reviews</span>
            <img className="pyramid2" src={polygon2} alt="" />
          </div>
        </div>
      </div>
      {showSigninModal && <Auth onClose={closeSigninModal} />}
    </div>
  );
}

export default Navbar;
