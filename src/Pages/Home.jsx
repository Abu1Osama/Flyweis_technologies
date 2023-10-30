import React, { useState } from "react";
import "../Styles/Home.scss";
import citydriver from "../assets/Citydriver.png";
import cartools from "../assets/cartools.png";
import afford from "../assets/afford.png";
import productquality from "../assets/Productquality.png";
import Rectangle516 from "../assets/Rectangle 516.png";
import Rectangle517 from "../assets/Rectangle 517.png";
import Rectangle518 from "../assets/Rectangle 518.png";
import battry from "../assets/battry.png";
import ac from "../assets/ac.png";
import brakes from "../assets/brakes.png";
import clutch from "../assets/clutch.png";
import Obd from "../assets/Obd.png.png";
import lights from "../assets/lights.png";
import glass from "../assets/glass.png";
import drill from "../assets/drill.png";
import tyres from "../assets/tyres.png";
import spa from "../assets/spa.png";
import steering from "../assets/steering.png";
import suspension from "../assets/suspension.png";
import bodyparts from "../assets/bodyparts.png";
import sidemirror from "../assets/sidemirror.png";
import star from "../assets/star.png";
import data1 from "../assets/data1.png";
import data2 from "../assets/data2.png";
import data3 from "../assets/data3.png";
import data4 from "../assets/data4.png";
import data5 from "../assets/data5.png";
import data6 from "../assets/data6.png";
import data7 from "../assets/data7.png";
import data8 from "../assets/data8.png";
import data9 from "../assets/data9.png";
import data10 from "../assets/data10.png";

import Auth from "../Components/Auth";
import poster1 from "../assets/poster 1 (1).png";
import poster2 from "../assets/Poster 2 (1).png";
import poster3 from "../assets/poster 3 (1).png";
import Feedback from "../Components/Feedback";
import Bookcarform from "../Components/Bookcarform";
import { Link } from "react-router-dom";

function Home() {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="Home" id="Home">
      <div className="hero-div">
        <div className="hero-main">
          <div className="hero-div-heading">
            <h2>Experience The Best Car Services In Hyedrabad</h2>
            <p>We provide Our Services in over 100+ Major Cities also.</p>
          </div>
          <div className="hero-div-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
              egestas ligula. Nulla facilisi. Phasellus faucibus ligula id
              mauris varius, eget faucibus lorem fringilla. Vivamus ut felis
              porta, luctus libero eget, feugiat velit. Sed aliquet leo et ex
              sodales,{" "}
            </p>
          </div>
          <div className="hero-div-stat">
            <div className="hero-div-stat-left">
              <div>
                <i class="fa-solid fa-star fa-2x"></i>
              </div>
              <div className="hero-div-stat-left-count">
                <span>4.7</span>
                <p>Based on 100000+ Reviews</p>
              </div>
            </div>
            <div className="mid">|</div>
            <div className="hero-div-stat-right">
              <div>
                <i class="fa-solid fa-user fa-2x"></i>
              </div>
              <div className="hero-div-stat-right-count">
                <span>2,50,000</span>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mini-nav">
        <a
          href="#"
          onClick={() => handleTabClick("services")}
          style={
            activeTab === "services"
              ? { borderBottom: "1px solid #001B39" }
              : {}
          }
        >
          Our Services
        </a>
        <a
          href="#custom-service"
          onClick={() => handleTabClick("custom")}
          style={
            activeTab === "custom" ? { borderBottom: "1px solid #001B39" } : {}
          }
        >
          Curated Custom Service
        </a>
        <a
          href="#car-services"
          onClick={() => handleTabClick("how")}
          style={
            activeTab === "how" ? { borderBottom: "1px solid #001B39" } : {}
          }
        >
          How Car Service Works?
        </a>
        <a
          onClick={() => handleTabClick("now")}
          style={
            activeTab === "now" ? { borderBottom: "1px solid #001B39" } : {}
          }
          href="#Rating&Reviews"
        >
          Rating & Reviews
        </a>
        <a href="">Price List</a>
      </div>

      <div className="car-service">
        <div className="car-service-heading">
          <h2>Car Services Available In Hyderabad</h2>
          <p>
            Get hassle-free and professional car service, car repair, wheel care
            services, cashless insurance claim and much more in Hyderabad.
          </p>
        </div>
        <div className="car-section-main">
          <Link to={"/periodic"}>
            <img src={data1} alt="" />
          </Link>
          <Link to={"/periodic"}>
            <img src={data2} alt="" />
          </Link>
          <Link to={"/periodic"}>
            <img src={data3} alt="" />
          </Link>
          <Link to={"/periodic"}>
            <img src={data4} alt="" />
          </Link>
          <Link to={"/periodic"}>
            <img src={data5} alt="" />
          </Link>
          <Link to={"/periodic"}>
            <img src={data6} alt="" />
          </Link>
          <Link to={"/periodic"}>
            <img src={data7} alt="" />
          </Link>
          <Link to={"/periodic"}>
            <img src={data8} alt="" />
          </Link>
          <Link to={"/periodic"}>
            <img src={data9} alt="" />
          </Link>
          <Link to={"/periodic"}>
            <img src={data7} alt="" />
          </Link>
          <img src={data2} alt="" />
          <Link to={"/periodic"}>
            <img src={data5} alt="" />
          </Link>
        </div>
        <div className="car-section-bottom">
          <img src={poster1} alt="" />
          <img src={poster2} alt="" />
          <img src={poster3} alt="" />
        </div>
      </div>

      <div className="custom-service" id="custom-service">
        <div className="custom-service-heading">
          <h2>Curated Custom Services</h2>
        </div>
        <div className="custom-service-data">
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={battry} alt="" /> <h2>Batteries</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={ac} alt="" /> <h2>AC Parts</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={brakes} alt="" /> <h2>Brakes</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={clutch} alt="" /> <h2>Clutch</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={Obd} alt="" /> <h2>Go connect 2.0</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={lights} alt="" /> <h2>Lights</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={glass} alt="" /> <h2>Glasses</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={drill} alt="" /> <h2>Car Detailing</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={tyres} alt="" /> <h2>Tyres</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={spa} alt="" /> <h2>Car Spa</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={steering} alt="" /> <h2>Steering</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={suspension} alt="" /> <h2>Suspension</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={bodyparts} alt="" /> <h2>Body Parts</h2>
            </Link>
          </div>
          <div className="custom-service-datachild">
            <Link to={"/periodic"}>
              <img src={sidemirror} alt="" /> <h2>Side Mirror</h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="workshop">
        <div className="workshop-heading">
          <h2>Choose the workshop Near You</h2>
        </div>
        <div className="workshop-data">
          <div className="workshop-child">
            <img src={Rectangle516} alt="" />
          </div>
          <div className="workshop-child">
            <img src={Rectangle517} alt="" />
          </div>
          <div className="workshop-child">
            <img src={Rectangle518} alt="" />
          </div>
        </div>
      </div>

      <div className="car-services" id="car-services">
        <div className="car-services-heading">
          <h2>How Car Service Works ?</h2>
        </div>
        <div className="car-services-data">
          <div className="car-service-child">
            <div className="service-img">
              <img src={citydriver} alt="" />
            </div>
            <h1>Free Pickup Drop</h1>
          </div>
          <div className="car-service-child">
            <img src={cartools} alt="" />
            <div className="service-img"></div>
            <div>
              <h1>Genuine Parts</h1>
            </div>
          </div>
          <div className="car-service-child">
            <img src={productquality} alt="" />
            <div className="service-img"></div>
            <h1>Genuine Parts</h1>
          </div>
          <div className="car-service-child">
            <div className="service-img">
              <img src={afford} alt="" />
            </div>
            <h1>Affordable Price</h1>
          </div>
        </div>
      </div>
      <div className="feedback-review" id="Rating&Reviews">
        <Feedback />
      </div>
      <Bookcarform />
    </div>
  );
}

export default Home;
