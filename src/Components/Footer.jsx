import React from "react";
import "../Styles/Footer.scss";

import email_ico from "../assets/div._3wRwr.png";
import phone_ico from "../assets/div.pgEwo.png";
import w_days from "../assets/div._2wrTx.png";
import W_hour from "../assets/div._2X3CU.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import utube from "../assets/utube.png";

function Footer() {
  return (
    <div className="Footer" id="Footer">
      <div className="footer-top">
        <div className="footer-top-child">
          <h4>ABOUT US</h4>
          <div className="footer-top-child-section">
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Car Service Partners</p>
            <p>Workshop Locator</p>
            <p>Offers</p>
            <p>Reviews</p>
            <p>Directory</p>
          </div>
        </div>
        <div className="footer-top-child">
          <h4>OUR SERVICES</h4>
          <div className="footer-top-child-section">
            <p>Scheduled Services</p>
            <p>AC Services</p>
            <p>Cleaning & Detailing</p>
            <p>Lights & Fitments</p>
            <p>Denting Painting</p>
            <p>Insurance Services</p>
            <p>Custom Repair</p>
            <p>Batteries</p>
            <p>Tyres</p>
            <p>Detailing Services</p>
            <p>Windshields & Glass</p>
          </div>
        </div>
        <div className="footer-top-child">
          <h4>LUXURY BRANDS</h4>
          <div className="footer-top-child-section">
            <p>Mercedes</p>
            <p>BMW</p>
            <p>Audi</p>
            <p>Volvo</p>
            <p>Mitsubishi</p>
            <p>Jaguar</p>
            <p>Porsche</p>
            <p>Rolls Royce</p>
            <p>Ferrari</p>
            <p>Land Rover</p>
          </div>
        </div>
        <div className="footer-top-child">
          <h4>POPULAR BRANDS</h4>
          <div className="footer-top-child-section">
            <p>Maruti Suzuki</p>
            <p>Hyundai</p>
            <p>Honda</p>
            <p>Toyota</p>
            <p>Tata</p>
            <p>Mahindra</p>
            <p>Chevrolet</p>
            <p>Fiat</p>
            <p>Renault</p>
            <p>Kia</p>
            <p>Skoda</p>
            <p>Volkswagen</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-child">
          <div className="footer-bottom-child-address">
            <p>F-212, DLF NEW TOWN HEIGHTS,</p>
          </div>
          <p>SECTOR 91, Garhi Harsaru, Gurugram, Haryana, 122505</p>
          <div className="footer-bottom-child-ico">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            <img src={whatsapp} alt="" />
            <img src={utube} alt="" />
          </div>
        </div>
        <div className="footer-bottom-child">
          <div className="contact">
            <div>
              <span>
                <img src={email_ico} alt="" />
                Email
              </span>
            </div>
            <div>
              <span>Info@Carservice.in</span>
            </div>
          </div>
          <div className="contact">
            <div>
              <span>
                <img src={phone_ico} alt="" />
                Phone Number
              </span>
            </div>
            <div>
              <span>9388893888</span>
            </div>
          </div>
          <div className="contact">
            <span>
              <img src={w_days} alt="" />
              Working Days
            </span>
            <span>Monday - Sunday</span>
          </div>
          <div className="contact">
            <span>
              <img src={W_hour} alt="" />
              Working Hours
            </span>
            <span>7:00AM - 9:00PM(IST)</span>
          </div>
        </div>
        <div className="footer-bottom-child">
          <div className="store">
            <img src={playstore} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
