import React from "react";
import "../Styles/PeriodicServicemain.scss";
import periodic1 from "../assets/periodic1.png";
import periodic2 from "../assets/periodic2.png";
import periodic3 from "../assets/periodic3.png";
import tick from "../assets/tick.png";
import timer from "../assets/timer.png";
import break1 from "../assets/break1.png";
import break2 from "../assets/break2.png";
import break3 from "../assets/break3.png";
import break4 from "../assets/break4.png";
import break5 from "../assets/break5.png";
import break6 from "../assets/break6.png";
import break7 from "../assets/break7.png";
import vid_ico from "../assets/vid_ico.png";
import play2 from "../assets/play2.png";
import rb1 from "../assets/rb1.png";
import rb2 from "../assets/rb2.png";
import rb3 from "../assets/rb3.png";
import Feedback from "./Feedback";

function PeriodicServivemain() {
  return (
    <div id="PeriodicService-main" className="PeriodicService-main">
      <div className="PeriodicService-main-container">
        <div className="PeriodicService-main-container-heading">
          <h1>Scheduled Package</h1>
        </div>
        <div className="PeriodicService-main-container-box">
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={periodic1} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Mini Service</h2>
                  <ul>
                    <li>
                      2000 kms or 2 Month Warranty <br />
                      (Recommended)
                    </li>
                    <li>Every 6000 kms or 3 Months </li>
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
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={periodic2} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Medium Services</h2>
                  <ul>
                    <li>
                      2000 kms or 2 Month Warranty <br />
                      (Recommended)
                    </li>
                    <li>Every 8000 kms or 10 Months</li>
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
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={periodic3} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Major Service</h2>
                  <ul>
                    <li>
                      2000 kms or 2 Month Warranty <br />
                      (Recommended)
                    </li>
                    <li>20000 kms or 12 Months </li>
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
              <span>₹ 4799</span>
              <button className="add-cart">
                <span>+</span>ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="PeriodicService-main-container">
        <div className="PeriodicService-main-container-heading">
          <h1>Brake Maintenance</h1>
        </div>
        <div className="PeriodicService-main-container-box">
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={break1} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Front Brakes Pad</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                      <br />
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
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={break2} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Rear Brakes Shoes</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                      <br />
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
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={break3} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Front Brake Discs</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                      <br />
                    </li>
                    <li>Every 20000 kms or 12 Months (Recommended)</li>
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
                <img src={break4} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Caliper Pin Replacement</h2>
                  <ul>
                    <li>Recommended - In case braking noises from brakes</li>
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
                <img src={break5} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Disc Turning</h2>
                  <ul>
                    <li>
                      2 Month Warranty
                      <br />
                      (Recommended)
                    </li>
                    <li> Every 6000 kms or 3 Months</li>
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
                <img src={break6} alt="" />
              </div>
              <div className="PeriodicService-main-content-data">
                <div className="PeriodicService-top">
                  <h2>Handbrake Wire Replacement</h2>
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
          <div className="PeriodicService-main-child">
            <div className="hour">
              <img src={timer} alt="" />
              <span>4 Hrs Taken</span>
            </div>
            <div className="PeriodicService-main-content">
              <div className="PeriodicService-main-content-img">
                <img src={break7} alt="" />
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
            <img className="maintainence-image-relative" src={vid_ico} alt="" />
          </div>
          <img className="play2" src={play2} alt="" />
          <div className="maintainence-data">
            <p>Periodic Services</p>
            <h2>360° Car Maintenance</h2>
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
            <img src={rb1} alt="" />
            <div className="absolute">
              <span>Lorem Ipsum</span>|<span>Lorem Ipsum</span>|
              <span>Lorem Ipsum</span>
            </div>
          </div>
          <div className="related-blog-child">
            <img src={rb2} alt="" />
            <div className="absolute">
              <span>Lorem Ipsum</span>|<span>Lorem Ipsum</span>|
              <span>Lorem Ipsum</span>
            </div>
          </div>
          <div className="related-blog-child">
            <img src={rb3} alt="" />
            <div className="absolute">
              <span>Lorem Ipsum</span>|<span>Lorem Ipsum</span>|
              <span>Lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>

      <div className="review-recent">
        <Feedback/>
      </div>
    </div>
  );
}

export default PeriodicServivemain;
