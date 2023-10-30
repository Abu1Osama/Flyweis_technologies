import React from "react";
import "../Styles/PeriodicServicemain.scss";
import periodic1 from "../assets/periodic1.png";
import ac1 from "../assets/ac1.png";
import ac2 from "../assets/ac2.png";
import ac3 from "../assets/ac3.png";
import ac4 from "../assets/ac4.png";
import ac5 from "../assets/ac5.png";
import ac6 from "../assets/ac6.png";
import ac7 from "../assets/ac7.png";
import ac8 from "../assets/ac8.png";
import ac9 from "../assets/ac9.png";
import ac10 from "../assets/ac10.png";
import ac11 from "../assets/ac11.png";
import ac12 from "../assets/ac12.png";
import ac13 from "../assets/ac13.png";
import ac14 from "../assets/ac14.png";

import tick from "../assets/tick.png";
import timer from "../assets/timer.png";

import play2 from "../assets/play2.png";

import Feedback from "./Feedback";
function ACService() {
  return (
    <div id="PeriodicService-main" className="PeriodicService-main">
      <div className="PeriodicService-main-container">
        <div className="PeriodicService-main-container-heading">
          <h1>Service Packages</h1>
        </div>
        <div className="PeriodicService-main-container-box">
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac1} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Regular AC Service</h2>
                  <ul>
                    <li>
                      600 kms or 2 Month Warranty <br />
                    </li>
                    <li> Every 6000 kms or 3 Months (Recommended) </li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>AC Vent Cleaning</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>AC Inspection</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>AC Gas (upto 400 gms)</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Condenser Cleaning</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>AC Filter Cleaning</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 2299</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac2} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>High Performance AC Service</h2>
                  <ul>
                    <li>
                      2000 kms or 2 Month Warranty <br />
                    </li>
                    <li>Every 20000 kms or 12 Months (Recommended)</li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Wiper Fluid Replacement</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Battery Water Top Up</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Car Wash</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Interior Vacuuming ( Carpet & Seats )</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Engine Oil Replacement</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 2299</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="PeriodicService-main-container">
        <div className="PeriodicService-main-container-heading">
          <h1>AC Fitments</h1>
        </div>
        <div className="PeriodicService-main-container-box">
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac3} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Cooling Coil Replacement</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                      <br />
                    </li>
                    <li>Recommended - In case of No Cooling</li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Pads Replacement </span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Applicable for Set of 2 Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Inspection of Front Brake Calipers</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Disc Cleaning</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 1299</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac4} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Compressor Replacement</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                      <br />
                    </li>
                    <li>Recommended - In case of No Cooling</li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Pads Replacement </span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Applicable for Set of 2 Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Inspection of Front Brake Calipers</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Disc Cleaning</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 1299</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac5} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Heating Coil Replacement</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                      <br />
                    </li>
                    <li>Recommended - In case of No Cooling</li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of Front Brake Discs</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Pads Replacement </span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Reduces Vibrations & Noises</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Increase Brake Life & Safety</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Free Pickup & Drop Facility</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 1299</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac6} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>V-Belt Replacement</h2>
                  <ul>
                    <li>2 Month Warranty</li>
                    <li>Recommended - In case of No Cooling</li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of Caliper Pins</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Caliper Pins Replacement </span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Caliper Assembly Cost Additional</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Inspection of Front Brake Calipers</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Caliper Pins Cleaning</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 1299</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac7} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>AC Blower Motor Replacement</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                     
                    </li>
                    <li>Recommended - In case of motor not working</li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Pads Replacement </span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Applicable for Set of 2 Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Inspection of Front Brake Calipers</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Disc Cleaning</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 1299</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac8} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Radiator Placement</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                    
                    </li>
                    <li>Recommended - In case of motor not working</li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Pads Replacement </span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Applicable for Set of 2 Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Inspection of Front Brake Calipers</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Disc Cleaning</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 3270</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac9} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Radiator Fan Motor Replacement</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                      
                    </li>
                    <li> Recommended - In case of fan not working</li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Pads Replacement </span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Applicable for Set of 2 Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Inspection of Front Brake Calipers</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Disc Cleaning</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 1299</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={ac10} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Brake Drums Turning</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                      <br />
                      (Recommended)
                    </li>
                    <li>Every 20000 kms or 12 Months (Recommended)</li>
                  </ul>
                </div>
                <div className="desc">
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Opening & Fitting of Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Pads Replacement </span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Applicable for Set of 2 Front Brake Pads</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Inspection of Front Brake Calipers</span>
                  </div>
                  <div className="desc-child">
                    <img src={tick} alt="" />
                    <span>Front Brake Disc Cleaning</span>
                  </div>
                </div>
                <div className="viewall">
                  <span>+ 4 more View All</span>
                </div>
              </div>
            </div>
            <div className="PeriodicService-main-bottom">
              <span>₹ 1299</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="maintainence">
        <div className="maintainence-heading">
          <h1>See How it’s Done </h1>
        </div>
        <div className="maintainence-content">
          <div id="maintainence-image">
            <img className="maintainence-image-relative" src={ac11} alt="" />
          </div>
          <img className="play2" src={play2} alt="" />
          <div className="maintainence-data">
            <p>AC Service & Repair</p>
            <h2>Be the Coolest in the Town</h2>
            <span>WATCH VIDEO</span>
          </div>
        </div>
      </div>

      <div className="related-blog">
        <div className="related-blog-heading">
          <h1>Related Blogs </h1>
        </div>
        <div className="related-blog-content">
          <div className="related-blog-child">
            <img src={ac12} alt="" />
            <div className="absolute">
              <span>Lorem Ipsum</span>|<span>Lorem Ipsum</span>|
              <span>Lorem Ipsum</span>
            </div>
          </div>
          <div className="related-blog-child">
            <img src={ac13} alt="" />
            <div className="absolute">
              <span>Lorem Ipsum</span>|<span>Lorem Ipsum</span>|
              <span>Lorem Ipsum</span>
            </div>
          </div>
          <div className="related-blog-child">
            <img src={ac14} alt="" />
            <div className="absolute">
              <span>Lorem Ipsum</span>|<span>Lorem Ipsum</span>|
              <span>Lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>

      <div className="review-recent">
        <Feedback />
      </div>
    </div>
  );
}

export default ACService;
